import React from 'react';

const userDetails = {
  SettlementID: "1747631926224160996",
  AmountSettled: "200.00",
  Status: "SUCCESS",
  LeadName: "Gokul",
  LeadEmail: "gokul@example.com",
  DateSettled: "5/19/2025, 10:48:46 AM",
  RefID: "1747631926224160996"
};

const formatLabel = (label) => {
  return label
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace("Id", "ID");
};

const SettlementDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  p-6">
      <div className="grid grid-cols-1">
        <div className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden w-full">
          <div className="mb-6">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Settlement Details
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(userDetails).map(([key, value]) => (
              <div key={key}>
                <span className="text-sm font-medium text-gray-600 block">{formatLabel(key)}</span>
                <span className="text-black">{value}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default SettlementDetails;
