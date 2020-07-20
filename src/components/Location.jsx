import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "../data/config.json";

const configAPI = "http://localhost:5000/config"

function Location() {
  /* const [locations, setLocations] = useState([]);
  console.log("in Locations");
  useEffect(() => {
    axios.get(configAPI).then((response) => {
      console.log(response)
    })
  }) */
  /*   const fetchLocations = async () => {
      const response = await fetch('http://localhost:5000/config');
      const responseData = await response.json();
      setLocations(responseData.location);
      console.log(responseData)
    };
    fetchLocations();
    // console.log(locations);
  
  }, []); */

  return <h1 className="location">{Data.location}</h1>;
}

export default Location;
