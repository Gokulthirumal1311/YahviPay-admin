import React from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import AgentTable from '../../../components/AgentTable'

const pageContent = {
    "title" : "Get All Agents Account",

    "subTitle" : "Search all Agents from one place with AgentID",
    "searchInputPlaceholderName" :  "Enter the Agent ID"
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


export const GetAllAgents = () => {
    return (
        <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden rounded-xl' >
        <div className = 'p-5 h-[85vh] flex flex-col'>

            <div>
                <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName}/>
            <div className = 'flex-1 overflow-y-auto mt-6'>
                

                <AgentTable />

            </div>

        </div>
    </div>

        
    )
}
