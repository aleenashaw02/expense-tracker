import React, { useState } from 'react';
import './add-expense.css';

function AddExpenseCard({ onAddExpense }) {
    const [expenseName, setName] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    const addExpenseHandler = () => {
        const newExpense =
        {
            id: new Date().getTime(),
            expenseName,
            date,
            amount: parseFloat(amount),
            currency,
        };

        onAddExpense(newExpense);

        setName('');
        setDate('');
        setAmount('');
        setCurrency('');
    };

    return (
        <div className='input-container-main'>
            <div id="input-container">
                <input
                    type="text"
                    placeholder="Expense name"
                    value={expenseName}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <option value="INR">INR</option>
                    <option value="AED">AED</option>
                    <option value="JOD">JOD</option>

                </select>
                <button onClick={addExpenseHandler}>Add Expense</button>
            </div>
        </div>

    );
}

export default AddExpenseCard;