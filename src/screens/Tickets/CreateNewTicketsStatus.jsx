import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import CustomDropdown from '../../components/CustomDropDown';

const pageContent = {
    "title": "Create and Get New Tickets Status",
    "subTitle": "Settlement Records Organized by Action Type",
}

const parts = [
    {
        BusinessName: "Gokul",
        Type: 'Damage',
        Date: "16/05/2025, 16:45:56",
        Status: 'PENDING',
    },
];


const columns = ["BusinessName", "Type", "Date", "Status"];
const actions = [];

const searchByStatusList = [
    { label : "Assigned", value : "assigned" },
    { label : "Resolved", value : "resolved" }
]

const searchByAssignedList = [
    { label : "Support", value : "support" },
    { label : "Marketing", value : "marketing" }
]

export const CreateNewTicketsStatus = () => {

    const [ searchByStatus, setSearchByStatus ] = useState('');
    const [ searchByAssigned, setSearchByAssigned ] = useState('');

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <div className="mb-4 flex justify-between">       
                <div className='flex items-center gap-2'>
                    <label className="text-base font-medium mb-1">Search by status</label>
                    <CustomDropdown 
                        options={searchByStatusList} 
                        selected={searchByStatus} 
                        setSelected={setSearchByStatus} 
                    />
                    <label className="text-base font-medium mb-1">Search by Assigned To</label>
                    <CustomDropdown 
                        options={searchByAssignedList} 
                        selected={searchByAssigned} 
                        setSelected={setSearchByAssigned} 
                    />
                </div>
                <div>
                    <button className='bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700'>Create Ticket</button>
                </div>
            </div>
        </Layout>
    )
}