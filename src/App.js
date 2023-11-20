
import { useState } from "react";
import ExpenseItems from "./routes/ExpenseItems.js/ExpenseItems";
import ExpenseForm from "./routes/ExpenseForm/ExpenseForm";
import'./App.css'

const initialExpenseList = [{ id: 'sa', title: 'Car Insurance', amount: 1023, date: '2023-10-17'}, { id: 'ls', title: 'Bike Insurance', amount: 123,  date: '2022-9-15'}]

const App = () => {
  const [expenseList, setExpenseList] = useState([...initialExpenseList])
  const [openExpense, setOpenExpense] =  useState(false)

  const handleForm = ()=>{
    setOpenExpense(true)
  }
  return (
    <>
      <ExpenseItems expenseList={expenseList} setExpenseList={setExpenseList} />
     {openExpense && <ExpenseForm setExpenseList={setExpenseList} setOpenExpense={setOpenExpense}/> }
     {!openExpense && <button className="add-new-expense"  onClick={handleForm}>Add New Expense</button> }
    </>
  )
};

export default App;