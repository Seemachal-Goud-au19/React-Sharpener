import React from 'react'

 const ExpenseDate = ({ date }) => {
    const dateValue = new Date(date);
    const year = dateValue.getFullYear();
    const month = dateValue.toLocaleString('default', { month: 'long' }); 
    const day = dateValue.getDate();
    // const month = date.toLocaleDateString('en-US', { month: 'long' });
    // const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    // const year = date.getFullYear();
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}


export default ExpenseDate;