import React from "react";
import "./ChartBar.css";

//assume recieving a data point
function ChartBar(props) {
  let barFilledHeight = "0%";
  //only calculate in case if we have any max value or annnnyyyy value  otherwise none of the bar will be

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
