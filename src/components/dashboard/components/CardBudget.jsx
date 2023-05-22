import React from "react";
import "./cardBudget.css";
function CardBudget({ data }) {
  return (
    <div className="card-display">
      <h3>{data.account}</h3>
      <hr />
      <h5>Total Debit : {data.debit}</h5>
      <h5>Total Credit : {data.credit}</h5>
    </div>
  );
}

export default CardBudget;
