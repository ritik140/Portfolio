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
                <a
                  href="https://twitter.com/?request_context=signup"
                  target="_blank"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={insta} alt="instagram" />
                </a>
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
                <a href="">Home</a>
              </li>
              <li>
                <img src={info} alt="" />
                <a href="">About</a>
              </li>
              <li>
                <img src={info} alt="" />
                <a href="">Portfolio</a>
              </li>
              <li>
                <img src={service} alt="" />
                <a href="">Service</a>
              </li>
              <li>
                <img src={phone} alt="" />
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="full-image">
          <img id="myimage" src={myimage} alt="BIG IMAGE" />
          <div class="text-overlay1">Ritik Raj</div>
          <div class="text-overlay2">
            I am <span>Developer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
