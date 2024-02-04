import React from "react";
import "../App.css";
import insta from "../photos/001-instagram.png";
import twitter from "../photos/002-twitter.png";
import service from "../photos/003-customer-service.png";
import home from "../photos/004-home.png";
import info from "../photos/005-info-button.png";
import phone from "../photos/phone.png";
import facebook from "../photos/007-facebook.png";
import linkedin from "../photos/008-linkedin.png";
import photo from "../photos/my-photo.jpg";
import myimage from "../photos/big-image.jpg";
const Header = () => {
  return (
    <>
      <div className="box">
        <div className="main-content">
          <div className="content">
            <img className="photo" src={photo} alt="img" />
            <p>Ritik Raj</p>
            <ul className="connect">
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={insta} alt="instagram" />
              </li>
              <li>
                <img src={insta} alt="Leetcode" />
              </li>
              <li>
                <img src={linkedin} alt="Linkedln" />
              </li>
            </ul>
          </div>
          <div className="property">
            <ul className="information">
              <li>
                <img src={home} alt="" />
                Home
              </li>
              <li>
                <img src={info} alt="" />
                About
              </li>
              <li>
                <img src={info} alt="" />
                Portfolio
              </li>
              <li>
                <img src={service} alt="" />
                Services
              </li>
              <li>
                <img src={phone} alt="" />
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="full-image">
          <img id="myimage" src={myimage} alt="BIG IMAGE" />
          <h1>Ritik Raj</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
