import React from 'react'
import SingleSearchBar from '../../components/SingleSearchBar'
import Cards from '../../components/Cards'
import { NoDataFound } from '../../components/NoDataFound'

const pageContent = {
    "title": "All Merchant Account By Phone Number",

    "subTitle": "View all merchant accounts or search by phone number to find a specific merchant.",
    "searchInputPlaceholderName": 'Enter the Phone Number',
    "noDataFoundDescription" : "No merchant account found for the provided phone number."
}
const stores = [
    {
        storeName: 'Gokul',
        phoneNumber: '8667223194',
        merchantId: 'MC1747288873705',
    },
    {
        storeName: 'Mathes',
        phoneNumber: '9566223194',
        merchantId: 'MC1747288873710',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
    {
        storeName: 'Mani',
        phoneNumber: '7896223194',
        merchantId: 'MC1747288873720',
    },
]
export const AllMerchantAccount = () => {
    return (
        <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden shadow-lg shadow-blue-100/50 backdrop-blur-sm rounded-xl' >
            <div className='p-5 h-[85vh] flex flex-col'>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} />
                {stores.length ?
                    <div className='flex-1 overflow-y-auto mt-4'>
                        <Cards stores={stores} />
                    </div>
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>
                }
        </div>
        </div>
    )
}
