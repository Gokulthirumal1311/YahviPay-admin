import React, { useState } from 'react'
import CustomDropdown from './CustomDropDown';

export const Action = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const statusOptions = [
    { label: "EDIT", value: "edit" },
    { label: "ADD DEVICE", value: "add device" },
    {label:"ADD DEVICE PARTS", value:"add device parts"}
  ];
  return (
    <div className="flex flex-col">
                  <label className="text-base font-medium mb-1">
                    Search by status
                  </label>
                  <CustomDropdown
                    options={statusOptions}
                    selected={selectedStatus}
                    setSelected={setSelectedStatus}
                    placeholder="Actions"
                  />
                </div>
  )
}
