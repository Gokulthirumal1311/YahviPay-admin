import React, { useState } from 'react'
import ReusableComponent from './ReusableComponent';


const settlements=[
    {
    amountSettled: "1000000.00",
    dateSettled: "21/05/2025, 11:43:53",
    businessVPA: "rena.12345678@kvb",
    settledBy: "customer",
  },
  {
    amountSettled: "10000000.00",
    dateSettled: "21/05/2025, 11:41:58",
    businessVPA: "rena.12345678@kvb",
    settledBy: "system",
  },
  {
    amountSettled: "1000000.00",
    dateSettled: "21/05/2025, 11:43:53",
    businessVPA: "rena.12345678@kvb",
    settledBy: "customer",
  },
  
]
export const SettlementDetailsByAction=()=>{
    const [showCards, setShowCards] = useState(false);
    const columns = ["amountSettled", "businessVPA", "settledBy"];
    const actions = [];
  return (
      <div className="p-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <label className="text-base font-medium">Search by Action :</label>
          <select className="border border-gray-400 rounded px-2 py-1">
            <option>CUSTOMER</option>
            <option>SYSTEM</option>
          </select>
          <button
            onClick={() => setShowCards(true)}
            className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
          >
            search
          </button>
        </div>
  
        {showCards && (
          <>
           
  
            <ReusableComponent
              title="Summary Details By Action"
              columns={columns}
              data={settlements}
              actions={actions}
            />
          </>
        )}
      </div>
    );
}
