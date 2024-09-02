import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function hundleSubmit(event) {
    event.preventDefault();
    search();
  }
  function hundleChange(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={hundleSubmit}>
          <div className="row">
            <input
              type="search"
              placeholder="Enter a city.."
              className="col-9"
              autoFocus
              onChange={hundleChange}
            />
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return <h1>loading....</h1>;
  }
}
