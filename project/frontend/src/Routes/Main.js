import React, { useState, useEffect } from "react";
import { Route, Routes, useHistory } from "react-router-dom";

import Dashboard from "../views/DashBoard";
import ErrorNotFound from "../views/ErrorNotFound";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import ForgotPasswd from "../views/ForgotPasswd";
import About from "../views/About";

export default function MainRoute({ setError404, Error404 }) {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/">
          <Route
            path="*"
            element={<ErrorNotFound setError404={setError404} />}
          />
          <Route exact path="log/">
            <Route exact path="login/" element={<Login />} />
            <Route exact path="forgotpasswd" element={<ForgotPasswd />} />
            <Route exact path="signup" element={<SignUp />} />
            <Route
              path="*"
              element={<ErrorNotFound setError404={setError404} />}
            />
          </Route>
          <Route exact path="dashboard/">
            <Route exact path="/dashboard/" element={<Dashboard />} />
            <Route
              path="*"
              element={<ErrorNotFound setError404={setError404} />}
            />
          </Route>
          <Route exact path="/about/" element={<About />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
