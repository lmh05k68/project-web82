import './testimonial.css'
import React, { useRef, useEffect } from 'react';
const Testimonial = () => {
    const testimonialWrapperRef = useRef(null);
    useEffect(() => {
    const testimonialWrapper = testimonialWrapperRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      const scrollAmount = event.deltaY;
      testimonialWrapper.scrollLeft += scrollAmount;
      if (testimonialWrapper.scrollLeft + testimonialWrapper.clientWidth >= testimonialWrapper.scrollWidth) {
        testimonialWrapper.scrollLeft = 0;
      }
      if (testimonialWrapper.scrollLeft === 0 && scrollAmount < 0) {
        testimonialWrapper.scrollLeft = testimonialWrapper.scrollWidth - testimonialWrapper.clientWidth;
      }
    };
    testimonialWrapper.addEventListener('wheel', handleWheel);
    return () => {
      testimonialWrapper.removeEventListener('wheel', handleWheel);
    };
  }, []);
    return <>
        <div className="testimonialContainer">
            <h2 style={{paddingLeft:"10%"}}>Testimonial</h2>
            <div className="testimonialWrapper" ref={testimonialWrapperRef}>
                <div className="testimonialCard">
                    <img src="TestimonialImg.png"></img>
                    <div>
                        <h2 style={{paddingTop:"5%",color:"#007CC7"}}>Omar Mango</h2>
                        <p style={{color:"#007CC7"}}>Customer</p>
                        <p style={{paddingTop:"10%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="testimonialCard">
                    <img src="TestimonialImg.png"></img>
                    <div>
                        <h2 style={{paddingTop:"5%",color:"#007CC7"}}>Omar Mango</h2>
                        <p style={{color:"#007CC7"}}>Customer</p>
                        <p style={{paddingTop:"10%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="testimonialCard">
                    <img src="TestimonialImg.png"></img>
                    <div>
                        <h2 style={{paddingTop:"5%",color:"#007CC7"}}>Omar Mango</h2>
                        <p style={{color:"#007CC7"}}>Customer</p>
                        <p style={{paddingTop:"10%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}
export default Testimonial