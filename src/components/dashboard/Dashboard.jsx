import React, { useEffect, useState } from "react";
import "./dashboard.css";

import BudgetTable from "./components/BudgetTable";
import BudgetBarGraph from "./components/BudgetBarGraph";
import CardBudget from "./components/CardBudget";
import { transactions } from "../common/monthlyBudgetData";
function Dashboard() {
  let [transactionParticulars, setTransactionParticulars] = useState([]);
  useEffect(() => {
    getTransactionParticulars();
  }, []);
  function getTransactionParticulars() {
    let newArray = [];
    transactions.forEach((transaction) => {
      let existingData = newArray.find(
        (x) => x.account === transaction.account
      );
      if (existingData) {
        existingData.credit = existingData.credit + transaction.credit;
        existingData.debit = existingData.debit + transaction.debit;
      } else {
        let newObject = { account: "", credit: "", debit: "" };
        newObject.account = transaction.account;
        newObject.credit = transaction.credit;
        newObject.debit = transaction.debit;
        newArray.push(newObject);
      }
    });
    console.log(newArray);
    setTransactionParticulars(newArray);
  }

  return (
    <div className="dashboard-main">
      <div className="dashboard-content">
        <div className="budget-dashboard">
          <BudgetTable transactions={transactions} />
        </div>
        <div className="budget-dashboard">
          <div className="budget-card">
            {transactionParticulars.map((particular) => {
              return <CardBudget data={particular} />;
            })}
          </div>

          <BudgetBarGraph />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
