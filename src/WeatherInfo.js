import React from "react";
import FormatedDate from "./formatedDate";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          {" "}
          <FormatedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
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
              {Math.round(props.data.temperature)}{" "}
            </span>{" "}
            <span className="unit">℃</span>
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
