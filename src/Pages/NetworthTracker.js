import React, { useState } from "react";
import AddTransaction from "../Components/AddTransaction";
import AddTransactionCard from "../Components/AddTransactionCard";
import Expense from "../Components/Expense";
import ExpenseGraph from "../Components/ExpenseGraph";
import Income from "../Components/Income";
import IncomeGraph from "../Components/IncomeGraph";
import TotalBalance from "../Components/TotalBalance";
import TransactionTable from "../Components/TransactionTable";

function NetworthTracker() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h2>Net Worth Tracker</h2>
      <AddTransaction set={addTransaction} />
      <div className="row">
        <div className="col-md-4">
          <AddTransactionCard />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <Expense />
            </div>
            <div className="col-md-6">
              <Income />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ExpenseGraph />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <IncomeGraph />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TotalBalance />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TransactionTable transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworthTracker;
