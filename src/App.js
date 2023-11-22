
import { useState } from "react";
import ExpenseItems from "./routes/ExpenseItems.js/ExpenseItems";
import ExpenseForm from "./routes/ExpenseForm/ExpenseForm";
import ChartBar from "./components/Charts/ChartBar";
import ExpenseChart from "./routes/ExpenseChart/ExpenseChart";
import'./App.css'

const initialExpenseList = [{ id: 'sa', title: 'Car Insurance', amount: 1023, date: '2023-10-17'}, { id: 'ls', title: 'Bike Insurance', amount: 123,  date: '2021-9-15'}, { id: 'ld', title: 'Home Loan', amount: 345,  date: '2021-4-25'}]

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
  <ChartBar data={[23,78,45]}/>
  <ExpenseChart expenseList={expenseList}/>
    </>
  )
};

export default App;