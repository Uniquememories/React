import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
      ))}
    {/* override expenses content
    use if condition to check if the items (filteredExpesnses) length is greater than 0 (something in that filtered year) then if true render the filtered expenses 
    access the array of items/expenses & call map to create a new array off original array => map every expense into an ExpenseItem element to then extract the title, amount,and date  */}
    </ul>
  );
}; 

export default ExpensesList; 