import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
    </div>
  );
};

export default Expenses;