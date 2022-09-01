import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

// function Expenses(props) {  //pass props in Expenses and use props.expenses to access the expenses from app.js file
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');   //to update the state => useState is set default year to 2022

  const filterChangeHandler = selectedYear => {
    // console.log('Expenses.js');
    // console.log(selectedYear); 
    setFilteredYear(selectedYear);  //set the filterd year to the selected year
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* selected controls the defaulted filtered year */}
        <ExpenseItem 
          title={props.items[0].title} 
          amount={props.items[0].amount} 
          date={props.items[0].date}
        />
        <ExpenseItem 
          title={props.items[1].title} 
          amount={props.items[1].amount} 
          date={props.items[1].date}
        />
        <ExpenseItem 
          title={props.items[2].title} 
          amount={props.items[2].amount} 
          date={props.items[2].date}
        />
        <ExpenseItem 
          title={props.items[3].title} 
          amount={props.items[3].amount} 
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
  //access each expense (items) in array with the indexes => [0].title to access the title/amount/date
}

export default Expenses; 