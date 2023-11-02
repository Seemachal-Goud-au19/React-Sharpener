import React from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 2345, date: new Date(20203, 10, 29), location: 'Surat' },
    { title: 'Health Insurance', amount: 2500, date: new Date(20203, 10, 29), location: 'Pune' },
    { title: 'Party', amount: 2400, date: new Date(20203, 10, 29), location: 'Ahmedabad' }
  ]
  return (
    <>
   { expenses.map((expense)=> <ExpenseItems expense={expense} />)
     
   }
    </>
  )
};

export default App;