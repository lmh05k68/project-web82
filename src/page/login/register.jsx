// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../component/header/header.jsx';
import Footer from '../../component/footer/footer.jsx';
import { Link } from 'react-router-dom';
import './register.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/register', formData); // URL API của bạn
            if (res.data.success) {
                alert('Đăng ký thành công!');
                setFormData({ name: '', email: '', password: '' });
            } else {
                alert(`Đăng ký thất bại: ${res.data.message}`);
            }
        } catch (error) {
            alert(`Đăng ký thất bại: ${error.response?.data?.message || "Something went wrong!"}`);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>Register</h1>
            <p>Homepage - Register</p>
        </div>
    </div>
            <img src="/Rectangle 108.png" style={{ position: "relative", marginBottom: "1%" }} alt="Register Banner" />
            <div className="register-container">
                <form onSubmit={handleSubmit}>
                    <div className="login-form">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="login-form">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="login-form">
                        <label>Password:</label>
                        <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
                        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Đăng Ký</button>
                    <div className="to-login">
                        <p>Already have an account?</p>
                        <Link to="/login" style={{ color: "#007CC7", textDecoration: "none" }}><p>Login here</p></Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Register;