import React, { useState } from "react";
import ReusableComponent from "./ReusableComponent";
import { ChevronDown, ChevronUp } from "lucide-react";
const settlements = [
  {
    phoneNumber: "8667223194",
    settlementID: "1747631926224160996",
    dateSettled: "21/05/2025, 11:43:53",
    amountSettled: "200.00",
  },
  {
    phoneNumber: "8667223194",
    settlementID: "1747631926224160997",
    dateSettled: "22/05/2025, 10:43:34",
    amountSettled: "100.00",
  },
  {
    phoneNumber: "9080355312",
    settlementID: "1747631926224160998",
    dateSettled: "23/05/2025, 11:49:50",
    amountSettled: "200.00",
  },
];

export const SettlementDetailsByPhone = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const columns = ["settlementID", "dateSettled", "amountSettled"];
  const actions = ['Details'];

  const handleSearch = () => {
    const filtered = settlements.filter((item) =>
      item.phoneNumber.includes(searchValue)
    );
    setFilteredData(filtered);
    setShowCards(true);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-3 mb-8">
        <label className="text-base font-medium">
          Search by Phone Number :
        </label>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter Phone Number"
          className="border border-gray-400 rounded px-2 py-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {showCards && (
        <ReusableComponent
          title={`Summary Details for Phone Number`}
          columns={columns}
          data={filteredData}
          actions={actions}
        />
      )}
    </div>
  );
};
