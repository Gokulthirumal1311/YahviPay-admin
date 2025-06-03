import React, { useState } from 'react';

export const DynamicModel = ({ title = "Edit Details", onClose, userData, onSave }) => {
    const [formData, setFormData] = useState(userData);

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
        onClose();
    };

    const renderInput = (key, value) => {
        if (key === "merchantId") return null; // skip merchantId or readonly fields
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
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="relative w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {Object.entries(userData).map(([key, value]) => renderInput(key, value))}
                    </div>

                    <div className="flex justify-end mt-6 space-x-3">
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
