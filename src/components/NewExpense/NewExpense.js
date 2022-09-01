import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {   
      ...enteredExpenseData,    //pulled in exteredExpenseData 
      id: Math.random().toString()  //randomly choose an id# and convert it into a string
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);     // Call the onAddExpense property(prop) from App.js with props and pass/forward the expenseData
  }; 

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  
    {/* saveExpenseDataHandler is passed as a pointer to its function(above):: onSaveExpenseData executes function saveExpenseDataHandler and communicates with ExpenseForm.js through props */}
  </div>
}; 

export default NewExpense; 