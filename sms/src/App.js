import Footer from "./utils/Footer";
import Header from "./utils/Header";
import Navbar from "./utils/NavBar";

import "./static/css/App.css";

import { useState, useEffect } from "react";
import { Route, Router, Routes, useHistory } from "react-router-dom";

import MainRoute from "./Routes/Main";

function App() {
  const [Error404, setError404] = useState(false);

  return (
    <div className="App">
      {!Error404 && <div className="backgroundImage"> </div>}
      <MainRoute setError404={setError404} error={Error404} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
