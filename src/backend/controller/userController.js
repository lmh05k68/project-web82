import UserModel from "../models/usermodel.js";
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
//đăng nhập
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) throw new Error("Email or password is missing");
        const exist = await UserModel.findOne({email});
        if(!exist) throw new Error("email or password is invalid!");
        const comparePassword = bcrypt.compareSync(password, exist.password);
        if(!comparePassword) throw new Error("password is invalid");
        const user = {
            _id: exist._id,
            email: exist.email
        }
    
        const accessToken = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: 60*5
        })

        res.status(200).send({
            message: 'Login successful!',
            data: accessToken
        });
    } catch (error) {
        res.status(500).send({
            message:error.message,
            data:null
        })
   }
}
//đăng kí
const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!email || !password) throw new Error("Email or password is missing");
        const exists = await UserModel.findOne({email});
        if(exists) {
            return res.json({
                message: 'User already exists',
                success: false
            })
        }
        if(!validator.isEmail(email)) {
            return res.json({
                message: "Please enter a valid email",
                success: false
            }) 
        }
        if(password.length < 8) {
            return res.json({
                message: "Please enter a valid password",
                success: false
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hassedpassword = bcrypt.hashSync(password, salt);
        const createUser = await UserModel.create({
            name,
            email,
            password: hassedpassword
        })
        const user = {
            _id: createUser._id,
            email: createUser.email
        }
        const accessToken = jwt.sign(user ,process.env.SECRET_KEY,{
            expiresIn: 60*5
        })
        res.status(200).json({
            message:"Thành Công",
            data: accessToken,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}
export {loginUser, registerUser}