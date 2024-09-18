import React from "react";
import "./footer.css";
function Footer() {
  return <>
  <footer className="footerContainer">
    <div className="footerLogo">
      <img src="/logo.png"/>
    </div>
    <div className="footerLine"></div>
    <div className="footerList">
      <div>
        <div>ABOUT US</div><br/>
        <div>FAQ</div><br/>
        <div>CONTACT</div>
      </div>
      <div>
        <div>CUSTOMER SERVICE</div><br/>
        <div>info@car.com</div><br/>
        <div>240-865-3730</div>
      </div>
      <div>
        <div>3926 Calvin Street</div>
        <div>Baltimore, Maryland,</div>
        <div>21201,</div>
        <div>United State</div>
      </div>
    </div>
    <div className="footerLine"><p>2021 Autohunt. All right reserved</p></div>
  </footer>
  </>
}

export default Footer;
