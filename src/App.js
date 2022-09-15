import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
  },
  { 
    id: 'e3', 
    title: 'Car Insurance', 
    amount: 159.95, 
    date: new Date(2022, 2, 28), 
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App() {
//can also write as arrow function
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 
  // get access to our expenses and setExpenses updating function as well as bring in the dummy expenses with the useState => To update expenses array when new expenses are added. 

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    }); //get the previous expenses & return the new array & add the expense & add to it the prevExpenses with the spread operator
    // console.log('In App.js');
    // console.log(expense); 
  };

  //JSX Code behind the scenes
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // ); //alternative to the return JSX code below

  //JSX code ===> 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* pass a pointer with onAddExpense at the addExpenseHandler function so can call it in NewExpense.js */}
      <Expenses items={expenses}/>
    </div>
  );
  //Expenses items to extract each key value pair (expenses items => title/amount/date) from the Expense.js file
}

export default App;
