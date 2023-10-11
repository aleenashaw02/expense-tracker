import './App.css';
import Header from './components/Header/header'
import Footer from './components/Footer/footer';
import CardContainer from './components/CardContainer/card-container';
import Balance from './components/Balance/balance' ;
import TotalExpenseCard from './components/TotalExpenseCard/total-expense-card';
import sampledata from "./sample-data.json"
import GreatestAmount from './components/GreatestAmount/greatest-amount';
function App() {
  //total amount
  let totalamount=0;
  sampledata.forEach(value=> {
    totalamount+=parseFloat(value.amount.replace ("$", ""));
  });

  //greatest amount
  const result = sampledata.reduce((acc, { date, amount }) => {
    const parsedAmount = parseFloat(amount.replace("$", ""));
    if (!acc[date]) acc[date] = 0;
    acc[date] += parsedAmount;
    return acc;
  }, {});

  const [dateWithMaxAmount, maxAmount] = Object.entries(result).reduce(
    ([maxDate, maxAmount], [date, total]) =>
      total > maxAmount ? [date, total] : [maxDate, maxAmount],
    ["", 0]
  );

  console.log(dateWithMaxAmount, maxAmount);

  return (
    <div className="App">
      <Header/>
      <TotalExpenseCard totalExpense={totalamount} />
      <GreatestAmount greatestDate={dateWithMaxAmount} greatestExpense={maxAmount}/>
      <CardContainer data= {sampledata}/>
      <Footer/>
    </div>
  );
}

export default App;
