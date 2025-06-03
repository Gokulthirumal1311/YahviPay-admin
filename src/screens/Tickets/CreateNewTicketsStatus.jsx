import React from 'react'
import { Layout } from './Layout/Layout'


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

export const CreateNewTicketsStatus = () => {
    return (
        <Layout>

            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className="mb-4 flex justify-between">

        
                <div className='flex items-center gap-2'>
                    <label className="text-base font-medium mb-1">Search by status : </label>
                    <select className="border border-gray-400 rounded px-2 py-1">
                        <option>Assigned</option>
                        <option>Resolved</option>
                    </select>
                    <label className="text-base font-medium mb-1">Search by Assigned To : </label>
                    <select className="border border-gray-400 rounded px-2 py-1">
                        <option>Support</option>
                        <option>Marketing</option>
                    </select>

                </div>
                <div>

                    <button className='bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700'>Create Ticket</button>
                </div>
            </div>

        </Layout>
    )
}
