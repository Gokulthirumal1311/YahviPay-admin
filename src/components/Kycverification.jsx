import React from "react";
import { Link } from "react-router-dom";
const stores = [
  {
    BusinessID:"1234",
    shopName: "Gokul10",
    shopPhone: "8667223194",
    bankValid: "no",
    aadhaarValid: "no",
    panValid: "no",
    merchantId: "MC1748414655305",
  },
  {
    BusinessID:"1235",
    shopName: "Gokul11",
    shopPhone: "8667223194",
    bankValid: "yes",
    aadhaarValid: "yes",
    panValid: "no",
    merchantId: "MC1748414655305",
  },
];

export const Kycverification=()=>{
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stores.map((store, index) => (
        <div
          key={index}
          className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 block">
                Shop Name
            </span>
            <span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {store.shopName}
            </span>
          </div>


          

          <div className="grid grid-cols-2 gap-4">

            <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 block">
                Business ID
            </span>
            <span
              className="text-gray-800 font-semibold"
            >
              {store.BusinessID}
            </span>
          </div>
            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Merchant ID
              </span>
              <span className="text-gray-800 font-semibold">
                {store.merchantId}
              </span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Phone Number
              </span>
              <span>{store.shopPhone}</span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Bank Verified
              </span>
              <span
                className={`font-bold ${
                  store.bankValid === "yes" ? "text-green-600" : "text-red-600"
                }`}
              >
                {store.bankValid === "yes" ? "✔️" : "❌"}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Aadhaar Verified
              </span>
              <span
                className={`font-bold ${
                  store.aadhaarValid === "yes"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {store.aadhaarValid === "yes" ? "✔️" : "❌"}
              </span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                PAN Verified
              </span>
              <span
                className={`font-bold ${
                  store.panValid === "yes" ? "text-green-600" : "text-red-600"
                }`}
              >
                {store.panValid === "yes" ? "✔️" : "❌"}
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      ))}
    </div>
    
  );
};
