import './header.css'
import { Link, useNavigate } from "react-router-dom";
import Slider from '../slider/slider.jsx'
const Header = () =>{
    return <>
    <div className="headerContainer">
        <div>
            <img src="logo.png"></img>
        </div>
        <div>New cars</div>
        <div>Used cars</div>
        <div>Compare</div>
        <div>Sell</div>
        <div>Article</div>
        <div>Sign In</div>
        <div>EN</div>
    </div>
    <Slider></Slider>
    </>
}
export default Header