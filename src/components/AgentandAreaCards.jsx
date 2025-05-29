import React, { useState } from "react";

export const AgentandAreaCards = ({ onClose, onSave }) => {
  const [areaName, setAreaName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Area submitted:", areaName);
    if (onSave) onSave(areaName);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white opacity-95 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Add area to Lead
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="areaName"
              className="block text-sm font-medium text-gray-700"
            >
              Area Name
            </label>
            <input
              id="areaName"
              type="text"
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
            >
            Close
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
