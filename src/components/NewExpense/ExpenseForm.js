import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(''); ////store the current value the user enters && sets the state for the title input=> useState takes an empty string because initally there is nothing entered into the input: enteredTitle=> currently entered title // setEnteredTitle=> function for updating the title
  const [enteredAmount, setEnteredAmount] = useState(''); 
  const [enteredDate, setEnteredDate] = useState(''); 

  //~~alternative ways~~//
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // }); //groups together the three states instead of calling seperately 

  const titleChangeHandler = (event) => { //executed whenever the title input changes
    // console.log(event.target.value); // the current value the user entered with every keystroke
    setEnteredTitle(event.target.value);  //set the function to update the title to the current entered value

    //~~ alternative ways~~//
    // setUserInput({
    //   ...userInput, //Pulls out all the other key value pairs and adds them to the new object enteredTitle :: copy the other values to you do not loose that data => use the spread operator ... and add the userInput to override the user enteredTitle
    //   enteredTitle: event.target.value, //overrides the prior key value pairs
    // });

    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}; 
    // }); //better way gets the previous state snapshot and return the new state snapshot -> makes sure its the latest state snapshot : use when depend on prev state
  }; 

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); 
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); 
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevent the default of the request being sent=> stay on current loaded page

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)  //converts date into a date object
    };

    props.onSaveExpenseData(expenseData); //communicates with NewExpense.js & executes the onSaveExpenseData & passes in the above expenseData
    // console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate(''); 
    //they are set to an empty string to clear the data when the form is submitted
  }; 

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle} //gather user input
            onChange={titleChangeHandler} //change user input
            />
        </div>
          {/* onChange adds an event listener for the change event => points at the function that needs to be executed */}
          {/* the value attribute is set to the enteredTitle => sets internal value property */}
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            min='0.01' 
            step='0.01' 
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* The step attribute specifies the interval between legal numbers in an <input> element. */}
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type='date' 
            min='2021-01-01' 
            max='2023-12-31' 
            value={enteredDate}
            onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense_actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
        {/* listen to the form being submitted */}
      </div>
    </form>
  )
}; 

export default ExpenseForm; 