import React from "react";
import "./budgetTable.css";
// import { transactions } from "../../common/monthlyBudgetData";
function BudgetTable({transactions}) {
  return (
    <div className="card-display budget-table">
      <h3>Budget Table</h3>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Account</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction,index) => {
            return (
              <tr className="tableMargin" key={index}>
                <td>{transaction.account}</td>
                <td>{transaction.credit}</td>
                <td>{transaction.debit}</td>
                <td>{transaction.month}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetTable;
