import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3fdc8cfbf2d6fa0116c9ae92d3df4f79&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
