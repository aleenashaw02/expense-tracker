import React from 'react';
import './card-container.css';
import Card from '../Card/card';

function CardContainer({ data, setExpenses }) {
  const deleteExpense = (expenseIndex) => {
    const updatedExpenses = data.filter((_, index) => index !== expenseIndex);
    setExpenses(updatedExpenses);
  };
  return(
    <div className='card-container'>
        {data.map((value, index) =>(
            <Card expense={value} key={value.id} expenseIndex={index} deleteExpense={deleteExpense} />

        ))}
    </div>
  )

}

export default CardContainer;

