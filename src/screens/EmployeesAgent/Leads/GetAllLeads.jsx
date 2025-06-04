import React from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import { LeadCards } from '../../../components/LeadCards'
import { Layout } from '../Layout/Layout'

const pageContent = {

    "title": "Get All Leads Account",
    "subTitle": "Get a complete overview of all lead accounts and manage their details in one place."
}

const stores = [
    {
        LeadId: 'MKTG111005',
        LeadName: 'User005',
        LeadEmail: 'gokul13@gmail.com',
        PhoneNumber: '1234567891',
        Status: 'active'
    },
    {
        LeadId: 'MKTG111006',
        LeadName: 'User006',
        LeadEmail: 'user006@gmail.com',
        PhoneNumber: '9876543210',
        Status: 'inactive'
    },
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
]


export const GetAllLeads = () => {
    return (
        <Layout>

            <div className='overflow-y-auto'>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <div className='flex-1 overflow-y-auto'>

                    <LeadCards stores={stores} />
                </div>
            </div>
        </Layout>

    )
}
