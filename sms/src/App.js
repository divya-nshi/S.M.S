import Footer from "./utils/Footer";
import Header from "./utils/Header";
import Navbar from "./utils/NavBar";

import "./static/css/App.css";

import { useState, useEffect } from "react";
import { Route, Routes, useHistory } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import ErrorNotFound from "./views/ErrorNotFound";

function App() {
  const [Error404, setError404] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {!Error404 && <div className="backgroundImage"> </div>}
      <Header />
      <Routes>
        <Route exact path="/" >
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route
            path="*"
            element={<ErrorNotFound setError404={setError404} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
