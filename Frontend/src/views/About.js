import React from "react";
import "../static/css/About.css";

import back_img from '../static/images/logout.png';

export default function About() {
  return (
    <div className="About__main">
      <nav className="about__navbar about__navbar-expand-lg about__navbar-light">
        <div className="about__contact-us">About Us </div>
        <a href="/" className="about__logout">
          <img src={back_img} className="about__logout-img"></img>
          <div
            className="about__logout about__text"
            style={{ color: "black", fontSize: "25px" }}
          >
            Back
          </div>
        </a>
      </nav>
      <section>
        <div className="about__image">
          <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" />
        </div>
        <div className="about__content">
          <h2 class="about__heading">About Us</h2>
          <span></span>
          <p>
            Our Project Student Management System (SMS) It is a group project
            collaborated by seven team members which aims to build a site for
            students.
            Collaborators:
            <br /> Divyanshi <br /> Karthik <br /> Lavesh <br /> Om <br />{" "}
            Saumya <br /> Sparsh <br /> Umm E
            <br />
          </p>
          <ul className="about__links">
            {/* <div className="about__vertical-line"></div> */}
            <li>
              <a href="/about/contact">Contact Us</a>
            </li>
            <br />
            <br />
            <li>Thank You</li>
          </ul>
          <ul className="about__icons">
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-github"></i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
