import React from "react";
import Chart from "../Chart/Chart";
function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },

    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },

    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },

    //accept a the filtered year of a year.
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    //starting as 0 jan is 0 ===> and dec is 11
    //note += is necessary as it has to add mulitple items in the same month
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoint={chartDataPoints}></Chart>;
}

export default ExpensesChart;
