import React from "react";
import RenderIcon from "./RenderIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3fdc8cfbf2d6fa0116c9ae92d3df4f79`;
  axios.get(url).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <div>
            <RenderIcon Code="01d" size={36} />
          </div>
          <div>
            <span className="maxTemp">19°</span>
            <span className="minTemp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
