import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import Slogan from "./components/Slogan";
import ClockTime from "./components/Time";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <AppName></AppName>
      <Slogan />
      <ClockTime />
    </center>
  );
}

export default App;
