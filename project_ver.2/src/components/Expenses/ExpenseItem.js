import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__amount">{props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
