import React from "react";

import "../static/css/Dashboard.css";

export default function Dashboard() {
  return (
    <React.Fragment>
      <nav className="navbar_ navbar_-expand-lg navbar_-light">
        <div className="dashboard">Dashboard -</div>
      <div className="dashboard__bg"></div>
        <a href="login_page.html" className="logout">
          <img src="logout.png" className="logout-img" alt="" />
          <div className="logout-text">Logout</div>
        </a>
      </nav>
      <a href="" style={{ textDecoration: "none" }}>
        <div className="Todo">
          To-Do List :<div className="Todo1"></div>
        </div>
      </a>
      <a href="" style={{ textDecoration: "none" }}>
        <div className="Reminders">
          Reminders :<div className="Reminders1"></div>
        </div>
      </a>
      <a href="" style={{ textDecoration: "none" }}>
        <div className="Fun">
          Fun-Zone :<div className="Fun1"></div>
        </div>
      </a>
      <a href="" style={{ textDecoration: "none" }}>
        <div className="resources">
          E-Resources :<div className="resources1"></div>
        </div>
      </a>
    </React.Fragment>
  );
}
