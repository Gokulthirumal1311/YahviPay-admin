import React from "react";
import ReusableComponent from "./ReusableComponent";
const parts = [
  {
    id: "P1747386566875322990",
    partId: "15515550",
    createdDate: "2025-05-16T09:09:26.875Z",
    partStatus: "NEW",
    partType: "charger",
    partCount: "5",
    addedBy: "admin",
  },
];
export const DamagedDeviceParts = () => {
  return (
    <ReusableComponent
        title="Damaged Device Parts Details"
        columns={["addedBy", "id", "createdDate", "partStatus", "partId", "partCount", "partType"]}
        data={parts}
        actions={["Remove"]}
    />
  );
};


 