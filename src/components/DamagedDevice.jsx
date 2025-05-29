import React from 'react'
import ReusableComponent from './ReusableComponent';



const devices=[
    {
        id: "1551555053",
        createdDate: "2025-05-15T12:04:37.559Z",
        status: "DAMAGED"
    }

]
export const DamagedDevice = () => {
    const columns=["id","createdDate","status"];
    const actions=["Remove Device"]
  return (
    <ReusableComponent
    title="Damaged Device Details"
    columns={columns}
    data={devices}
    actions={actions}
    />

  )
}
