import React, { useState } from 'react'
import ExpenseItem from '../../components/Expenses/ExpenseItem';


const ExpenseItems = ({ expenseList, setExpenseList }) => {

  console.log('expenseList', expenseList)
  const handleDeleteExpenseItems = (id) => {
    setExpenseList(expenseList.filter((item) => item.id !== id))
  }
  return (
    <>
      {expenseList.map((expense) => <ExpenseItem key={expense.id} expense={expense}
        handleDeleteExpenseItems={handleDeleteExpenseItems} />)

      }
    </>
  )
}


export default ExpenseItems;