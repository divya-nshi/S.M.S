import React from "react";
import axios from "axios";

import "../static/css/Contact.css";

import logout_img from "../static/images/logout.png";
import face_img from "../static/images/face-book.png";
import insta_img from "../static/images/instagram.png";
import git_img from "../static/images/github.png";

export const Contact = () => {
  const IntialState = {
    name: "",
    email: "",
    phno: "",
    message: "",
  };
  const [contactMssg, setContactMssg] = React.useState(IntialState);
  const handleChange = (e) => {
    setContactMssg({
      ...contactMssg,
      [e.target.name]: [e.target.value],
    });
  };

  const submitHandler = (e) => {
    let flag = true;
    if (contactMssg.name.length == 0) {
      flag = false;
    }
    if (contactMssg.message.length == 0) {
      flag = false;
    }

    if (flag) {
      axios.post("http://localhost:5000/contactUs", contactMssg).then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className="contact__main">
      <nav className="contact__navbar contact__navbar-expand-lg contact__navbar-light">
        <div className="contact__contact-us">Contact Us -</div>
        <a href="/" className="contact__logout">
          <img src={logout_img} className="contact__logout-img"></img>
          <div className="contact__logout contact__text">Back</div>
        </a>
      </nav>
      <div className="contact__background">
        <div className="contact__container">
          <div className="contact__screen">
            <div className="contact__screen-header">
              <div className="contact__screen-header-left">
                <div className="contact__screen-header-button contact__close"></div>
                <div className="contact__screen-header-button contact__maximize"></div>
                <div className="contact__screen-header-button contact__minimize"></div>
              </div>
              <div className="contact__screen-header-right">
                <div className="contact__screen-header-ellipsis"></div>
                <div className="contact__screen-header-ellipsis"></div>
                <div className="contact__screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="contact__screen-body">
              <div className="contact__screen-body-item contact__left">
                <div className="contact__app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="contact__app-contact">
                  CONTACT INFO : 9532963374
                </div>
              </div>
              <div className="contact__screen-body-item">
                <div className="contact__app-form">
                  <div className="contact__app-form-group">
                    <input
                      className="contact__app-form-control"
                      placeholder="NAME"
                      value={contactMssg.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                  <div className="contact__app-form-group">
                    <input
                      className="contact__app-form-control"
                      placeholder="EMAIL"
                      name="email"
                      value={contactMssg.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__app-form-group">
                    <input
                      className="contact__app-form-control"
                      placeholder="CONTACT NO"
                      name="phno"
                      value={contactMssg.phno}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__app-form-group contact__message">
                    <input
                      className="contact__app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      value={contactMssg.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__app-form-group buttons">
                    <button
                      className="contact__app-form-button-cancel"
                      onClick={() => {
                        setContactMssg(IntialState);
                      }}
                    >
                      CANCEL
                    </button>
                    <button
                      className="contact__app-form-button-send"
                      onClick={submitHandler}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__credits">Connect With Us</div>
            <div className="contact__icons">
              <div className="contact__icon_bar">
                <a href="#">
                  {" "}
                  <img
                    src={face_img}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={insta_img}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={git_img}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
