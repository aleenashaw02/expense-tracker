import React from 'react';
import './total-expense-card.css';

function TotalExpenseCard({ totalExpense }) {
    return (
        <>
        <div className='card-bg'>
        <div className="total-expense-card">
            <div className="card-content">
                <h2>Total Expense</h2>
                <h3>${totalExpense}</h3>
            </div>
        </div>
        </div>
        
        </>
        
    );
}

export default TotalExpenseCard;