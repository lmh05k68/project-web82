import React, { useState, useEffect } from "react";
import car1 from '../../img/imghp.png'
import car2 from '../../img/car2.png'
import car3 from '../../img/car4.png'
const Slider = () => {
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
      <img src={images[currentIndex]} alt="Car" className="sliderImg" style={{width:'100%',height:'630px'}} />
      <div className="sliderIndicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default Slider