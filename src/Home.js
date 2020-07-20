import React from "react";
import Location from "./components/Location";
import Tides from "./components/Tides";
import Clock from "./components/Clock";
import Status from "./components/Status";

function Home() {
  return (
    <div>
      <Location />
      <Clock />
      <Tides />
      <Status />
    </div>
  );
}

export default Home;
