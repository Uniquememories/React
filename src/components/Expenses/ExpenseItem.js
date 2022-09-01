import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

// function ExpenseItem (props) { //must be capital letters //props gets the key value pairs from each attribute in app.js (can name it anything but props is mostly used)
const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>  
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  ); 
  //single curly braces for dynamic data
  //toISOString => returns a date as a string
  //if there is no info between the two closing tags <ExpenseDate></ExpenseDate> it can use a self closing tag <ExpenseDate/>
  //date={props.date} => to set the date props per the props.date in ExpenseDate.js
  //use the Card component to create the rounded corners of the cards
  //onClick => adds an event listener for click events on the button 
  //in line arrow function example for a button: <button onClick={() => {console.log('clicked!')}}>Change Title</button> 
}

export default ExpenseItem; 