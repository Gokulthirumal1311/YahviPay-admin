import React from "react";
import ReusableComponent from "./ReusableComponent";
const devices=[
    {
        "y": 2025,
        "m": 6,
        "d": 2,
        "v": {
            "s": "0",
            "a": "0"
        }
    },
    {
        "y": 2025,
        "m": 6,
        "d": 2,
        "v": {
            "s": "1",
            "a": "150"
        }
    }
];
export  function CalenderGrid() {
  const columns = ["paymentDate",  "status", "amount"];
  const actions = [];
  const flattenedDevices = devices.map((item) => {
    let statusText='';
    if (item.v.s==='0'){
        statusText='Unpaid';
    }
    else if(item.v.s==='1'){
        statusText='Paid';
    }
    else if(item.v.s==='2'){
        statusText='Holiday'
    }
    const paymentDate = `${item.y}-${item.m}-${item.d}`;
  return {
    paymentDate:paymentDate,
    status: statusText,  
    amount: item.v.a
  };
});

  return (
    <>
      <ReusableComponent
        title="Device Payment Table"
        columns={columns}
        data={flattenedDevices}
        actions={actions}
      />
    </>
  );
}

