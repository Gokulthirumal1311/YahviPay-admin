import React from "react";
import ReusableComponent from "./ReusableComponent";
const parts = [
  {
    "Added By": "admin",
    Id: "P1747386566875322990",
    CreatedDate: "16/05/2025, 14:39:26",
    partStatus: "NEW",
    partId: "15515550",
    partCount: 5,
    partType: "charger",
  },
];
export default function WorkingDeviceParts() {
  return (
    <ReusableComponent
      title="Parts Details"
      columns={["Added By", "Id", "CreatedDate", "partStatus", "partId", "partCount", "partType"]}
      data={parts}
      actions={["Reduce", "Remove"]}
    />
  );
}
