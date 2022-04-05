import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="Dashboard__main">
      <nav className="navbar_ navbar_-expand-lg navbar_-light">
        <div className="dashboard">Dashboard -</div>
        <div className="dashboard__bg"></div>
        <a href="login_page.html" className="logout">
          <img src="logout.png" className="logout-img" alt="" />
          <div className="logout-text">Logout</div>
        </a>
      </nav>
      <div
        className="Todoo"
        onClick={() => {
          navigate("/dashboard/todo");
        }}
      >
        To-Do List :<div className="Todo1"></div>
      </div>

      <div
        className="Reminders"
        onClick={() => {
          navigate("/dashboard/reminder");
        }}
      >
        Reminders :<div className="Reminders1"></div>
      </div>
      <div
        className="Funny"
        onClick={() => {
          navigate("/dashboard/fun");
        }}
      >
        Fun-Zone :<div className="Fun1"></div>
      </div>

      <div
        className="resources"
        onClick={() => {
          navigate("/dashboard/resource");
        }}
      >
        E-Resources :<div className="resources1"></div>
      </div>
    </div>
  );
}

// import React from "react";

// import "../static/css/Dashboard.css";

// export default function Dashboard() {
//   return (
//     <div className="Dashboard__main">
//       <nav className="navbar_ navbar_-expand-lg navbar_-light">
//         <div className="dashboard">Dashboard -</div>
//         <div className="dashboard__bg"></div>
//         <a href="login_page.html" className="logout">
//           <img src="logout.png" className="logout-img" alt="" />
//           <div className="logout-text">Logout</div>
//         </a>
//       </nav>
//       <a href="" style={{ textDecoration: "none" }}>
//         <div className="Todo">
//           To-Do List :<div className="Todo1"></div>
//         </div>
//       </a>
//       <a href="" style={{ textDecoration: "none" }}>
//         <div className="Reminders">
//           Reminders :<div className="Reminders1"></div>
//         </div>
//       </a>
//       <a href="" style={{ textDecoration: "none" }}>
//         <div className="Fun">
//           Fun-Zone :<div className="Fun1"></div>
//         </div>
//       </a>
//       <a href="" style={{ textDecoration: "none" }}>
//         <div className="resources">
//           E-Resources :<div className="resources1"></div>
//         </div>
//       </a>
//     </div>
//   );
// }
