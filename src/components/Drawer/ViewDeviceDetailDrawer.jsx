import React, { useState } from "react";
import { Phone, Calendar, CreditCard, Building2, User, Settings, ChevronRight, ArrowLeft, ClipboardList, Server, Network, Plug, Terminal, Languages, IndianRupee } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "@/components/ui/drawer";

export const ViewDeviceDetailDrawer = ({ device, trigger }) => {
    const [showBusinessDetails, setShowBusinessDetails] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState(null);

    const handleGetDeviceBusiness = (business) => {
        setSelectedBusiness(business);
        setShowBusinessDetails(true);
    };

    const handleBackToDevice = () => {
        setShowBusinessDetails(false);
        setSelectedBusiness(null);
    };

    const resetDrawerState = () => {
        setShowBusinessDetails(false);
        setSelectedBusiness(null);
    };

    return (
        <Drawer onOpenChange={(open) => !open && resetDrawerState()}>
            <DrawerTrigger asChild>
                {trigger}
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
                            <div>
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
                <div className="flex-1 overflow-y-auto p-6">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-5">
                                {/* Basic Information */}
                                <div className="space-y-4">
                                    <h4 className="text-md font-semibold text-gray-900 uppercase tracking-wide">
                                        Basic Information
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Settings className="h-4 w-4 text-gray-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-gray-500">Device ID</p>
                                                <p className="font-medium">{device?.deviceId}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="h-4 w-4 text-gray-400 mr-3" />
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
                                            <Settings className="h-4 w-4 text-gray-400 mr-3" />
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
                                            <ClipboardList className="h-4 w-4 text-gray-400 mr-3"/>
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
                            </div>

                            {/* Business Information */}
                            {/* <div className="border-t pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                        Associated Business ({device?.business?.length || 0})
                                    </h4>
                                </div>

                                {device?.business && device.business.length > 0 ? (
                                    <div className="space-y-3">
                                        {device.business.map((business, index) => (
                                            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center space-x-4">
                                                            <div>
                                                                <p className="text-sm text-gray-500">Business Phone</p>
                                                                <p className="font-medium">{business.businessPhone}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-500">Merchant ID</p>
                                                                <p className="font-medium">{business.merchantId}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">Created Date</p>
                                                            <p className="font-medium">
                                                                {new Date(business.createdDate).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleGetDeviceBusiness(business)}
                                                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-center py-4">No business associated with this device</p>
                                )}
                            </div> */}
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
                                                    {new Date(selectedBusiness?.createdDate).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
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
                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                Add Device Business
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                                Get Device Business
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                                Remove Device Business
                            </button>
                            <DrawerClose asChild>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                    Close
                                </button>
                            </DrawerClose>
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
    );
};

