import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  );
  if (props.filterYear.length > 0) {
    expensesContent = props.filterYear.map((curr) => {
      return <ExpenseItem item={curr} key={curr.id}></ExpenseItem>;
    });
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;
