import React from "react";
import RenderIcon from "./RenderIcon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];
    return days[day];
  }
  console.log(props);
  return (
    <div>
      <div>{day()}</div>
      <div>
        <RenderIcon Code={props.data.weather[0].icon} size={36} />
      </div>
      <div>
        <span className="maxTemp">19°</span>
        <span className="minTemp">10°</span>
      </div>
    </div>
  );
}
