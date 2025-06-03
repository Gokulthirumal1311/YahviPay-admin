import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReusableComponent from "./ReusableComponent";
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
export default function SearchDevices() {
  const columns = ["deviceId", "supplierRefId", "simPhoneNumber", "deviceName", "status"];
  const actions = ["Edit"];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showBusinessIndex, setShowBusinessIndex] = useState(null);
  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
    setShowBusinessIndex(null); 
  };
  const handleGetDeviceBusiness = (index) => {
    setShowBusinessIndex((prev) => (prev === index ? null : index));
  };
  const renderBusinessDetails = (business) => (
    <div className="mt-4 p-4 border rounded bg-blue-50 text-sm">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2 text-blue-900">
        <div><strong>Installed Date:</strong> {business.InstalledDate}</div>
        <div><strong>Created Date:</strong> {business.createdDate}</div>
        <div><strong>Advance Paid:</strong> {business.advancePaid}</div>
        <div><strong>Amount:</strong> {business.amount}</div>
        <div><strong>Business Phone:</strong> <a className="text-blue-600 underline" href={`tel:${business.businessPhone}`}>{business.businessPhone}</a></div>
        <div><strong>Max Days Fine Exempted:</strong> {business.maxDaysFineExempted}</div>
        <div><strong>Order ID:</strong> {business.orderId}</div>
        <div><strong>Payment Mode:</strong> {business.paymentMode}</div>
        <div><strong>Payment Start Date:</strong> {business.paymentStartDate}</div>
        <div><strong>Payment Type:</strong> {business.paymentType}</div>
        <div><strong>Payments Missed:</strong> {business.paymentsMissed}</div>
        <div><strong>Pending Amount:</strong> {business.pendingPaymentAmt}</div>
        <div><strong>Terminated Date:</strong> {business.terminatedDate}</div>
      </div>
      <div className="mt-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded mr-2">Edit Device Business</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded">Add Payments</button>
      </div>
    </div>
  );

  const renderDetails = (device, index) => (
    <div className="p-4 bg-gray-50 border rounded text-sm mt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
        <div><strong>Device ID:</strong> {device.deviceId}</div>
        <div><strong>IMEI:</strong> {device.imei}</div>
        <div><strong>SIM:</strong> {device.simPhoneNumber}</div>
        <div><strong>Supplier:</strong> {device.supplierName}</div>
        <div><strong>Rental Type:</strong> {device.rentalType}</div>
        <div><strong>Rental Amt:</strong> ₹{device.rentalAmt}</div>
        <div><strong>Status:</strong> {device.status}</div>
        <div><strong>MQTT IP:</strong> {device.mqttServerIP}</div>
        <div><strong>Version:</strong> {device.version}</div>
        <div><strong>Merchant ID:</strong> {device.business?.[0]?.merchantId}</div>
        <div><strong>Agent ID:</strong> {device.agentId}</div>
        <div><strong>Language:</strong> {device.language}</div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Add Device-business</button>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => handleGetDeviceBusiness(index)}
        >
          Get Device Business
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">Remove Device Business</button>
      </div>

      {showBusinessIndex === index && renderBusinessDetails(device.business?.[0])}
    </div>
  );

  return (
    <>
      <ReusableComponent
        title="Device Report | Search Devices"
        columns={columns}
        data={devices}
        actions={actions}
      />

      <div className="mt-6 px-6">
        <h3 className="text-lg font-semibold mb-3">Device Details</h3>

        {devices.map((device, index) => (
          <div key={index} className="mb-4 border border-gray-200 p-3 rounded-md shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm text-gray-700">{device.deviceName} ({device.deviceId})</span>
              <button onClick={() => handleToggle(index)}>
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedIndex === index && renderDetails(device, index)}
          </div>
        ))}
      </div>
    </>
  );
}
