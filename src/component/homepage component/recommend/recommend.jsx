import './recommend.css'
import React, { useState, useContext } from "react";
import RecommendCard from '../../card/recommendCard.jsx'
import Data from '../../../data.js'
import {Link} from 'react-router-dom'
const Recommend = () => {
    const [activeOption, setActiveOption] = useState("New"); 
    const handleClick = (option) => {
        setActiveOption(option);
    };
    const filteredCars = Data.filter(car => car.state.toLowerCase() === activeOption.toLowerCase());
    const carsToDisplay = filteredCars.slice(0, 3);
    return <>
        <div className="recommendContainer">
            <h2 style={{ fontFamily: "sans-serif", paddingBottom:"2%" }}>Recommended cars</h2>
            <div className="recommendList">
                <h3
                className={`op2 ${activeOption === "New" ? "active" : ""}`}
                onClick={() => handleClick("New")}
                >
                    New
                </h3>
                <h3
                className={`op2 ${activeOption === "Used" ? "active" : ""}`}
                onClick={() => handleClick("Used")}
                >
                    Used
                </h3>
                <Link to={activeOption === "New" ? "/newCars" : "/usedCars"} className="see">
                    <p>See more</p>
                </Link>
            </div>
            <RecommendCard cars={carsToDisplay}></RecommendCard>
        </div>
    </>
}
export default Recommend