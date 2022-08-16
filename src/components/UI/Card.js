import React from 'react';

import './Card.css'

// function Card(props) {
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>
}
//props.children is used for opening and closing Card tags (custom component) for the ExpenseItem.js file => wrapper component
//make a classes property so we can use the card custom component css and the className css on the custome component

export default Card; 