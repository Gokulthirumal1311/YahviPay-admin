import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";






export const AddDevices = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Add Device</button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Add Device</DialogTitle>
            <DialogDescription>
              Enter device details and save when you're done.
            </DialogDescription>
          </DialogHeader>
          

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              ["Device Name", "deviceName", "text"],
              ["Supplier Ref-ID", "supplierRefId", "text"],
              ["IMEI", "imei", "text"],
              ["Sim Phone Number", "simPhoneNumber", "text"],
              ["Rental Amount", "rentalAmount", "number"],
            ].map(([labelText, name, type]) => (
              <div key={name}>
                <label className="text-gray-700 dark:text-gray-200">
                  {labelText}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            ))}

            {[
              ["Supplier Name", "supplierName", ["airtel", "vodafone"]],
              ["Version", "version", ["V1", "V2"]],
              ["Language", "language", ["English", "Hindi"]],
              ["Device Type", "deviceType", ["SOUNDBOX", "POS"]],
              ["Rental Type", "rentalType", ["RENTED", "PURCHASED"]],
            ].map(([labelText, name, options]) => (
              <div key={name}>
                <label className="text-gray-700 dark:text-gray-200">
                  {labelText}
                </label>
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">Cancel</button>
            </DialogClose>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Save Changes</button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
