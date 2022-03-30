import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
