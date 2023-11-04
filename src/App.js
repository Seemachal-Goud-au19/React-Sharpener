
import { useState } from "react";
import ExpenseItems from "./routes/ExpenseItems.js/ExpenseItems";
import ExpenseForm from "./routes/ExpenseForm/ExpenseForm";

const App=() =>{
  const [expenseList, setExpenseList] = useState([])
  return (
    <>
     <ExpenseItems expenseList={expenseList} setExpenseList={setExpenseList}/>
     <ExpenseForm setExpenseList={setExpenseList}/>
  </>
  )
};

export default App;