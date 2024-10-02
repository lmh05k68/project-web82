import React, { useEffect, useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Trạng thái xác thực người dùng
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra `accessToken` trong `localStorage`
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true); // Nếu có token, xác nhận người dùng đã đăng nhập
    }
  }, []); // Chỉ chạy một lần khi component mount

  // Hàm đăng xuất
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken'); // Lấy token từ localStorage

      // Gửi yêu cầu đăng xuất tới server
      await axios.post('http://localhost:3000/api/user/logout', { token });

      // Xóa token khỏi localStorage và cập nhật trạng thái
      localStorage.removeItem('accessToken');
      setIsAuthenticated(false); // Cập nhật lại trạng thái đăng xuất
      navigate('/login'); // Chuyển hướng về trang đăng nhập
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };

  return (
    <header className="headerContainer">
      <Link to="/"><img src="/logo.png" alt="logo" /></Link>
      <Link to="/newCars" className="headerList">New cars</Link>
      <Link to="/usedCars" className="headerList">Used cars</Link>
      <Link to="/cmp" className="headerList">Compare</Link>
      <Link to="/sell" className="headerList">Sell</Link>
      <Link to="/chart" className="headerList">Chart</Link>
      {isAuthenticated ? (
        <span onClick={handleLogout} className="headerList">Log out</span>
      ) : (
        <Link to="/login" className="headerList">Sign In</Link>
      )}
    </header>
  );
};

export default Header;