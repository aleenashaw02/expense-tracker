import React from 'react';
import './balance.css';
function Balance() {
    return (
        <div className="content">
            <div>
                <h4>Your Balance</h4>
                <h1 id="balance">$111.11</h1>
                <div className="income-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+$222.22</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-$111.11</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;