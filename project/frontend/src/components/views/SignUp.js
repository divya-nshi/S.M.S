import React from "react";

import { useState } from "react";
import { Route, Router, Routes, useHistory } from "react-router-dom";

import "../static/css/SignUp.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";
import Footer from "../utils/Footer";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/register', {
        method: "post",
        body: JSON.stringify({ name, email , password }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Now click on Login to enter website");
        setEmail("");
        setName("");
        setPassword("");
    }
}
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <section id="content">
          <form action="">
            <h1>Signup Form</h1>
            <div>
              <input type="text" placeholder="Username" required="" name = "name" id="username" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
              <input type="email" placeholder="Email" required="" name = "email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Password" required="" name = "password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            {/* <style = {{ marginTop: "6px" }}> */}
              <input type="button" value="Sign Up" onClick= {handleOnSubmit} href = "/log/login" />
            <div>
            </div>
            {/* <style = {{ marginTop: "6px" }}> */}
              <a href="/log/login">Login here</a>
            <div>
              <input type="checkbox" name="Remember_me" />
              <span className="checkbox">Remember Me</span>
            </div>
          </form>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default SignUp;
