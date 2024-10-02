import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './forgotPassword.css'
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
const ForgotResetPassword = () => {
  const { token } = useParams(); // Lấy token từ URL nếu có
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (token) {
        // Nếu có token, thực hiện đặt lại mật khẩu
        await axios.post('http://localhost:3000/api/user/reset-password', { token, newPassword });
        setMessage('Password has been reset successfully!');
        // Chuyển hướng về trang đăng nhập sau khi đặt lại mật khẩu thành công
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Nếu không có token, thực hiện gửi email quên mật khẩu
        await axios.post('http://localhost:3000/api/user/forgot-password', { email });
        setMessage('Check your email for reset instructions');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return <>
  <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>Reset Password</h1>
            <p>Homepage - Reset Password</p>
        </div>
        </div>
        <img src="/Rectangle 108.png" style={{ position: "relative", marginBottom: "1%" }} alt="background" />
  <div className="forgot-reset-password-container">
      <h2>{token ? 'Reset Password' : 'Forgot Password'}</h2>
      <form onSubmit={handleSubmit} className="forgot"> 
        {!token && (
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        {token && (
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{token ? 'Reset Password' : 'Send Reset Link'}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    <Footer></Footer>
  </>
};

export default ForgotResetPassword;