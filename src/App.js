import React, { useState } from "react";
import NavBar from "./NavBar"; // Import NavBar without "../src" as it should be in the same directory
import Expense from "./Components/Expense";
import Income from "./Components/Income";
import TotalBalance from "./Components/TotalBalance";
import TransactionTable from "./Components/TransactionTable";
import IncomeGraph from "./Components/IncomeGraph";
import ExpenseGraph from "./Components/ExpenseGraph";
import TransactionCard from "./Components/AddTransactionCard";
import AboutUs from "./Pages/AboutUs";

function App() {
  const [transactions, setTransactions] = useState([]);

  const saveTransaction = (item) => {
    setTransactions([...transactions, item]);
  };

  const removeTrans = (index) => {
    const updatedTransactions = transactions.filter((e) => e.id !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <Income data={transactions} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <Expense data={transactions} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <TotalBalance data={transactions} />
          </div>
        </div>

        <div className="row flex">
          <div className="col-lg-4 mt-4">
            <TransactionTable data={transactions} remove={removeTrans} />
            <TransactionCard save={saveTransaction} />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <IncomeGraph data={transactions} />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <ExpenseGraph data={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
