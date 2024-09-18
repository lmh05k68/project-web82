import React, { useState, useEffect } from "react";
import car1 from '../../../img/imghp.png'
import car2 from '../../../img/car2.png'
import car3 from '../../../img/car4.png'
import './imgChange.css'
const ImgChange = () => {
    const images = [car1, car2, car3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
        return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
  }, []);
  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Car" className="sliderImg" style={{width:'100%',height:'600px'}} />
      <div className="sliderIndicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
        <div className="find">
          <h1>Find your dream car</h1>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}
export default ImgChange