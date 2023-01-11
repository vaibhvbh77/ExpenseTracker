import React from "react";
import "./ExpenseDate.css";
function ExpenseItemDate(props) {
  return (
    <div className="expense-date">
      {console.log("rerun")}

      <div className="expense-date__month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default ExpenseItemDate;
