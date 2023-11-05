import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({ expense, handleDeleteExpenseItems }) => {
    const [ enteredtitle, setEnteredtitle] = useState(expense.title);
    const [enteredAmount, setEnteredAmount] = useState(expense.amount);
    const [ enteredDate,  setEnteredDate] = useState(expense.date);

    const handleChangeTitle = () => {
        const newTitle = prompt('enter Title')
        setEnteredtitle(newTitle)
    }
    const handleChangeAmount = ()=>{
        const newAmount = prompt('enter Amount')
        setEnteredAmount(newAmount)
    }

    const handleChangeDate = ()=>{
        const newDate = prompt('enter date')
        setEnteredDate(newDate)
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={enteredDate} />
            <div>{expense.location}</div>
            <div className='expense-item_description'>
                <h2>{enteredtitle}</h2>
                <div className='expense-item_price'>{enteredAmount}</div>
            </div>
            <div onClick={handleChangeAmount} style={{ cursor: 'pointer' }}>Change Amount</div>
            <div onClick={handleChangeTitle} style={{ cursor: 'pointer' }}>Change Title</div>
            <div onClick={handleChangeDate} style={{ cursor: 'pointer' }}>Change Date</div>
            <div onClick={() => handleDeleteExpenseItems(expense.id)} style={{ cursor: 'pointer' }}>Delete</div>
        </div>
    )
}

export default ExpenseItem;
