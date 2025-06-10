import React from 'react'
import { DynamicCardLoader } from './DynamicCardLoader';

export const Example= () => {
  const data = {
    type: "Bank",
    businessId: "1234",
    accountHolder: "Chandra Sekar",
    accountNumber: "9876543210",
    ifsc: "MAHB0000232",
  };

  const tableHeaderTitle = ["Txn ID", "Amount", "Status", "Date"];

  const tableBodyData = [
    { id: "TXN001", amount: "₹1000", status: "Success", date: "2024-06-09" },
    { id: "TXN002", amount: "₹500", status: "Failed", date: "2024-06-08" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <DynamicCardLoader
        data={data}
        tableHeaderTitle={tableHeaderTitle}
        tableBodyData={tableBodyData}
      />
    </div>
  );
};
