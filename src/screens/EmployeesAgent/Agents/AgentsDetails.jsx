import React from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'

const pageContent = {
    "title" : "Get Agents Details",

    "subTitle" : "Agents Details from one place with AgentID",
    "searchInputPlaceholderName" : "Enter the Agent ID"
}

const SampleData = {
    agentName: 'User010',
    
    agentPhone: '8667223194',
    
    agentEmail: 'gokulthirumal13@gmail.com',

    agentRegisteredDate: '2002-11-13',
    agentType: 'marketing',
    agentId: 'MKTG111010',
    agentStatus : 'active',
    agentAssignedArea : 'Velachery',
    agentAssignedLead : "MKTG111005",
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


export const AgentsDetails = () => {
    
    return (
        <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden rounded-xl' >
        <div className = 'p-5 h-[85vh] flex flex-col'>

            <div>
                <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName} />
            <div className = 'flex-1 overflow-y-auto mt-6'>
                
                <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Agent ID</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentId}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Agent Name</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentName}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Agent Phone Number</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentPhone}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Agent E-mail</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentEmail}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Agent Type</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentType}
                            </div>
                        </div>                            
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Lead</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentAssignedLead}
                            </div>
                        </div>                            
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Registered on</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentRegisteredDate}
                            </div>
                        </div>                            
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentStatus}
                            </div>
                        </div>                            
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Area</label>
                            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                {SampleData.agentAssignedArea}
                            </div>
                        </div>                            
                    </div>
                </div>



            </div>

        </div>
    </div>

        
    )
}
