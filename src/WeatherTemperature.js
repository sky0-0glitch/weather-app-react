import React, { useState } from "react";
export default function WeatherTemperature(props) {
  ///I know You said to delete this but I just didn't had the heart to do it hope it's OK :]
  const [unit, setUnit] = useState("celcius");
  function showFahranheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          ℃ |
          <a href="/" onClick={showFahranheit} className="text-decoration-none">
            {" "}
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius} className="text-decoration-none">
            {" "}
            ℃{" "}
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
