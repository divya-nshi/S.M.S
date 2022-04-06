import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

import "../static/css/SignUp.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";
import Footer from "../utils/Footer";

function SignUp(props) {
  const navigate = useNavigate();
  const nameR = useRef(null);
  const emailR = useRef(null);
  const passwdR = useRef(null);
  const cpasswdR = useRef(null);

  const [Remember__me, setRemember__me] = useState("Remember me");

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
  
  const rememberMeHandler = (e) => {
    if(e.target.checked){
      console.log("rememberinggg");
      localStorage.setItem("isLogged", true);
      localStorage.setItem("mainUser", user.name);
      setRemember__me("Dont remember me");
      return;
    } else {
      setRemember__me("Remember me");
      localStorage.setItem("isLogged", false);
      localStorage.setItem("mainUser", null);
      return;
    }
  }

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
        if(res.status == 201){
          navigate("/dashboard");
          props.setMainUser(user.name);
          sessionStorage.setItem("isLogged", true);
          sessionStorage.setItem("mainUser", user.name);
        }
      }).catch(err => {
        console.log(err);
      });
      nameR.current.value = "";
      emailR.current.value = "";
      passwdR.current.value = "";
      cpasswdR.current.value = "";
    } else {
      alert("Invalid inputs");
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
              <input type="checkbox" name="Remember_me" id="Remember_me" style={{ visibility : "none", display: "none"}} onChange={rememberMeHandler}/>
              <label htmlFor="Remember_me">{Remember__me}</label>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SignUp;
