import React from 'react'
import "./expenselist.css";
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

  if(props.item.length === 0) {
    return (
      <h2 className='expenses-list__fallback'>항목을 찾을 수 없습니다</h2>
    )
  }

  return (
    <ul className='expenses-list'>
      {props.item.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
    ))}
    </ul>
  )
}

export default ExpenseList