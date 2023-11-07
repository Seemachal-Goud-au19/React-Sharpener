import React,{useState} from 'react';
import './Filter.css';

const Filter = ({ setExpenseList, expenseList }) => {
  
  const handleSelect = (e) => {
    const year = e.target.value;
    const filteredExpenses = expenseList.filter((expense) => {
      const expenseYear = new Date(expense.date).getFullYear();
      return expenseYear === parseInt(year);
    });

    setExpenseList(filteredExpenses);
  };

  return (
    <div className="filter-container">
      <label>Filter By Year:</label>
      <select className="year-select" onChange={handleSelect}>
        <option value={'2022'}>2022</option>
        <option value={'2021'}>2021</option>
        <option value={'2023'}>2023</option>
      </select>
    </div>
  );
};

export default Filter;
