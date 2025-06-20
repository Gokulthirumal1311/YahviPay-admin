import React from "react";

const stores = [
  { 
    businessId: "1234",
    bankAccountHolder: "Chandra Sekar M",
    bankAccountNumber: "1234567890",
    bankIFSC: "MAHB0000232",
    bankName: "Bank Of Maharastra",
  },
  {
    businessId: "1235",
    bankAccountHolder: "Gokul T",
    bankAccountNumber: "9876543210",
    bankIFSC: "HDFC0001234",
    bankName: "HDFC Bank",
  },
];

export const ToolsVerificationCard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stores.map((userData, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow p-6"
        >
          <h2 className="text-sm font-medium text-blue-700 mb-3">Verification</h2>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Bank</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
