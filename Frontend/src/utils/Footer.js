import React from "react";

import "../static/css/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        {/* <div id="Footer__button"></div> */}
        <Ft__Penguine />
        <div id="Footer__container">
          <div id="Footer__cont">
            <div className="footer_center">
              <h3 className="Footer_text">
                SMS <br />A initiative by <>Team **********</>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Ft__Penguine = () => {
  return (
    <div className="ft__penguin">
      <div className="ft__hat" id="hat">
        <div className="ft__hat-bottom"></div>
        <div className="ft__hat-middle"></div>
        <div className="ft__hat-point"></div>
        <div className="ft__hat-ball"></div>
      </div>
      <div className="ft__hair"></div>
      <div className="ft__head"></div>
      <div className="ft__body">
        <div className="ft__body-main"></div>
        <div className="ft__body-white">
          <div className="ft__body-circle">
            <div className="ft__eyes"></div>
            <div className="ft__body-rectangle"></div>
          </div>
          <div
            className="ft__body-circle"
            style={{transform: "translateX(60px) translatey(-75px)"}}
          >
            <div className="ft__eyes"></div>
            <div className="ft__body-rectangle"></div>
          </div>
          <div className="ft__beak">
            <div className="ft__beak-top"></div>
          </div>
        </div>
        <div className="ft__bottom"></div>
      </div>
      <div className="ft__arm" id="left-arm"></div>
      <div className="ft__arm" id="right-arm"></div>
      <div className="ft__foot" id="left-foot"></div>
      <div className="ft__foot" id="right-foot"></div>
      <div className="ft__laptop">
        <div className="ft__logo"></div>
      </div>
      <div className="ft__shadow"></div>
    </div>
  );
};

export default Footer;
