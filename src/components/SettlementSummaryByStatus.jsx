import React, { useState } from "react";
import ReusableComponent from "./ReusableComponent";

const settlements = [
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
    settledBy: "customer",
  },
  {
    amountSettled: "1000000.00",
    dateSettled: "21/05/2025, 11:43:53",
    businessVPA: "rena.12345678@kvb",
    settledBy: "customer",
  },
];
export const SettlementSummaryByStatus = () => {
  const [showCards, setShowCards] = useState(false);
  const columns = ["amountSettled", "dateSettled", "businessVPA", "settledBy"];
  const actions = [];

  function cal() {
    // let sums = 0;
    // for (let i = 0; i < settlements.length; i++) {
    //   sums += parseInt(settlements[i].amountSettled);
    // }
    // return sums;
    let amount = settlements.reduce(
      (acc, item) => acc + parseInt(item.amountSettled),
      0
    );
    return amount;
  }

  function count() {
    return settlements.length;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-3 mb-8">
        <label className="text-base font-medium">Search by status :</label>
        <select className="border border-gray-400 rounded px-2 py-1">
          <option>SUCCESS</option>
          <option>INPROGRESS</option>
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
          <p className="font-bold text-lg flex gap-x-120">
            <span className="px-20">SUCCESSFULL TRANSACTION : {count()}</span>
            <span>TOTAL AMOUNT RECEIVED : Rs.{cal()}</span>
          </p>

          <ReusableComponent
            title="Settlement Summary By Status"
            columns={columns}
            data={settlements}
            actions={actions}
          />
        </>
      )}
    </div>
  );
};
