import React, { useState, useEffect } from 'react';

export const DynamicFormModal = ({ title = "Edit Details", onClose, userData, onSave }) => {
  const [formData, setFormData] = useState(userData);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 200); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changes = Object.keys(formData).reduce((acc, key) => {
      if (formData[key] !== userData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});
    onSave(changes);
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      {/* Animated panel */}
      <div
        className={`
          relative w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg transform transition-all duration-200
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
        `}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(userData).map(([key, value]) => {
              if (key === "merchantId") return null;
              const isDate = key.toLowerCase().includes("date") || key === "dob";
              const isEmail = key === "email";
              const isPhone = key.toLowerCase().includes("phone");
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type={isDate ? "date" : isEmail ? "email" : isPhone ? "tel" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={handleClose}
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
