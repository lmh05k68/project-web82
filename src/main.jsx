import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage.jsx'
import NewCars from './page/newCars/newCars.jsx'
import UsedCars from './page/usedCars/usedCars.jsx'
import Detail from './component/detail/detail.jsx'
import Cmp from './page/compare page/cmp.jsx'
import Sell from './component/sell/sell.jsx'
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/newCars" element={<NewCars/>} />
      <Route path="/usedCars" element={<UsedCars/>}/>
      <Route path="/car/:id" element={<Detail/>}/>
      <Route path="/cmp" element={<Cmp/>}/>
      <Route path ="/sell" element={<Sell/>}/>
    </Routes>
  </Router>
)