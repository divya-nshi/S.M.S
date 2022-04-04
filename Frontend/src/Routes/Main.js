import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../views/DashBoard";
import ErrorNotFound from "../views/ErrorNotFound";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import ForgotPasswd from "../views/ForgotPasswd";
import About from "../views/About";
import { Contact } from "../views/Contact";
import Todo from "../views/dashboard/Todo";
import Resource from "../views/dashboard/Resource";
import Fun from "../views/dashboard/Fun";
import Reminder from "../views/dashboard/Reminder";

export default function MainRoute({ setError404, Error404, setMainUser }) {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/">
          <Route
            path="*"
            element={<ErrorNotFound setError404={setError404} />}
          />
          <Route exact path="log/">
            <Route
              exact
              path="login"
              element={<Login setMainUser={setMainUser} />}
            />
            <Route exact path="forgotpasswd" element={<ForgotPasswd />} />
            <Route exact path="signup" element={<SignUp />} />
            <Route
              path="*"
              element={<ErrorNotFound setError404={setError404} />}
            />
          </Route>
          <Route exact path="/">
            <Route exact path="dashboard" element={<Dashboard />}></Route>
            <Route
              path="*"
              element={<ErrorNotFound setError404={setError404} />}
            />
          </Route>
          <Route exact path="about/">
            <Route exact path="/about/" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route exact path="utils/">
          <Route exact path="todo" element={<Todo />} />
          <Route exact path="resource" element={<Resource />} />
          <Route exact path="reminder" element={<Reminder />} />
          <Route exact path="fun" element={<Fun />} />
          <Route
              path="*"
              element={<ErrorNotFound setError404={setError404} />}
            />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
