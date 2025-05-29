import React, { useState } from 'react';

export const AccountSettingForm = ({ onClose,userData,onSave}) => {
    const [formData,setFormData]=useState(userData);
    const handleChange=(e)=>{
        setFormData ({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
    e.preventDefault();


    const changeParticular=Object.keys(formData).reduce((acc,key)=>{
        if (formData[key]!==userData[key]){
            acc[key]=formData[key];
        }
        return acc;
    },{});
    onSave(changeParticular);
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">

      <div className="relative w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>

        <h2 className="mt-2 text-lg font-semibold text-gray-700 capitalize dark:text-white mb-4">
          User Details
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">D.O.B</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text"  name="address" value={formData.address} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
