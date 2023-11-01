import React from 'react'
import './ExpenseItems.css'

const ExpenseItems = ({expense}) => {
    const month = expense.date.toLocaleDateString('en-US',{month:'long'});
    const day = expense.date.toLocaleDateString('en-US',{day:'2-digit'});
    const year = expense.date.getFullYear();

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div>{expense.location}</div>
            <div className='expense-item_description'>
                <h2>{expense.title}</h2>
                <div className='expense-item_price'>{expense.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;
