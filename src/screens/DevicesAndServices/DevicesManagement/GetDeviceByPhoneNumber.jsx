import React, { useState } from 'react'
import { Layout } from '../Layouts/Layout'
import { NoDataFound } from '../../../components/NoDataFound/NoDataFound';


const deviceData = [
    {
        phoneNumber: "8667223194",
        merchantId: "MC1747288873705",
        deviceId: "9876543217",
        deviceName: "Soundbox4",
    },
    {
        phoneNumber: "9080355312",
        merchantId: "MC1747288873715",
        deviceId: "1234567890",
        deviceName: "Soundbox1",
    },
];
const pageContent = {
    "title": "Get Device By Phone Number",

    "subTitle": "Search by Phone Number and Merchant ID to view linked device details.",
    "searchInputPlaceholderName": 'Enter the Lead ID',
    "noDataFoundDescription" : "Enter a Phone Number or Merchant ID to find associated device details."
}
export const GetDeviceByPhoneNumber = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [merchantId, setMerchantId] = useState("");
    const [deviceInfo, setDeviceInfo] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const foundDevice = deviceData.find(
            (device) =>
                device.phoneNumber === phoneNumber && device.merchantId === merchantId
        );

        setDeviceInfo(foundDevice || null);

        setSearched(true);
    };

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className="">
                <h2 className="text-xl font-semibold text-blue-700">
                    Device Report <span className="text-gray-400 font-normal">| Get devices</span>
                </h2>

                <form onSubmit={handleSearch} className="mt-4 flex gap-2 items-end">
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900" />

                    <input
                        type="text" value={merchantId} onChange={(e) => setMerchantId(e.target.value)} placeholder="Merchant ID"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                    />
                    <button type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl">Go</button>
                </form>

                {searched ? (
                    <div className="mt-6 border-t pt-4">
                        {deviceInfo ? (
                            <>
                                <p className="font-semibold text-blue-900">
                                    Device ID:{" "}
                                    <span className="text-blue-600 underline cursor-pointer">
                                        {deviceInfo.deviceId}
                                    </span>
                                </p>
                                <p className="font-semibold text-blue-900 mt-1">
                                    Device Name: <span className="text-black">{deviceInfo.deviceName}</span>
                                </p>
                            </>
                        ) : (
                            <p className="text-gray-600">No Device Found</p>
                        )}
                    </div>
                )
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>

                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>
                }
            </div>
        </Layout>
    )
}

