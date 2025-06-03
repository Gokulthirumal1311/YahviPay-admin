import React from 'react'
import SingleSearchBar from '../../components/SingleSearchBar'
import Cards from '../../components/Cards'

const pageContent = {
    "title" : "All Merchant Account By Phone Number",

    "subTitle" : "Search all Merchant from one place with phone number",
    "searchInputPlaceholderName" : 'Enter the Phone Number'
}

export const AllMerchantAccount = () => {
  return (
    <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden shadow-lg shadow-blue-100/50 backdrop-blur-sm rounded-xl' >
        <div className = 'p-5 h-[85vh] flex flex-col'>

            <div>
                <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName} />
            <div className = 'flex-1 overflow-y-auto mt-4'>
                
                <Cards />
            </div>

        </div>
    </div>
  )
}
