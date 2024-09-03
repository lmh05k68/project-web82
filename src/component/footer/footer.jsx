import React from "react";
import "./footer.css";
// import logo from "../images/logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="img">
        <img src={logo} alt="" />
      </div>
      <div className="line"></div>
      <div className="info-thanh">
        <div className="contact1">
          <ul>
            <li>ABOUT US</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="contact1">
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li>info@car.com</li>
            <li>240-865-3730</li>
          </ul>
        </div>
        <div className="add-social">
          <ul>
            <li>3926 Calvin Street,</li>
            <li>Baltimore, Maryland,</li>
            <li>21201,</li>
            <li>United State</li>
          </ul>
          <div className="socialIcon">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p className="p-Footer-thanh">2021 Autohunt. All Rights reserved</p>
    </div>
  );
}

export default Footer;
