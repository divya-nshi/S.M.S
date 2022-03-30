import React from "react";
import "../static/css/Contact.css";
import logout_img from '../static/images/logout.png';
import face_img from '../static/images/face-book.png';
import insta_img from '../static/images/instagram.png';
import git_img from '../static/images/github.png';

export const Contact = () => {
    const [name, setName] = React.useState("Prashant Sir");
  const handleName = (e) => {
      e.preventDefault();
      setName(e.target.value);
  };

  return (
    <div className="contact__main">
      <nav className="contact__navbar contact__navbar-expand-lg contact__navbar-light">
        <div className="contact__contact-us">Contact Us -</div>
        <a href="#" className="contact__logout">
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
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                  <div className="contact__app-form-group">
                    <input
                      className="contact__app-form-control"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className="contact__app-form-group">
                    <input
                      className="contact__app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="contact__app-form-group contact__message">
                    <input
                      className="contact__app-form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="contact__app-form-group buttons">
                    <button className="contact__app-form-button-cancel">
                      CANCEL
                    </button>
                    <button className="contact__app-form-button-send">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="contact__credits">Connect With Us</div>
            <div className="contact__icons">
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
  );
};
