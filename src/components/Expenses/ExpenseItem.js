import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({ expense, handleDeleteExpenseItems }) => {
    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount);
    const handleChangeTitle = () => {
        setTitle('Update')
        
    }

    const handleChangeAmount =()=>{
        setAmount(100+'$')
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={expense.date} />
            <div>{expense.location}</div>
            <div className='expense-item_description'>
                <h2>{title}</h2>
                <div className='expense-item_price'>{amount}</div>
            </div>
            <div onClick={handleChangeAmount} style={{ cursor: 'pointer' }}>Change Amount</div>
            <div onClick={handleChangeTitle} style={{ cursor: 'pointer' }}>Change title</div>
            <div onClick={() => handleDeleteExpenseItems(expense.id)} style={{ cursor: 'pointer' }}>Delete</div>
        </div>
    )
}

export default ExpenseItem;
