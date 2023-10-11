import React from 'react';
import './header.css';
import img from'./et.png';

function Header() {
    return (
        <header>
            <div className="header-left">
                <h1>Expense Tracker</h1>
            </div>
            <div className="header-right">
                <img src={img} alt="Logo" />
            </div>
        </header>
    );
}
export default Header