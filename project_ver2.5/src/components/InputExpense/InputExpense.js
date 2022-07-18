import React, { useState } from "react";
import "./inputexpense.css";
import ExpenseForm from "./ExpenseForm";

const InputExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveedForm = (saved) => {
    const expenseData = {
      ...saved,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  let editing;
  if (!isEditing) {
    editing = <button onClick={startEditing}>폼 입력창 열기</button>;
  } else {
    editing = <ExpenseForm onSavedForm={saveedForm} onCancel={stopEditing}></ExpenseForm>;
  }

  return (
    <section>
      <h5>단톡에 모임 통계</h5>
      <h2>AssholeTalk Meeting statistics</h2>

      <div className="new-expense">
        {editing}
        {/* <ExpenseForm onSavedForm={saveedForm}></ExpenseForm> */}
      </div>
    </section>
  );
};

export default InputExpense;
