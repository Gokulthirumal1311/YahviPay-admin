import React from "react";
import ReusableComponent from "./ReusableComponent";
const devices = [
  {
    id: "8667223194",
    addedBy: "Admin",
    createdDate: "15/05/2025, 16:42:56",
    status: "WORKING",
  },
  {
    id: "9943310704",
    addedBy: "User1",
    createdDate: "16/05/2025, 16:45:56",
    status: "NOT WORKING",
  },
];

export default function WorkingDeviceTable() {
  const columns = ["addedBy", "id", "createdDate", "status"];
  const actions = ["Edit"];

  return (
    <ReusableComponent
      title="Working device details"
      columns={columns}
      data={devices}
      actions={actions}
    />
  );
}
