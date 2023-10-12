import moment from "moment/moment";
function Card({ expense, expenseIndex, deleteExpense }) {
    const formattedDate = moment(expense.date, "DD-MM-YYYY").format("YYYY-MM-DD");
    const handleDelete = () => {
        deleteExpense(expenseIndex);
    };
    
    return (
        <div className="card">
            <div className="card-content">
                <h2>{expense.expenseName}</h2>
                <h5>{moment(expense.date,"DD-MM-YYYY").format("YYYY-MM-DD")}</h5>
                <p>{expense.description}</p>
                <h3>{expense.currency} {expense.amount}</h3>
                <button className="card-delete-button" onClick={handleDelete}>Delete Expense</button>
            </div>
        </div>
    );
}
export default Card;

// function Card({ expense, expenseIndex, deleteExpense }) {
//   const handleDelete = () => {
//     deleteExpense(expenseIndex);
//   };

//   return (
//     <div className="card">
//       <div className="card-content">
//         <h2>{expense.expenseName}</h2>
//         <h5>{moment(expense.date, 'DD-MM-YYYY').format('YYYY-MM-DD')}</h5>
//         <p>{expense.description}</p>
//         <h3>{expense.amount}</h3>
//         <button className="card-delete-button" onClick={handleDelete}>
//           Delete Expense
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;
