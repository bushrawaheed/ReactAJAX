import React from "react";
import axios from "axios";

export default function Weather(props) {
  return (
    <h1>
      The temperature in {props.city} is {props.temperature}°C
    </h1>
  );
}
