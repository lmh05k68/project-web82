import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage.jsx'
import NewCars from './page/newCars/newCars.jsx'
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/newCars" element={<NewCars/>} />
    </Routes>
  </Router>
)