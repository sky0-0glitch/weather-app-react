import React from "react";
import "./Weather.css";
import FormatedDate from "./formatedDate";
import RenderIcon from "./RenderIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="weather">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <RenderIcon Code={props.data.icon} />

          <span className="temp">
            <WeatherTemperature celcius={props.data.temperature} />
          </span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipition: 15%</li>
            <li>humidity: {props.data.humidity} </li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
