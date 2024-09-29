import React from "react";
import "./App.css";
import Homepage from './page/homepage/homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {UserProvider} from './component/context/UserContext.jsx' 
import NewCars from './page/newCars/newCars.jsx'
import UsedCars from './page/usedCars/usedCars.jsx'
import Detail from './component/detail/detail.jsx'
import Cmp from './page/compare page/cmp.jsx'
import Sell from './component/sell/sell.jsx'
import Login from './page/login/login.jsx'
import Register from './page/login/register.jsx'
import CarChart from './component/chart/chart.jsx'
function App() {
    return <>
    <UserProvider>
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
        </Routes>
      </Router>
    </UserProvider>
    </>
  }
  
  export default App;
  