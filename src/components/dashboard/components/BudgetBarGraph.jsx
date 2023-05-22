import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
function BudgetBarGraph() {
  const data = [
    {
      name: "SEPT",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "OCT",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "NOV",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "DEC",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "JAN",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "FEB",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "MAR",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "APR",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "MAY",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "JUN",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="card-display">
         <h3>Account Balance</h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#82CA9D" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}

export default BudgetBarGraph;
