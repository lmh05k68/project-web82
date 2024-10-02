import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [response, setResponse] = useState({
    success: null,
    token: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/user/login', formData); // URL API đăng nhập
      setResponse({
        success: true,
        token: res.data.data
      });
      alert(res.data.message);
      navigate('/');
    } catch (error) {
      setResponse({
        success: false,
        token: ''
      });
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>Login</h1>
            <p>Homepage - Login</p>
        </div>
        </div>
      <img src="/Rectangle 108.png" style={{ position: "relative", marginBottom: "1%" }} alt="background" />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="login-form">
            <label htmlFor="pass">Password:</label>
            <input 
              type={showPassword ? "text" : "password"}  
              name="password"
              id="pass" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <span className="password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Login</button>
          <div className="to-register">
            <p>Don't have an account?</p>
            <Link to="/register" style={{ color: "#007CC7", textDecoration: "none" }}>
              <p>Register here</p>
            </Link>
          </div>
          <div className="to-register" style={{marginTop:'5%'}}>
            <p>Forgot your password?</p>
            <Link to="/forgot-password" style={{ color: "#007CC7", textDecoration: "none" }}>
              <p>Reset it here</p>
            </Link>
          </div>

        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;