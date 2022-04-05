import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../static/css/SignUp.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";
import Footer from "../utils/Footer";

function SignUp() {
  let rerender;
  const nameR = useRef(null);
  const emailR = useRef(null);
  const passwdR = useRef(null);
  const cpasswdR = useRef(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    console.log(user);
    if (
      user.name &&
      user.email &&
      user.password &&
      user.password === user.reEnterPassword
    ) {
      axios.post("http://localhost:5000/register", user).then((res) => {
        alert(res.data.message);
      });
      console.log(user);
      nameR.current.value = "";
      emailR.current.value = "";
      passwdR.current.value = "";
      cpasswdR.current.value = "";
    } else {
      alert("invlid input");
      passwdR.current.value = "";
      cpasswdR.current.value = "";
    }
  };

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
                onChange={handleChange}
                placeholder="Username"
                required=""
                ref={nameR}
                id="username"
                name="name"
              />
            </div>
            <div>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Email"
                ref={emailR}
                id="email"
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={handleChange}
                placeholder="Password"
                required=""
                ref={passwdR}
                id="password"
                name="password"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={handleChange}
                placeholder="Repeat Password"
                required=""
                ref={cpasswdR}
                id="cpassword"
                name="reEnterPassword"
              />
            </div>
            <a href="#" style={{ marginTop: "6px" }}>
              <input type="button" value="Sign Up" onClick={register} />
            </a>
            <div>
              <input type="checkbox" name="Remember_me" />
              <span className="checkbox">Remember Me</span>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SignUp;
