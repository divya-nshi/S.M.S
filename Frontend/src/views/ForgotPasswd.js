import React from "react";

import "../static/css/ForgotPasswd.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";

function ForgotPasswd() {
  return (
    <React.Fragment>
       <Navbar />
      <div className="d-flex justify-content-center align-items-center container">
        <div className="card py-5 px-3">
          <h5 className="m-0">Mobile phone verification</h5>
          <span className="mobile-text">
            Enter the code we just send on your mobile phone{" "}
            <b className="text-danger">+91 89*****403</b>
          </span>
          <div className="d-flex flex-row mt-5">
            <input type="text" className="form-control" autoFocus={true} />
            <input type="text" className="form-control" />
            <input type="text" className="form-control" />
            <input type="text" className="form-control" />
          </div>
          <div className="text-center mt-5">
            <span className="d-block mobile-text">Don't receive the code?</span>
            <span className="font-weight-bold text-danger cursor">Resend</span>
          </div>
          <a href="/log/login">
            <button className="otp">Confirm</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPasswd;
