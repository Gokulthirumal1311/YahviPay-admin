import React, { useState } from 'react'
import SingleSearchBar from '../../../components/SearchBar/SingleSearchBar'
import { Link } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Copy, ExternalLink } from "lucide-react";
import { NoDataFound } from '../../../components/NoDataFound/NoDataFound'
import CustomDropdown from '../../../components/CustomDropDown/CustomDropDown'
import { ToastMessage, triggerToast } from '../../../components/ToastMessage/ToastMessage';

const pageContent = {
    "title": "Search Shop",
    "subTitle": "Search for shop information by choosing a Marketing Agent and store name.",
    "searchInputPlaceholderName": "Enter the Store Name",
    "noDataFoundDescription": "No shops found matching the selected Marketing Agent ID and store name. Please try different filters."
}

const stores = [
    {
        address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
        businessVPA: "rena.9943310704@kvb",
        latitude: "12.955591",
        longitude: "80.247504",
        merchantId: "MC1747298937542",
        shopName: "Gokul2",
        shopPhone: "8667223194"
    },
    {
        address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
        businessVPA: "rena.9943310704@kvb",
        latitude: "12.955591",
        longitude: "80.247504",
        merchantId: "MC1747298937542",
        shopName: "Gokul2",
        shopPhone: "9080"
    },
    {
        address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
        businessVPA: "rena.9943310704@kvb",
        latitude: "12.955591",
        longitude: "80.247504",
        merchantId: "MC1747298937542",
        shopName: "Gokul2",
        shopPhone: "8667223194"
    },
]

const agentIdList = [
    { label: "MKTG111012", value: "MKTG111012" },
    { label: "MKTG111013", value: "MKTG111013" },
    { label: "MKTG111014", value: "MKTG111014" }
]


export const SearchShop = () => {
    
    const [selectedAgentId, setSelectedAgentId] = useState("");

    async function handleCopy(text) {
        await navigator.clipboard.writeText(text);
        triggerToast("success", `Copied: ${text}`);
    }

    return (
        <Layout>
            <div className={stores.length ? "overflow-y-auto custom-scroll" : ""}>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <div className='flex gap-5 items-center mb-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="agentId" className="text-base font-medium cha text-gray-700">Marketing Agent Id </label>
                        <CustomDropdown 
                            options={agentIdList} 
                            selected={selectedAgentId} 
                            setSelected={setSelectedAgentId} 
                        />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="storeName" className="text-base font-medium cha text-gray-700">Store Name</label>
                        <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} />
                    </div>
                </div>
                {stores.length ? <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {stores.map((store, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                            >
                                <div className="mb-6">
                                    <span className="text-sm font-medium text-gray-600 block">
                                        Shop Name
                                    </span>
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        {store.shopName}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-sm font-medium text-gray-600 block">
                                            Business VPA
                                        </span>
                                        <span>{store.businessVPA}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-600 block">
                                            Shop Phone
                                        </span>
                                        <span className='flex gap-2 items-center'>
                                            <Link className="text-blue-500 font-semibold" to={``}>
                                                {store.shopPhone}
                                            </Link>
                                            <button
                                                onClick={() => handleCopy(store.shopPhone)} className="text-gray-400 hover:text-blue-600">
                                                <Copy size={18} />
                                            </button>
                                        </span>
                                    </div>
                                    <div className="col-span-2 flex space-x-1 group">
                                        <div>

                                            <span className="text-sm font-medium text-gray-600 block">
                                                Latitude
                                            </span>
                                            <a
                                                href={`https://www.google.com/maps?q=${store.latitude},${store.longitude}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 group-hover:underline cursor-pointer flex items-center"
                                            >
                                                {store.latitude}
                                                {/* <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                                            </a>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Longitude
                                            </span>
                                            <a
                                                href={`https://www.google.com/maps?q=${store.latitude},${store.longitude}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 group-hover:underline cursor-pointer flex items-center"
                                            >
                                                {store.longitude}
                                                <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-600 block">
                                            Address
                                        </span>
                                        <span>{store.address}</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>
                }
            </div>
            {/* Toast gets rendered in-tree (no portal) */}
            <ToastMessage />
        </Layout>
    )
}

