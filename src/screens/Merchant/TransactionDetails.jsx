import React from 'react'
import { Layout } from './Layouts/Layout'


const pageContent = {
    "title": "Get Transaction Details",

    "subTitle": "Leads Details from one place with LeadId",
    "searchInputPlaceholderName" : 'Enter the Lead ID'
}

export const TransactionDetails = () => {
    return (

        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div>
                
            </div>
        </Layout>
    )
}
