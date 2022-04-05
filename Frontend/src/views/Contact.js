import React from "react";
import "../static/css/Contact.css";

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
          <img src="logout.png" className="contact__logout-img"></img>
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
              <div className="contact__icons">
                <a href="#">
                  {" "}
                  <img
                    src="facebook-new.png"
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="icons8-instagram-30.png"
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="icons8-github-30.png"
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>
            </div>
            <div className="contact__credits">Connect With Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};
