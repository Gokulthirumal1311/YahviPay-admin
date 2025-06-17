import React, { useEffect, useState } from "react";

export const LeadAccountSettingForm=({ onClose, userData, onSave })=>{
  const [formData, setFormData]=useState({
    PhoneNumber:"",
    LeadEmail:"",
  });

  useEffect(()=>{
    if (userData){
      setFormData({
        PhoneNumber: userData.PhoneNumber,
        LeadEmail: userData.LeadEmail,
      });
    }
  },[userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const changedFields = Object.keys(formData).reduce((acc, key) => {
      if (formData[key] !== userData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});

    onSave(changedFields);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Update Lead Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone num
            </label>
            <input
              type="text"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mail
            </label>
            <input
              type="email"
              name="LeadEmail"
              value={formData.LeadEmail}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
