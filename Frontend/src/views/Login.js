import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import "../static/css/Login.css";
import "../static/css/NavBar.css";
import Footer from "../utils/Footer";
import Navbar from "../utils/NavBar";

function Login({ setMainUser }) {
  const navigate = useNavigate();

  const emailR = useRef(null);
  const passwdR = useRef(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [responce, setResponce] = useState({
    message: "",
    user: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(responce);
    if (responce.user) {
      setMainUser(responce.user);
      sessionStorage.setItem("isLogged", true);
      navigate("/dashboard");
    }
  }, [responce]);

  const login = (e) => {
    e.preventDefault();
    setUser(() => ({
      email: emailR.current.value,
      password: passwdR.current.value,
    }));
    axios
      .post("http://localhost:5000/login", {
        email: emailR.current.value,
        password: passwdR.current.value,
      })
      .then((res) => {
        setResponce(() => res.data);
        alert(res.data.message);
      });
    emailR.current.value = "";
    passwdR.current.value = "";
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <section id="content">
          <form action="">
            <h1>Login Form</h1>
            <div>
              <input
                type="text"
                placeholder="email"
                required=""
                id="email"
                ref={emailR}
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required=""
                ref={passwdR}
                id="password"
                name="password"
              />
            </div>
            <div>
              <a href="/log/forgotPasswd" style={{ fontSize: "large" }}>
                Forgot password?
              </a>
              <a href="/log/signup" style={{ fontSize: "large" }}>
                Signup here
              </a>
              <a href="#" style={{ marginTtop: "6px" }}>
                <input type="button" value="Log in" onClick={login} />
              </a>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
