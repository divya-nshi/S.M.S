import React from "react";
import $ from "jquery";

import "../static/css/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="trapezoid">
        <a className="sub-home" href="#">
          Menu
        </a>
        <a href="#About" className="expandHome">
          Menu
        </a>
        <div className="subnav">
          <button className="subnavbtn">
            Menu<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div id="subnav-trapezoid">
              <a href="#Clients">Sub menu</a>
              <a href="#Clients">Sub menu</a>
              <a href="#Clients">Sub menu</a>
            </div>
          </div>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            Menu<i className="fa fa-caret-down"></i>
          </button>
          <div className="subnav-content">
            <div className="subnav-trapezoid">
              <a href="#Services">Sub menu</a>
              <a href="#Services">Sub menu</a>
              <a href="#Services">Sub menu</a>
            </div>
          </div>
        </div>
        <a href="#" className="expandHome">
          Menu
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
