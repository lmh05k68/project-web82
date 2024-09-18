import './recommend.css'
import React, { useState, useContext } from "react";
import RecommendCard from '../../card/recommendCard.jsx'
const Recommend = () => {
    const [activeOption, setActiveOption] = useState("New"); 
    const handleClick = (option) => {
        setActiveOption(option);
    };
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
                <p>See more </p>
            </div>
            <RecommendCard></RecommendCard>
        </div>
    </>
}
export default Recommend