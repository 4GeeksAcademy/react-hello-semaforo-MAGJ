import React, { useState } from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {
  const [color, setColor] = useState(null); 

  return (
    <div className="traffic-container">
      <div className="traffic-box">
        <div
          className={`light red ${color === "red" ? "active" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "active" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "active" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
