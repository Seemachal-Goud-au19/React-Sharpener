import React from 'react'
import './ExpenseItems.css'

const ExpenseItems = ({expense}) => {
    const formattedDate = expense.date.toLocaleDateString();

    return (
        <div className='expense-item'>
            <div>{formattedDate}</div>
            <div>{expense.location}</div>
            <div className='expense-item_description'>
                <h2>{expense.title}</h2>
                <div className='expense-item_price'>{expense.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;
