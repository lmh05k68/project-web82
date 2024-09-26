import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [response, setResponse] = useState({
    message: '',
    success: null
  });

  // Hàm xử lý khi người dùng thay đổi thông tin trên form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Hàm xử lý khi người dùng nhấn vào nút "Đăng Ký"
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/user/register', formData);  // URL API của bạn
      setResponse({
        message: res.data.message,
        success: res.data.success
      });
      if (res.data.success) {
        setFormData({ name: '', email: '', password: '' });
      }
    } catch (error) {
      setResponse({
        message: error.response?.data?.message || "Something went wrong!",
        success: false
      });
    }
  };

  return (
    <div className="register-container">
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
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
        <button type="submit">Đăng Ký</button>
      </form>
      {response.success !== null && (
        <div className={response.success ? "success-message" : "error-message"}>
          {response.message}
        </div>
      )}
    </div>
  );
};

export default Register;