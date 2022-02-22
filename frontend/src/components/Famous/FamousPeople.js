import React, { useState } from 'react';

import './FamousPeople.css';
import Card from '../UI/Card';

const FamousPeople = (props) => {
const [title, setTitle] = useState(props.title)
console.log('ExpenseItem evaluated by React')

  const clickHandler = () => {
  setTitle('Updated!!')
    console.log(title);
  };

  return (
    <Card className='famous-people__details'>
      <h3 className='famous-people__title'>{title}</h3>
      <ul>
        <li>
          <span>Job: </span>
          {props.job}
        </li>
        <li>
          <span>Country: </span>
          {props.country}
        </li>
        <li>
          <span>Age: </span>
          {props.age}
        </li>
        <li>
          <span>Net worth: </span>
          {props.netWorth}
        </li>
      </ul>
      <button onClick={clickHandler}>Add User</button>
    </Card>
  );
};

export default FamousPeople;
