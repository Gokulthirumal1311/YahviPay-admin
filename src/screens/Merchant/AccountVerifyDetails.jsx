import React from 'react'
import { CheckCircle, XCircle, AlertCircle, PhoneCall } from 'lucide-react';


const userDetails = {
  aadhaarValid: "no",
  bankValid: "no",
  kyc: "no",
  loanPaymentPending: "nill",
  ticketId: "nill",
  businessDetailsUpdated: "no",
  deviceId: "7299700576",
  loanId: "nill",
  noTransFlag: "yes",
  ticketPending: "nill",
  bankValidDated: "no",
  devicePending: "nill",
  loanPaid: "yes",
  panValid: "no",
  userDetailsUpdated: "no"
};

export const AccountVerifyDetails = () => {

    const stats = getStatusCounts(userDetails);
    return (
        <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Account Status
                </h2>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard icon={CheckCircle} label="Verified" count={stats.verified} color="text-green-500" />
                <StatCard icon={XCircle} label="Pending" count={stats.pending} color="text-red-500" />
                <StatCard icon={AlertCircle} label="Not Set" count={stats.notSet} color="text-gray-500" />
                <StatCard icon={PhoneCall} label="Total Fields" count={stats.total} color="text-blue-500" />
            </div>


            <div className="grid grid-cols-1">
                <div className="group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-full">
                <div className="mb-6">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    User Details
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    { Object.entries(userDetails).map(([key, value]) => (
                    <div key={key}>
                        <span className="text-md font-medium text-gray-600 block">{formatLabel(key)}</span>
                        <span className="text-black text-lg">{value}</span>
                    </div>
                    ))}
                    </div>
                </div>
            </div>   
                        
            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}
                    
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
        </div>        
    )
}


const formatLabel = (label) => {
  return label
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace("Id", "ID")
    .replace("Valid", "Valid");
};

const getStatusCounts = (data) => {
  let verified = 0, pending = 0, notSet = 0;
  Object.values(data).forEach(val => {
    const v = val?.toLowerCase();
    if (v === "yes") verified++;
    else if (v === "no") pending++;
    else notSet++;
  });
  return {
    verified,
    pending,
    notSet,
    total: Object.keys(data).length
  };
};

const StatCard = ({ icon: Icon, label, count, color }) => (
  <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 border-2 border-gray-300">
    <Icon className={`w-6 h-6 ${color}`} />
    <div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
      <div className="text-xl font-bold">{count}</div>
    </div>
  </div>
);


