import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatedDate from "./formatedDate";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
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
  if (weather.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <input
              type="search"
              placeholder="Enter a city.."
              className="col-9"
              autoFocus
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
        <h1> {weather.city} </h1>
        <ul>
          <li>
            {" "}
            <FormatedDate date={weather.date} />{" "}
          </li>
          <li className="text-capitalize"> {weather.description} </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 ">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className=""
            />
            <span className="temp">
              <span className="temperature">
                {" "}
                {Math.round(weather.temperature)}{" "}
              </span>{" "}
              <span className="unit">℃</span>
            </span>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipition: 15%</li>
              <li>humidity: {weather.humidity} </li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=5354b60afda2b7800186c06153932396&units=metric`;
    axios.get(url).then(handleResponse);
    return <h1>loading....</h1>;
  }
}
