import React from "react";
import $ from "jquery";

import "../static/css/NavBar.css";

function Navbar(props) {
  const login_link = props.login || "./login";
  const signup_link = props.signup || "./signup";
  const contact_link = props.writeUs || "../about/contact";
  const about_link = props.about || "../about";


  return (
    <nav className="navbar">
      <div id="trapezoid">
        <a className="sub-home" href="#">
          Menu
        </a>
        <a href={login_link} className="expandHome">
          Login
        </a>
        <div className="subnav">
          <button className="subnavbtn">
            Contact Us<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div id="subnav-trapezoid">
              <a href="https://www.facebook.com/SMS-105072522173755">Facebook</a>
              <a href="https://github.com/divya-nshi/S.M.S.">GitHub</a>
              <a href={contact_link}>Write to Us</a>
            </div>
          </div>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            About Us<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href={about_link}>About Team</a>
              {/* <a href="./dashboard/gallery"></a>
              <a href="#Services">Sub menu3</a> */}
            </div>
          </div>
        </div>
        <a href={signup_link} className="expandHome">
          Sign UP
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
