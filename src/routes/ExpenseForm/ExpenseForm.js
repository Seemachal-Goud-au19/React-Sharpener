import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = ({ setExpenseList, setOpenExpense }) => {

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
        
    })


    const handleInputChange = (type, value) => {
        console.log('type', type, 'value', value)

        setFormData((prevData) => ({
            ...prevData,
            [type]: value,
            
        }
        )
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
    setExpenseList((prevData) => {
            const expenseData = [...prevData, { ...formData, id: Date.now().toString(36) }]
            return expenseData;
        })
        setFormData({
            title: '',
            amount: '',
            date: '',
        })

        setOpenExpense(false)

    }
    return (
        <div className='expense-form'>
            <h5>ExpenseForm</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={formData.title} onChange={(e) => { handleInputChange('title', e.target.value) }} />
                </div>

                <div>
                    <label>Amount</label>
                    <input type='text' value={formData.amount} onChange={(e) => { handleInputChange('amount', e.target.value) }} />
                </div>

                <div>
                    <label>Date</label>
                    <input type='date' value={formData.date} onChange={(e) => { handleInputChange('date', e.target.value) }} />
                </div>
                <button onClick={()=>setOpenExpense(false)}>Cancel</button>
                <button type='submit'> Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;