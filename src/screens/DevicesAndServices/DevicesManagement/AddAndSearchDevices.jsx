import React, { useState } from "react";
import { ViewDeviceDetailDrawer } from "../../../components/Drawer/ViewDeviceDetailDrawer";
import { Layout } from "../Layouts/Layout";
import { NoDataFound } from "../../../components/NoDataFound";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, } from "@/components/ui/dialog";


const pageContent = {
    "title": "Add & Search Devices",
    "subTitle": "Add a new device to the system or search for existing device details using a Phone Number or Merchant ID.",
    "searchInputPlaceholderName": 'Enter the Lead ID',
    "noDataFoundDescription": "No device details available for the provided device number."
};

const dialogContent = {

    "addDeviceTitle" : "Add Device",
    "addDeviceDescription" : "Enter device details and save when you're done.",
}

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
    {
        deviceId: "1111111111",
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

export function AddAndSearchDevices() {

    const handleEdit = (device) => {
        console.log("Edit device:", device);
    };

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

    const AddDevices = () => {

        return (
            <Dialog>
                <form onSubmit={handleSubmit}>
                    <DialogTrigger asChild>
                        <button className="button-submit-color button-design">Add Device</button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[90vh]">
                        <DialogHeader>
                            <DialogTitle>{dialogContent.addDeviceTitle}</DialogTitle>
                            <DialogDescription>{dialogContent.addDeviceDescription}</DialogDescription>
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
    }

    const SimpleTable = ({ data, columns, onEdit }) => {
        return (
            <div className="bg-white rounded-lg shadow mt-5">
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
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item[column] === 'active'
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
                                        {/* <button
                                                onClick={() => onEdit(item)}
                                                className="text-blue-600 hover:text-blue-900"
                                                >
                                                Edit
                                            </button> */}
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
        <Layout>

            <div className="">
                <div className="">
                    <div className="mb-6">
                        <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                        <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                    </div>
                    <div>
                        {AddDevices()}
                    </div>
                    {devices.length ?
                        <SimpleTable
                            data={devices}
                            columns={columns}
                            onEdit={handleEdit}
                        />
                        :
                        <div className='h-full bg-gray-100 mt-4 rounded-2xl'>

                            <NoDataFound description={pageContent.noDataFoundDescription} />
                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
};
