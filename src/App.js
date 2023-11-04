import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";

const expensesList = [
  { id: 1, title: 'Car Insurance', amount: 2345, date: new Date(20203, 10, 29), location: 'Surat' },
  { id: 2, title: 'Health Insurance', amount: 2500, date: new Date(20203, 10, 29), location: 'Pune' },
  { id: 3, title: 'Party', amount: 2400, date: new Date(20203, 10, 29), location: 'Ahmedabad' }
]

function App() {
  const [expenses, setExpenses] = useState([...expensesList]);


  const handleDeleteExpenseItems = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id))
  }
  return (
    <>
      {expenses.map((expense) => <ExpenseItems expense={expense} handleDeleteExpenseItems={handleDeleteExpenseItems} />)

      }
    </>
  )
};

export default App;