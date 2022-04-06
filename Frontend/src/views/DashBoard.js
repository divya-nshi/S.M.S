import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/Dashboard.css";
import back_img from '../static/images/logout.png';
export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="Dashboard__main">
      <nav className="navbar_ navbar_-expand-lg navbar_-light">
      <a href="./log/login" className="logout">
        <img src={back_img} className="logout-img" alt="" />
          {/* <div className="logout-text">Logout</div> */}
        </a>
        <div className="dashboard">Dashboard -</div>
        <div className="dashboard__bg"></div>
       
      </nav>
      {/* <div className="dashboard__cards">
        <div
          className="Todo"
          onClick={() => {
            navigate("/utils/todo");
          }}
        >
          To-Do List :<div className="Todo1"></div>
        </div>

        <div
          className="Reminders"
          onClick={() => {
            navigate("/utils/reminder");
          }}
        >
          Reminders :<div className="Reminders1"></div>
        </div>
        <div
          className="Fun"
          onClick={() => {
            navigate("/utils/fun");
          }}
        >
          Fun-Zone :<div className="Fun1"></div>
        </div>

        <div
          className="resources"
          onClick={() => {
            navigate("/utils/resource");
          }}
        >
          E-Resources :<div className="resources1"></div>
        </div>
      </div> */}
      <div className="dashboard__cards">
        <div
          className="con"
          id="ds__Todo"
          onClick={() => {
            navigate("/dashboard/todo");
          }}
        >
          <div className="zayn_2 shadow">
            <span className="ds__cover">White cover</span>
            <h4>Todo</h4>
          </div>
        </div>
        <div
          className="con"
          id="ds__FunZone"
          onClick={() => {
            navigate("/dashboard/fun");
          }}
        >
          <div className="zayn_2 shadow">
            <span className="ds__cover">White cover</span>
            <h4>Fun</h4>
          </div>
        </div>
        <div
          className="con"
          id="ds__Gallery"
          onClick={() => {
            navigate("/dashboard/gallery");
          }}
        >
          <div className="zayn_2 shadow">
            <span className="ds__cover">White cover</span>
            <h4>Gallery</h4>
          </div>
        </div>
        <div
          className="con"
          id="ds__Resources"
          onClick={() => {
            navigate("/dashboard/resource");
          }}
        >
          <div className="zayn_2 shadow">
            <span className="ds__cover">White cover</span>
            <h4>Resources</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
