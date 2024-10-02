import UserModel from "../models/usermodel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer'; 
// Đăng nhập
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or password required!");

    // Kiểm tra xem người dùng có tồn tại không
    const exist = await UserModel.findOne({ email });
    if (!exist) throw new Error("Email or password is not valid!");

    // So sánh mật khẩu
    const comparePassword = await bcrypt.compare(password, exist.password);
    if (!comparePassword) throw new Error("Wrong password!");

    // Tạo token
    const user = {
      _id: exist._id,
      email: exist.email,
    };

    const accessToken = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });

    // Lưu token vào mảng `tokens` trong UserModel
    exist.tokens.push(accessToken);
    await exist.save();

    res.status(200).send({
      message: "Login successfully!",
      data: accessToken,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: null,
    });
  }
};
// Đăng ký
const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email || !password) throw new Error("Email or password required!");
  
      // Kiểm tra xem người dùng có tồn tại hay không
      const exists = await UserModel.findOne({ email });
      if (exists) {
        return res.status(400).send({
          message: "Existed user!",
          success: false,
        });
      }
  
      // Kiểm tra email hợp lệ
      if (!validator.isEmail(email)) {
        return res.status(400).send({
          message: "Valid email please!",
          success: false,
        });
      }
  
      // Kiểm tra độ dài mật khẩu
      if (password.length < 8) {
        return res.status(400).send({
          message: "Password must have at least 8 characters!",
          success: false,
        });
      }
  
      // Tạo mật khẩu đã mã hóa
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Tạo người dùng mới
      const createUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
        tokens: [] // Khởi tạo mảng tokens trống
      });
  
      // Tạo token cho người dùng mới
      const user = {
        _id: createUser._id,
        email: createUser.email,
      };
      const accessToken = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: "5m",
      });
  
      // Lưu token vào mảng `tokens`
      createUser.tokens.push(accessToken);
      await createUser.save();
  
      res.status(200).send({
        message: "Register successfully!",
        data: accessToken,
        success: true,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
        data: null,
      });
    }
  };  
//api đăng xuất
const logoutUser = async (req, res) => {
    try {
      const { token } = req.body; // Nhận token từ request
  
      // Tìm người dùng theo token
      const user = await UserModel.findOne({ tokens: token });
      if (!user) throw new Error("User not found or already logged out");
  
      // Xóa token khỏi mảng `tokens`
      user.tokens = user.tokens.filter(t => t !== token);
      await user.save();
  
      res.status(200).send({
        message: "Logout successfully!",
        data: null
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: null
      });
    }
};  
// Gửi email quên mật khẩu
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).send({ message: 'User not found!' });

  // Tạo token để gửi qua email
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '15m' });

  // Gửi email (bạn cần cấu hình nodemailer)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Tài khoản email của bạn
      pass: process.env.EMAIL_PASS, // Mật khẩu email của bạn
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    text: `You can reset your password using this link: http://localhost:3000/reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email' });
    }
    res.status(200).send({ message: 'Check your email for reset instructions' });
  });
};

// Đặt lại mật khẩu
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id);
    if (!user) return res.status(400).send({ message: 'Invalid token' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();

    res.status(200).send({ message: 'Password has been reset successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Invalid or expired token' });
  }
};
export { loginUser, registerUser,logoutUser,resetPassword,forgotPassword };