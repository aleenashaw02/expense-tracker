import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/header'
import Footer from './components/Footer/footer';
import CardContainer from './components/CardContainer/card-container';
import Balance from './components/Balance/balance' ;
// import TotalExpenseCard from './components/TotalExpenseCard/total-expense-card';
import sampleData from './sample-data.json'
import AddExpenseCard from './components/AddExpenseCard/add-expense'
import LocationInfo from './LocationInfo/locationinfo';

function App() {

  const [expenses, setExpenses] = useState(sampleData);

  //total amount
  let totalamount = sampleData.reduce((total, value) => total + value.amount, 0);

  //greatest amount
  const result = sampleData.reduce((acc, { date, amount }) => {

    if (!acc[date]) acc[date] = 0;
    acc[date] += amount;
    return acc;
  }, {});

  const [dateWithMaxAmount, maxAmount] = Object.entries(result).reduce(
    ([maxDate, maxAmount], [date, total]) =>
      total > maxAmount ? [date, total] : [maxDate, maxAmount],
    ["", 0]
  );

  console.log(dateWithMaxAmount, maxAmount);

//new expense
  const addNewExpense = (newExpense) => {
    const id = Date.now().toString();
    const updatedExpenses = [...expenses, { ...newExpense, id }];
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <Header/>
      <LocationInfo/>
      <AddExpenseCard onAddExpense={addNewExpense} />
      {/* <TotalExpenseCard totalExpense={totalamount} /> */}
      {/* <GreatestAmount greatestDate={dateWithMaxAmount} greatestExpense={maxAmount}/> */}
      <CardContainer data= {expenses} setExpenses={setExpenses}/>
      <Footer/>
    </div>
  );
}

export default App;
