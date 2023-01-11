import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterHandler = (date) => {
    setFilteredYear(date);
  };
  const filteredYearsToShow = props.expenses.filter((item) => {
    console.log(filteredYear + " ho");
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilter={filterHandler} />

      <ExpensesChart expenses={filteredYearsToShow}></ExpensesChart>
      <ExpensesList filterYear={filteredYearsToShow}> </ExpensesList>
    </Card>
  );
}

export default Expenses;
