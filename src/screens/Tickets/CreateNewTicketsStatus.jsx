import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import CustomDropdown from '../../components/CustomDropDown/CustomDropDown';
import ReusableComponent from '../../components/TableComponent/ReusableComponent';
import { NoDataFound } from '../../components/NoDataFound/NoDataFound';

const pageContent = {
    "title": "Create and Get New Tickets Status",
    "subTitle": "Create new support tickets and view existing ticket enquiries by status and Assigned.",
    "noDataFoundTitle" : "No Ticket Found",
    "noDataFoundDescription" : "There are currently no tickets matching found. Please check back later."
}

const parts = [
    {
        BusinessName: "Gokul",
        Type: 'Damage',
        Date: "16/05/2025, 16:45:56",
        Status: 'PENDING',
    },
    {
        BusinessName: "Gokul",
        Type: 'Damage',
        Date: "16/05/2025, 16:45:56",
        Status: 'PENDING',
    }
];


const columns = ["BusinessName", "Type", "Date", "Status"];
const actions = [];

const searchByStatusList = [
    { label: "Assigned", value: "assigned" },
    { label: "Resolved", value: "resolved" }
]

const searchByAssignedList = [
    { label: "Support", value: "support" },
    { label: "Marketing", value: "marketing" }
]

export const CreateNewTicketsStatus = () => {

    const [searchByStatus, setSearchByStatus] = useState('');
    const [searchByAssigned, setSearchByAssigned] = useState('');

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <div className='overflow-y-auto custom-scroll'>


                <div className="mb-4 flex justify-between items-end">
                    <div className='flex items-center gap-2'>
                        <div className='flex flex-col'>
                            <label className="text-base font-medium mb-1">Search by Status</label>
                            <CustomDropdown
                                options={searchByStatusList}
                                selected={searchByStatus}
                                setSelected={setSearchByStatus}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className="text-base font-medium mb-1">Search by Assigned To</label>
                            <CustomDropdown
                                options={searchByAssignedList}
                                selected={searchByAssigned}
                                setSelected={setSearchByAssigned}
                            />
                        </div>
                    </div>
                    <div>
                        <button className='button-submit-color button-design'>Create Ticket</button>
                    </div>
                </div>
                {parts.length ? (
                    <ReusableComponent
                        title="Get Tickets By Phone"
                        columns={columns}
                        data={parts}
                        actions={actions}
                    />
                )
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        <NoDataFound
                            title={pageContent.noDataFoundTitle}
                            description={pageContent.noDataFoundDescription}
                        />
                    </div>
                }
            </div>
        </Layout>
    )
}