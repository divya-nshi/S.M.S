import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../utils/NavBar";
import "../static/css/Homepage.css";

import todoimg from "./todo.png";
import resimg from "./res.jpg";
import galimg from "./gal.png";

function Homepage() {
  return (
    <React.Fragment>
    <Navbar />
<div class="middle">
   <div><img src={todoimg} width="200" height="200"/><br/><h2>To-do List</h2></div>
   <div><img src={resimg} width="200" height="200"/><h2>E-Resources</h2></div>
   <div><img src={galimg} width="200" height="200"/><h2>Gallery</h2></div>

    </div>
    </React.Fragment>
  );
}

export default Homepage;
