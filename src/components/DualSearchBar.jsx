import React, { useState } from 'react';

export const DualSearchBar = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone: ${phoneNumber} | Reference ID: ${referenceId}`);
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} className="w-full">
       
        <div className="flex w-full overflow-hidden rounded-md border border-gray-300 shadow-sm bg-white gap-2">

          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            className="flex-1 px-4 py-2 text-sm text-gray-900 "
          />

          <input
            type="text"
            value={referenceId}
            onChange={(e) => setReferenceId(e.target.value)}
            placeholder="Merchent ID"
            className="flex-1 px-4 py-2 text-sm text-gray-900 "
          />

          <button
            type="submit"
            className="px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

