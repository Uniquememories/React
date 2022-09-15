import React, { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// function Expenses(props) {  //pass props in Expenses and use props.expenses to access the expenses from app.js file
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');   //to update the state => useState is set default year to 2022

  const filterChangeHandler = selectedYear => {
    // console.log('Expenses.js');
    // console.log(selectedYear); 
    setFilteredYear(selectedYear);  //set the filterd year to the selected year
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; 
  });   //use props.items to access the expense items and with filter return true or false => check if the expense date year matches the filteredYear with getFullYear (toString converts to a string)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* filteredExpenses is passed in through the items property */}
      </Card>
    </div>
  );
}

export default Expenses; 