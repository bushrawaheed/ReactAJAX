import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=40c070457645a25e3aed4a4bf9319268
&units=metric`;
  axios.get(url).then(showTemperature);
  return (
    <h1>
      The temperature in {props.city} is {Math.round(temperature)}°C
    </h1>
  );
}
