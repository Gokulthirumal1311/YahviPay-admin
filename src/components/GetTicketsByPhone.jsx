import React from "react";
import ReusableComponent from "./ReusableComponent";
const parts=[
  {
    BusinessName:"Gokul",
    Type:'Damage',
    Date:"16/05/2025, 16:45:56",
    Status:'PENDING',
  },
];
export default function GetTicketsByPhone() {
    const columns = ["BusinessName", "Type","Date","Status"];
    const actions = [];
  return (
    <ReusableComponent
      title="Get Tickets By Phone"
      columns={columns}
      data={parts}
      actions={actions}
    />
  );
}


