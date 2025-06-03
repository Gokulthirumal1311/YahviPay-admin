import React, { useState } from 'react';
import { DynamicFormModal } from './DynamicFormModal';


const userInfo = {
  
  "device_id": "38231101451960",
  "business_phone_number": "8667223194",
  "order_id": "DEVICE174780986042633294"

};

export default function UserCard() {
  const [userData, setUserData] = useState(userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (updatedFields) => {
    const updated = { ...userData, ...updatedFields };
    localStorage.setItem('userData', JSON.stringify(updated));
    setUserData(updated);
  };


  
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-3xl">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">USER DETAILS</h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(userData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <div className="px-4 py-2 bg-gray-100 rounded">{value}</div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <DynamicFormModal
            title="Edit User Info"
            userData={userData}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}
