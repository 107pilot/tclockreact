import React from "react";
import "./styles.css";
import Location from "./components/Location";
import Tides from "./components/Tides";
import Clock from "./components/Clock";
import Status from "./components/Status";

function App() {
  return (
    <div class="App">
      <Location />
      <Clock />
      <Tides />
      <Status />
    </div>
  );
}

export default App;
