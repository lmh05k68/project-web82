import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [response, setResponse] = useState({
    message: '',
    success: null,
    token: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/user/login', formData);  // URL API đăng nhập của bạn
      setResponse({
        message: res.data.message,
        success: true,
        token: res.data.data // Lưu token sau khi đăng nhập thành công
      });
      setFormData({ email: '', password: '' });
      localStorage.setItem('token', res.data.data); // Lưu token vào localStorage để sử dụng cho các request sau
    } catch (error) {
      setResponse({
        message: error.response?.data?.message || "Something went wrong!",
        success: false,
        token: ''
      });
    }
  };

  return (
    <div className="login-container">
      <h1>Đăng Nhập</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
      {response.success !== null && (
        <div className={response.success ? "success-message" : "error-message"}>
          {response.message}
        </div>
      )}
    </div>
  );
};

export default Login;
