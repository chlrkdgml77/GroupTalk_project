import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFliter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpenseChart expenses={filterExpenses}></ExpenseChart>
        <ExpenseList item={filterExpenses}></ExpenseList>
      </div>
    </div>
  );
};

export default Expenses;
