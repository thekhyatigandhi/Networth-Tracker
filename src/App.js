import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Expense from "./Components/Expense";
import Income from "./Components/Income";
import TotalBalance from "./Components/TotalBalance";
import TransactionTable from "./Components/TransactionTable";
import IncomeGraph from "./Components/IncomeGraph";
import ExpenseGraph from "./Components/ExpenseGraph";
import TransactionCard from "./Components/AddTransactionCard";
import AboutUs from "./Pages/AboutUs";
import NetworthTracker from "./Pages/NetworthTracker";

// Import other necessary components
import Uniquness from "./Pages/Uniquness";
import Services from "./Pages/Services";
import Learning from "./Pages/Learning";
import ContactUs from "./Pages/ContactUs";

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
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/networth-tracker" element={<NetworthTracker />} />
          <Route path="/our-uniqueness" element={<Uniquness />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/"
            element={
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

                <div className="row">
                  <div className="col-lg-4 mt-4">
                    <TransactionTable
                      data={transactions}
                      remove={removeTrans}
                    />
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
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
