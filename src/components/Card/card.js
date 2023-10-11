function Card({ expense }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{expense.expenseName}</h2>
                <h5>{expense.date}</h5>
                <p>{expense.description}</p>
                <h3>{expense.amount}</h3>
                <button className="card-delete-button">Delete Expense</button>
            </div>
        </div>
    );
}
export default Card;