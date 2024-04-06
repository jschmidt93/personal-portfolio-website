import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
        <img src="./img/JRS_White_Graphic_Logo.png" alt="JacobRyanSchmidt" style={{ maxWidth: "80px" }} />
        </div>
        
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <div className="footer--text--container"><p className="footer--text">©2024 jakeryanschmidt. All Rights Reserved.</p></div>
      </div>
    </footer>
  );
}

export default Footer;
