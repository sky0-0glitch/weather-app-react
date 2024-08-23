import React from "react";
import "./Weather.css";
export default function weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <input type="search" placeholder="Enter a city.." className="col-9" />
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 12:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipition: 15%</li>
            <li>humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
