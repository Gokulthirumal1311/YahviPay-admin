import React from 'react'
import { Layout } from './Layouts/Layout'
import { DoubleSearchBar } from '../../components/DoubleSearchBar'
import { Check, X } from 'lucide-react';

const pageContent = {
    "title": "Verify Flags",

    "subTitle": "Review flagged records and enable users to resubmit required information.",
    "searchInputPlaceholderNameForPhoneNumber": 'Enter the Phone Number',
    "searchInputPlaceholderNameForMerchantID": 'Enter the Merchant ID',

}
const stores = [
    {

        bankValid: "no",
        aadhaarValid: "no",
        panValid: "no",
        creditscore: "no",
        gst : 'yes',
        location : 'no',
        pan : 'no',
        user : 'yes',
        business : 'yes'
    }
];
export const VerifyFlags = () => {
    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <DoubleSearchBar

                placeholder1={pageContent.searchInputPlaceholderNameForPhoneNumber}
                placeholder2={pageContent.searchInputPlaceholderNameForMerchantID}
            />
            <div className='flex-1 overflow-y-auto mt-4'>
                <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl">
                    <div
                        className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg overflow-hidden"
                    >
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">User Details Verified</h2>
                            
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl">Edit</button>
                        </div>
                        <div className="mt-6 grid gap-8">
                            {stores.map((store, index) => (
                                <div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Aadhaar Verify
                                            </span>
                                            <span className={`font-bold ${store.creditscore === "yes"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                    }`}>
                                                {store.aadhaarValid === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Bank Verify
                                            </span>
                                            <span className={`font-bold ${store.creditscore === "yes"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                    }`}>{store.bankValid === "yes" ? <Check /> : <X />}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Business Verify
                                            </span>
                                            <span className={`font-bold ${store.business === "yes" ? "text-green-600" : "text-red-600"
                                                }`}
                                            >
                                                {store.business === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Creditscore
                                            </span>
                                            <span
                                                className={`font-bold ${store.creditscore === "yes"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                    }`}
                                            >
                                                {store.creditscore === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                GST
                                            </span>
                                            <span
                                                className={`font-bold ${store.gst === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.gst === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Location
                                            </span>
                                            <span
                                                className={`font-bold ${store.location === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.location === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Pan
                                            </span>
                                            <span
                                                className={`font-bold ${store.panValid === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.panValid === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                User
                                            </span>
                                            <span
                                                className={`font-bold ${store.user === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.user === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
