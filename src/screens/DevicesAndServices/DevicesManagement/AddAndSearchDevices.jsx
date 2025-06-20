import React, { useState } from "react";
import { Layout } from "../Layouts/Layout";
import { NoDataFound } from "../../../components/NoDataFound/NoDataFound";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "@/components/ui/drawer";
import { Phone, Calendar, CreditCard, Building2, User, Settings, ChevronRight, ArrowLeft, ClipboardList, Server, Network, Plug, Terminal, Languages, IndianRupee, Store, Fingerprint, Speaker, Barcode, ClipboardSignature } from "lucide-react";


const pageContent = {
    "title": "Add & Search Devices",
    "subTitle": "Add a new device to the system or search for existing device details using a Phone Number or Merchant ID.",
    "searchInputPlaceholderName": "Enter the Lead ID",
    "noDataFoundDescription": "No device details available for the provided device number."
};

const dialogContent = {
    "addDeviceTitle": "Add Device",
    "addDeviceDescription": "Enter device details and save when you're done.",
    "addDeviceBusinessTitle": "Add Device Business",
    "addDeviceBusinessDescription": "",
    "removeDeviceBusinessTitle": "Remove Device Business",
    "removeDeviceBusinessDescription": "This will Remove Device from the Business"
}

const devices = [
    {
        "deviceId": "38231101454533",
        "deviceName": "Soundbox1",
        "imei": "860269060989555",
        "simPhoneNumber": "1234567890",
        "supplierRefId": "38231101454533",
        "supplierName": "airtel",
        "status": "active",
        "deviceType": "soundbox",
        "rentalAmt": "100",
        "deviceImage": "https://retailcashbacks.sgp1.digitaloceanspaces.com/mykaasu/img/stand03.png",
        "rentalType": "RENTED",
        "mqttServerIP": "13.202.35.217",
        "mqttServerPort": "1883",
        "location": "company",
        "createdDate": "2025-06-18T05:22:15.013Z",
        "activeBusinessId": "MC1750225578799",
        "lastPaidDate": "",
        "version": "v2",
        "language": "hn",
        "business": [
            {
                "businessPhone": "WU5wbGZHWVVQdXY2WkNPTi9PTHU4QT09",
                "createdDate": "2025-06-18T06:17:37.476Z",
                "paymentType": "",
                "InstalledDate": "",
                "paymentStartDate": "",
                "terminatedDate": "",
                "amount": "",
                "advancePaid": "",
                "pendingPaymentAmt": "",
                "maxDaysFineExempted": "",
                "paymentsMissed": "",
                "orderId": "DEVICE175022744704795077",
                "payments": [],
                "merchantId": "MC1750225578799"
            }
        ],
        "agentId": "MKTG111008",
        "activatedDate": "2025-06-18T06:17:37.557Z"
    }
]

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

    const [addDeviceBusinessDetails, setAddDeviceBusinessDetails] = useState({
        businessPhoneNumber: '',
        orderId: ''
    })

    const handleaddDeviceBusinessDetails = (e) => {
        setAddDeviceBusinessDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitAddDeviceBusiness = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    const [showBusinessDetails, setShowBusinessDetails] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState(null);

    // Function to handle getting device business
    const handleGetDeviceBusiness = () => {
        // Use the business data that's already available in your device object
        if (devices?.business) {
            setSelectedBusiness(devices.business);
            setShowBusinessDetails(true);
        } else {
            // Handle case where no business data is found
            alert('No business data found for this device');
        }
    };

    // Function to handle back to device view
    const handleBackToDevice = () => {
        setShowBusinessDetails(false);
        setSelectedBusiness(null);
    };

    // Function to reset drawer state when closed
    const resetDrawerState = () => {
        setShowBusinessDetails(false);
        setSelectedBusiness(null);
    };
    
    const ViewDeviceDetailDrawer = (device) => {
        return (
            <Drawer onOpenChange={(open) => !open && resetDrawerState()}>
                <DrawerTrigger asChild>
                    <button className="text-green-600 hover:text-green-900">View Details</button>
                </DrawerTrigger>
                <DrawerContent className="flex flex-col">
                    <DrawerHeader className="border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 ">
                                {showBusinessDetails && (
                                    <button
                                        onClick={handleBackToDevice}
                                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <ArrowLeft className="h-4 w-4 mr-1" />
                                        Back to Device
                                    </button>
                                )}
                                <div className="flex flex-col items-start">
                                    <DrawerTitle className="text-xl">
                                        {showBusinessDetails ? 'Business Details' : 'Device Details'}
                                    </DrawerTitle>
                                    <DrawerDescription>
                                        {showBusinessDetails
                                            ? `Merchant ID: ${selectedBusiness?.merchantId}`
                                            : `${device?.deviceName} (${device?.deviceId})`
                                        }
                                    </DrawerDescription>
                                </div>
                            </div>
                            <DrawerClose asChild>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                    Close
                                </button>
                            </DrawerClose>
                        </div>
                    </DrawerHeader>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-5">
                        {!showBusinessDetails ? (
                            // Device Details View
                            <div className="space-y-6">
                                {/* Device Header */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {device?.deviceName} ({device?.deviceId})
                                            </h3>
                                            <div className="flex items-center mt-2">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${device?.status === 'active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {`${device?.status.charAt(0).toUpperCase()}${device?.status.slice(1)}`}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Device Type</p>
                                            <p className="font-medium text-gray-900 capitalize">{device?.deviceType}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Device Information Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 gap-y-5">
                                    {/* Basic Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Basic Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Speaker className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Device ID</p>
                                                    <p className="font-medium">{device?.deviceId}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Barcode className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">IMEI</p>
                                                    <p className="font-medium">{device?.imei}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">SIM Phone</p>
                                                    <p className="font-medium">{device?.simPhoneNumber}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Device Created Date</p>
                                                    <p className="font-medium">{device?.createdDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Supplier Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Supplier Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Building2 className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Supplier</p>
                                                    <p className="font-medium capitalize">{device?.supplierName}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <ClipboardSignature className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Supplier Ref ID</p>
                                                    <p className="font-medium">{device?.supplierRefId}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <User className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Agent ID</p>
                                                    <p className="font-medium">{device?.agentId}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rental Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Rental Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <ClipboardList className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Rental Type</p>
                                                    <p className="font-medium">{device?.rentalType}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <IndianRupee className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Rental Amount</p>
                                                    <p className="font-medium">₹{device?.rentalAmt}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Last PaidDate</p>
                                                    <p className="font-medium">{device?.lastPaidDate !== '' ? device?.lastPaidDate : "-"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Server Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Server Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Server className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">MQTT Server IP</p>
                                                    <p className="font-medium">{device?.mqttServerIP}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Plug className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">MQTT Server Port</p>
                                                    <p className="font-medium">{device?.mqttServerPort}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Device Version and Language */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Device Version and Language
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Terminal className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Version</p>
                                                    <p className="font-medium uppercase">{device?.version}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Languages className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Language</p>
                                                    <p className="font-medium uppercase">{device?.language}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                            Other Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Location</p>
                                                    <p className="font-medium">{device?.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Store className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Active Business ID</p>
                                                    <p className="font-medium">{device?.activeBusinessId}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Business Details View
                            <div className="space-y-6">
                                {/* Business Header */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Business Details
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Merchant ID: {selectedBusiness?.merchantId}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-medium text-gray-900">{selectedBusiness?.orderId}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Information Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Contact Information */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                            Contact Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Business Phone</p>
                                                    <p className="font-medium">{selectedBusiness?.businessPhone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                            Important Dates
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Created Date</p>
                                                    <p className="font-medium">
                                                        {selectedBusiness?.createdDate ? new Date(selectedBusiness.createdDate).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        }) : 'Not available'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Installed Date</p>
                                                    <p className="font-medium">{selectedBusiness?.InstalledDate || 'Not set'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                        Payment Information
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Payment Type</p>
                                            <p className="font-medium">{selectedBusiness?.paymentType || 'Not specified'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Amount</p>
                                            <p className="font-medium">{selectedBusiness?.amount ? `₹${selectedBusiness.amount}` : 'Not set'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Advance Paid</p>
                                            <p className="font-medium">{selectedBusiness?.advancePaid ? `₹${selectedBusiness.advancePaid}` : 'Not set'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Pending Amount</p>
                                            <p className="font-medium">{selectedBusiness?.pendingPaymentAmt ? `₹${selectedBusiness.pendingPaymentAmt}` : 'Not set'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Payment Start Date</p>
                                            <p className="font-medium">{selectedBusiness?.paymentStartDate || 'Not set'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Payments Missed</p>
                                            <p className="font-medium">{selectedBusiness?.paymentsMissed || '0'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-gray-500">Max Days Fine Exempted</p>
                                        <p className="font-medium">{selectedBusiness?.maxDaysFineExempted || 'Not set'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Terminated Date</p>
                                        <p className="font-medium">{selectedBusiness?.terminatedDate || 'Active'}</p>
                                    </div>
                                </div>

                                {/* Payments History */}
                                <div className="border-t pt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                        Payment History
                                    </h4>
                                    {selectedBusiness?.payments && selectedBusiness.payments.length > 0 ? (
                                        <div className="space-y-2">
                                            {selectedBusiness.payments.map((payment, index) => (
                                                <div key={index} className="border rounded p-3 bg-white">
                                                    <p className="font-medium">Payment {index + 1}</p>
                                                    {/* Add payment details here based on your payment structure */}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 text-center py-4">No payment history available</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer with Action Buttons */}
                    <DrawerFooter className="border-t">
                        {!showBusinessDetails ? (
                            // Device Action Buttons
                            <div className="flex flex-wrap gap-3">
                                {addDeviceBusiness && addDeviceBusiness()}
                                <button
                                    onClick={handleGetDeviceBusiness}
                                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Get Device Business
                                </button>
                                {removeDeviceBusiness && removeDeviceBusiness(device.business)}
                            </div>
                        ) : (
                            // Business Action Buttons
                            <div className="flex flex-wrap gap-3">
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    Edit Device Business
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                                    Add Payments
                                </button>
                                <button
                                    onClick={handleBackToDevice}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Back to Device
                                </button>
                                <DrawerClose asChild>
                                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                        Close
                                    </button>
                                </DrawerClose>
                            </div>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }

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

    const addDeviceBusiness = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className="button-submit-color button-design">Add Device Business</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.addDeviceBusinessTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.addDeviceBusinessDescription}</DialogDescription>
                    </DialogHeader>
                    {/* Responsive Grid */}
                    <form onSubmit={handleSubmitAddDeviceBusiness}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Business PhoneNumber */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="businessPhoneNumber"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Business PhoneNumber
                                </label>
                                <input
                                    id="businessPhoneNumber"
                                    name="businessPhoneNumber"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addDeviceBusinessDetails.businessPhoneNumber}
                                    onChange={handleaddDeviceBusinessDetails}
                                    required
                                />
                            </div>
                            {/* Order Id */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="orderId"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Order Id
                                </label>
                                <input
                                    id="orderId"
                                    name="orderId"
                                    type='mail'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addDeviceBusinessDetails.orderId}
                                    onChange={handleaddDeviceBusinessDetails}
                                    required
                                />
                            </div>
                        </div>
                        {/* Footer Buttons */}
                        <DialogFooter className="mt-6 flex justify-end gap-4">
                            <DialogClose asChild>
                                <button type="button" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Save Changes</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    const removeDeviceBusiness = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        // className={`px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors`}>
                        className="button-cancel-color button-design">
                        Remove Device Business
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{dialogContent.removeDeviceBusinessTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.removeDeviceBusinessDescription}</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitAddDeviceBusiness}>
                        <div className="grid gap-4 mt-2">
                            {/* Type Confirm */}
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="typeConfirm"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Type <span className="primary-color">Confirm</span> to remove device from merchant
                                </label>
                                <input
                                    id="typeConfirm"
                                    name="typeConfirm"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addDeviceBusinessDetails.businessPhoneNumber}
                                    onChange={handleaddDeviceBusinessDetails}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <DialogFooter>
                                <DialogClose className="button-submit-color button-design">Cancel</DialogClose>
                                <button type="submit" className="button-cancel-color button-cancel-design">Remove</button>
                            </DialogFooter>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        )
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
                                                    {`${item[column].charAt(0).toUpperCase()}${item[column].slice(1)}`}
                                                </span>
                                            ) : (
                                                item[column]
                                            )}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                        {ViewDeviceDetailDrawer(item)}
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
            <div className="overflow-y-auto custom-scroll">
                <div className="">
                    <div className="mb-6">
                        <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                        <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                    </div>
                    <div>
                        {/* {AddDevices()} */}
                        <AddDevices />
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
