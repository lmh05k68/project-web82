import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import './cmp.css'
import React, { useState } from 'react';
import Data from '../../data.js'
const Cmp = () => {
  const [selectedCar1, setSelectedCar1] = useState(null);
  const [selectedCar2, setSelectedCar2] = useState(null);
  
    return <>
    <div className="newHeader">
        <Header></Header>
        <h1>Compare Cars</h1>
        <p>Homepage - Compare</p>
    </div>
    <div className="cmpCardContainer">
    <div className="cmpCard">
        
    </div>
    

    </div>
    <Footer></Footer>
    </>
}
export default Cmp