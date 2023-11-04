import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

const ExpenseItems = ({ expense, handleDeleteExpenseItems }) => {

    return (
        <div className='expense-item'>
            <ExpenseDate date={expense.date} />
            <div>{expense.location}</div>
            <div className='expense-item_description'>
                <h2>{expense.title}</h2>
                <div className='expense-item_price'>{expense.amount}</div>
            </div>
            <div onClick={() => handleDeleteExpenseItems(expense.id)} style={{ cursor: 'pointer'}}>Delete</div>
        </div>
    )
}

export default ExpenseItems;
