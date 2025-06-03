import React from "react";
import ReusableComponent from "./ReusableComponent";
const devices = [
  {
    transactionDate: "16/05/2025, 16:45:56",
    customerName: "Gokul",
    Amount: "10000",
  },
  {
    transactionDate: "27/05/2025, 16:32:00",
    customerName: "Mathes",
    Amount: "20000",
  },
];

export default function TransactionDetails() {
  const columns = ["transactionDate", "customerName", "Amount"];
  const actions = [];

  return (
    <ReusableComponent
      title="Transaction Details"
      columns={columns}
      data={devices}
      actions={actions}
    />
  );
}
