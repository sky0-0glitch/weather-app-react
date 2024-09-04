import React, { useState, useEffect, useLayoutEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function load() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e0a5a97de9a0b7a951e9d154a8f9bad8&units=metric`;
    axios.get(url).then(handleResponse);

    return null;
  }
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    {
      load();
    }
  }
}
