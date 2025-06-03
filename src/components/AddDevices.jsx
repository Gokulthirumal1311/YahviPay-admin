import React, { useState } from "react";
export const  AddDevices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    deviceName: "",
    supplierRefId: "",
    imei: "",
    simPhoneNumber: "",
    supplierName: "airtel",
    version: "V1",
    language: "English",
    deviceType: "SOUNDBOX",
    rentalType: "RENTED",
    rentalAmount: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    closeModal();
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Add Device
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-6xl w-full shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Device</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                {[
                  ["Device Name", "deviceName", "text"],
                  ["Supplier Ref-ID", "supplierRefId", "text"],
                  ["IMEI", "imei", "text"],
                  ["Sim Phone Number", "simPhoneNumber", "text"],
                  ["Rental Amount", "rentalAmount", "number"],
                ].map(([label, name, type]) => (
                  <div key={name}>
                    <label className="text-gray-700 dark:text-gray-200">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                ))}

                {/* Select fields */}
                {[
                  ["Supplier Name", "supplierName", ["airtel", "vodafone"]],
                  ["Version", "version", ["V1", "V2"]],
                  ["Language", "language", ["English", "Hindi"]],
                  ["Device Type", "deviceType", ["SOUNDBOX", "POS"]],
                  ["Rental Type", "rentalType", ["RENTED", "PURCHASED"]],
                ].map(([label, name, options]) => (
                  <div key={name}>
                    <label className="text-gray-700 dark:text-gray-200">{label}</label>
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-6 gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

