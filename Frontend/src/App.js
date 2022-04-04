import "./static/css/App.css";

import { useState, useEffect } from "react";

import MainRoute from "./Routes/Main";

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
      {!Error404 && <div className="backgroundImage"> </div>}
      <MainRoute setError404={setError404} error={Error404} setMainUser={setMainUser} />
    </div>
  );
}

export default App;
