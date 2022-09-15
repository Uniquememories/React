import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); //set up the condition for showing the adding a new expense field

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {   
      ...enteredExpenseData,    //pulled in exteredExpenseData 
      id: Math.random().toString()  //randomly choose an id# and convert it into a string
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);     // Call the onAddExpense property(prop) from App.js with props and pass/forward the expenseData
    setIsEditing(false); //close the form when it is submitted
  }; 

  const startEditingHandler = () => {
    setIsEditing(true)  //triggered when the add new expense button is clicked
  };

  const stopEditingHandler = () => {
    setIsEditing(false)//triggered when hit cancel button to stop editing
  }; 

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />} 
      {/* show button if is not editing & show the form if is editing*/}
      {/* saveExpenseDataHandler is passed as a pointer to its function(above):: onSaveExpenseData executes function saveExpenseDataHandler and communicates with ExpenseForm.js through props */}
    </div>
  );
}; 

export default NewExpense; 