import "./static/css/App.css";
import Navbar from "./utils/NavBar";
import { useState, useEffect } from "react";


import MainRoute from "./Routes/Main";
import Footer from "./utils/Footer";

function App() {
  const [mainUser, setMainUser] = useState({
    email: "",
    name: "",
    password: ""
  });
  const [Error404, setError404] = useState(false);

  useEffect( () => {
    console.log(mainUser);
  }, [mainUser]);

  return (
    <div className="App">
      <Navbar />
      {!Error404 && <div className="backgroundImage"> </div>}
      <MainRoute setError404={setError404} error={Error404} setMainUser={setMainUser} />
      <Footer />
    </div>
  );
}

export default App;
