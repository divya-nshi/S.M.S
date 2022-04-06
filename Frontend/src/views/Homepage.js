import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../utils/NavBar";
import "../static/css/Homepage.css";

function Homepage() {
  return (
    <React.Fragment>
      <Navbar login={"./log/login"} signup={"./log/signup"} writeUs={"./about/contact"} about={"./about"}/>
      <div class="hp__container">
        <div class="hp__arrow">
          <div class="hp__outer"></div>
          <div class="hp__inner"></div>
        </div>
        <div class="hp__message-body">
          <p class="home-page_title">Welcome To Our Website S.M.S!<br></br> Yayayay!</p>
        </div>
      </div>
      <div className="pg__background">
        <div className="pg_main">
          <div class="penguin">
            <div class="penguin-bottom">
              <div class="right-hand"></div>
              <div class="left-hand"></div>
              <div class="right-feet"></div>
              <div class="left-feet"></div>
            </div>
            <div class="penguin-top">
              <div class="right-cheek"></div>
              <div class="left-cheek"></div>
              <div class="belly"></div>
              <div class="right-eye">
                <div class="sparkle"></div>
              </div>
              <div class="left-eye">
                <div class="sparkle"></div>
              </div>
              <div class="blush-right"></div>
              <div class="blush-left"></div>
              <div class="beak-top"></div>
              <div class="beak-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Homepage;
