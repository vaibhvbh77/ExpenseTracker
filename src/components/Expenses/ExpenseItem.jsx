// import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.item.title);

  return (
    <li>
      <Card className="expense-item">
        <div>
          <div>
            <ExpenseItemDate date={props.item.date} />
          </div>
        </div>
        <div className="expense-item__description">
          <h2>{props.item.title}</h2>
          <div className="expense-item__price">${props.item.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
