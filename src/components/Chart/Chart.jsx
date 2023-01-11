import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

// assume receving a data point its and array of objects which has a value,label field.
function Chart(props) {
  //we need to find the max value for the year from the given months so for that we need the value array as we are only interested inside the value of the max not the

  const dataPointValue = props.dataPoint.map((dataPoint) => {
    return dataPoint.value;
  });
  //we can use spread operator for the max math function to find the max value
  const maxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
