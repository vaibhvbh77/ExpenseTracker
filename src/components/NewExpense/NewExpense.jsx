import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const AddNewExpense = (obj) => {
    const expense = { ...obj, id: Math.random().toString() };
    props.onAddExpense(expense);
  };
  const addHandler = () => {
    setShowForm((curr) => {
      return !curr;
    });
  };
  return (
    <div className="new-expense">
      {showForm === false && (
        <button onClick={addHandler}>Add and Expense</button>
      )}
      {showForm && (
        <ExpenseForm onSaveExpenseData={AddNewExpense} onCancel={addHandler} />
      )}
    </div>
  );
}

export default NewExpense;
