import React from 'react'
import ChartBar from '../../components/Charts/ChartBar'
import './expenseChart.css'

const MonthData = [{ month: 'January', value: 0 }, { month: 'February', value: 0 }, { month: 'March', value: 0 }, { month: 'April', value: 0 }, { month: 'May', value: 0 }, { month: 'June', value: 0 }, { month: 'July', value: 0 }, { month: 'August', value: 0 }, { month: 'September', value: 0 }, { month: 'October', value: 0 }, { month: 'November', value: 0 }, { month: 'jan', value: 0 }]

const ExpenseChart = ({ expenseList }) => {

  for (let expense of expenseList) {
    console.log("expense", expense)
    const expenseMonth = new Date(expense.date).getMonth()
    MonthData[expenseMonth].value += expense.amount
  }
  // console.log("MonthDta",MonthData)
  return (
    <div className='expense-chart'>
      <ChartBar data={MonthData} />
    </div>
  )
}


export default ExpenseChart;