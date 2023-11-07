import React, { useState } from 'react'
import ExpenseItem from '../../components/Expenses/ExpenseItem';
import Filter from './component/Filter';

const ExpenseItems = ({ expenseList, setExpenseList }) => {

  
  const handleDeleteExpenseItems = (id) => {
    setExpenseList(expenseList.filter((item) => item.id !== id))
  }
  return (
    <>
    <Filter expenseList={expenseList} setExpenseList={setExpenseList}/>
      {expenseList.map((expense) => <ExpenseItem key={expense.id} expense={expense}
        handleDeleteExpenseItems={handleDeleteExpenseItems} />)

      }
    </>
  )
}


export default ExpenseItems;