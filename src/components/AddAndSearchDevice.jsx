import React, { useState } from "react";
import { ViewDeviceDetailDrawer } from "./ViewDeviceDetailDrawer";

const AddAndSearchDevices = () => {
  const pageContent = {
    "title": "Add & Search Devices",
    "subTitle": "Leads Details from one place with LeadId",
    "searchInputPlaceholderName": 'Enter the Lead ID'
  };

  const devices = [
    {
      deviceId: "8667223194",
      deviceName: "Soundbox2",
      imei: "8667223194",
      simPhoneNumber: "8667223194",
      supplierRefId: "8667223194",
      supplierName: "airtel",
      status: "inactive",
      deviceType: "soundbox",
      rentalAmt: "150",
      rentalType: "RENTED",
      mqttServerIP: "8667223194",
      version: "v1",
      language: "en",
      business: [
        {
          businessPhone: "8667223194",
          createdDate: "2025-05-21T06:44:26.102Z",
          paymentType: "",
          InstalledDate: "",
          paymentStartDate: "",
          terminatedDate: "",
          amount: "",
          advancePaid: "",
          pendingPaymentAmt: "",
          maxDaysFineExempted: "",
          paymentsMissed: "",
          orderId: "DEVICE174780986042633294",
          payments: [],
          merchantId: "MC1747288873705"
        }
      ],
      agentId: "MKTG111012",
    },
  ];

  const columns = ["deviceId", "supplierRefId", "simPhoneNumber", "deviceName", "status"];

  const handleEdit = (device) => {
    console.log("Edit device:", device);
  };

  const SimpleTable = ({ data, columns, onEdit }) => {
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Device Report | Search Devices</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th key={column} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {column.replace(/([A-Z])/g, ' $1').trim()}
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {columns.map((column) => (
                    <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {column === 'status' ? (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item[column] === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item[column]}
                        </span>
                      ) : (
                        item[column]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    <ViewDeviceDetailDrawer 
                      device={item}
                      trigger={
                        <button className="text-green-600 hover:text-green-900">
                          View Details
                        </button>
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className='text-2xl font-bold text-gray-900 mb-1'>{pageContent.title}</h2>
          <p className='text-gray-600'>{pageContent.subTitle}</p>
        </div>
        
        <SimpleTable 
          data={devices}
          columns={columns}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default AddAndSearchDevices;