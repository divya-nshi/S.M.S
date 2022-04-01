import React from "react";
import '../static/css/Login.css';
import "../static/css/NavBar.css";
import Footer from "../utils/Footer";
import Navbar from "../utils/NavBar";

function Login() {
  return (
    <React.Fragment>
       <Navbar />
        <div className="container">
         <section id="content">
           <form action="">
             <h1>Login Form</h1>
             <div>
               <input type="text" placeholder="Username" required="" id="username" />
             </div>
             <div>
               <input type="password" placeholder="Password" required="" id="password" />
             </div>
             <div>
               <a href="/log/forgotPasswd" style={{fontSize:"large"}}>Forgot password?</a>
               <a href="/log/signup" style={{fontSize:"large"}}>Signup here</a>
               <a href="/dashboard" style={{marginTtop: "6px"}}><input type="button" value="Log in"/></a>
              </div>
           </form>
         </section>
       </div>
       <Footer/>
    </React.Fragment>
  );
}

export default Login;
