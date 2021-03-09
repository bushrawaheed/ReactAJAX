import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React AJAX</h1>

      <h3>Challenge 1</h3>
      <p>Import axios</p>

      <h3>Challenge 2</h3>
      <p>
        Create a new component called Weather with a city property which returns
        an h1 with the sentence "The temperature in city is something°C".
        Include it here
      </p>
      <Weather city="Berlin" temperature="19" />

      <h3>Challenge 3</h3>
      <p>Use the OpenWeather API to get the city temperature in Celsius</p>
      <Weather city="London" temperature="19" />
      <Weather city="Karachi" temperature="19" />
      <Weather city="Bali" temperature="19" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
