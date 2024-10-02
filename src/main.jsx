import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './page/homepage/homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewCars from './page/newCars/newCars.jsx'
import UsedCars from './page/usedCars/usedCars.jsx'
import Detail from './component/detail/detail.jsx'
import Cmp from './page/compare page/cmp.jsx'
import Sell from './component/sell/sell.jsx'
import Login from './page/login/login.jsx'
import Register from './page/login/register.jsx'
import CarChart from './component/chart/chart.jsx'
import ForgotResetPassword from './page/login/forgotPassword.jsx'
createRoot(document.getElementById('root')).render(
  <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/newCars" element={<NewCars />} />
          <Route path="/usedCars" element={<UsedCars />} />
          <Route path="/car/:id" element={<Detail />} />
          <Route path="/cmp" element={<Cmp />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/chart" element={<CarChart />} />
          <Route path="/forgot-password" element={<ForgotResetPassword />} />
          <Route path="/reset-password/:token" element={<ForgotResetPassword />} />
        </Routes>
      </Router>
)