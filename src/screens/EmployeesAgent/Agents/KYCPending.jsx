import React, { useState } from 'react'
import SingleSearchBar from '../../../components/SingleSearchBar';
import { AgentsAreas } from '../../../components/AgentsAreas';
import { Check, X } from 'lucide-react';
import { Layout } from '../Layout/Layout';
import { NoDataFound } from '../../../components/NoDataFound';

const pageContent = {
    "title": "KYC Pending",

    "subTitle": "Search for the Merchant ID to see if KYC verification is pending or completed.",
    "searchInputPlaceholderName": "Enter the Merchant ID",
    "noDataFoundDescription" : "No KYC information found for the entered Merchant ID. Please verify the ID and try again."
}

const SampleData = {
    LeadId: "MKTG111005",
    LeadName: "User005",
    LeadEmail: "gokul13@gmail.com",
    PhoneNumber: "1234567891",
    RegisteredDate: "06/05/2025, 12:23:37",
    Status: "active",
};

const stores = [
    {
        shopName: "Gokul10",
        shopPhone: "8667223194",
        bankValid: "no",
        aadhaarValid: "no",
        panValid: "no",
        merchantId: "MC1748414655305",
    },
    {
        shopName: "Gokul11",
        shopPhone: "8667223194",
        bankValid: "yes",
        aadhaarValid: "yes",
        panValid: "no",
        merchantId: "MC1748414655305",
    },
];

export const KYCPending = () => {

    return (
        <Layout>
            <div className={stores.length ? "overflow-y-auto" : ''}>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} />

                {stores.length ? <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                        >
                            <div className="mb-6">
                                <span className="text-sm font-medium text-gray-600 block">
                                    Shop Name
                                </span>
                                <span
                                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                >
                                    {store.shopName}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-sm font-medium text-gray-600 block">
                                        Merchant ID
                                    </span>
                                    <span className="text-gray-800 font-semibold">
                                        {store.merchantId}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-sm font-medium text-gray-600 block">
                                        Phone Number
                                    </span>
                                    <span>{store.shopPhone}</span>
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-gray-600 block">
                                        Bank Verified
                                    </span>
                                    <span className={`font-bold ${store.bankValid === "yes" ? "text-green-600" : "text-red-600"
                                        }`}
                                    >
                                        {store.bankValid === "yes" ? <Check /> : <X />}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-sm font-medium text-gray-600 block">
                                        Aadhaar Verified
                                    </span>
                                    <span
                                        className={`font-bold ${store.aadhaarValid === "yes"
                                            ? "text-green-600"
                                            : "text-red-600"
                                            }`}
                                    >
                                        {store.aadhaarValid === "yes" ? <Check /> : <X />}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-sm font-medium text-gray-600 block">
                                        PAN Verified
                                    </span>
                                    <span
                                        className={`font-bold ${store.panValid === "yes" ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {store.panValid === "yes" ? <Check /> : <X />}
                                    </span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>
                }
            </div>
        </Layout>
    )
}
