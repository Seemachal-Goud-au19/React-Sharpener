
import { useState } from "react";
import ExpenseItems from "./routes/ExpenseItems.js/ExpenseItems";
import ExpenseForm from "./routes/ExpenseForm/ExpenseForm";

const initialExpenseList = [{ id: 'sa', title: 'Car Insurance', amount: 1023, date: '2023-10-17'}, { id: 'ls', title: 'Bike Insurance', amount: 123,  date: '2022-9-15'}]

const App = () => {
  const [expenseList, setExpenseList] = useState([...initialExpenseList])
  return (
    <>
      <ExpenseItems expenseList={expenseList} setExpenseList={setExpenseList} />
      <ExpenseForm setExpenseList={setExpenseList} />
    </>
  )
};

export default App;