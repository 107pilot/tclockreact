import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "../data/config";

function Tides() {
  const [posts, setPosts] = useState({ predictions: [] });
  useEffect(() => {
    axios
      .get("https://tidesandcurrents.noaa.gov/api/datagetter", {
        params: {
          begin_date: new Date().toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
          }),
          range: "24",
          station: Data.stationID,
          product: "predictions",
          datum: "mllw",
          interval: "hilo",
          units: "english",
          time_zone: "lst_ldt",
          format: "json"
        }
      })
      .then(res => {
        setPosts(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.predictions.map((item, index) => (
        <ul key={index}>
          {item.t} {item.v} {item.type}{" "}
          {item.type === "H" ? (
            <img className="tide" src="./images/HTide.png" alt="High Tide" />
          ) : (
            <img className="tide" src="./images/LTide.png" alt="Low Tide" />
          )}
        </ul>
      ))}
    </div>
  );
}
export default Tides;
