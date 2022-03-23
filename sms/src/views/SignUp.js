import React from "react";

import "../static/css/SignUp.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";

function SignUp() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <section id="content">
          <form action="">
            <h1>Signup Form</h1>
            <div>
              <input
                type="text"
                placeholder="Username"
                required=""
                id="username"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required=""
                id="password"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Repeat Password"
                required=""
                id="cpassword"
              />
            </div>
            <a href="#" style={{ marginTop: "6px" }}>
              <input type="button" value="Sign Up" />
            </a>
            <div>
              <input type="checkbox" name="Remember_me" />
              <span className="checkbox">Remember Me</span>
            </div>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
