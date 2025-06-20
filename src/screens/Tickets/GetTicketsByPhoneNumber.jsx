import React, { useState } from "react";
import ReusableComponent from "../../components/TableComponent/ReusableComponent";
import { Layout } from "./Layout/Layout";
import { DoubleSearchBar } from "../../components/SearchBar/DoubleSearchBar";
import CustomDropdown from "../../components/CustomDropDown/CustomDropDown";

const pageContent = {
    "title": "Get Tickets By Phoner Number",
    "subTitle": "Settlement Records Organized by Action Type",
    "doubleInputPlaceholderName1": 'Enter the Phone Number',
    "doubleInputPlaceholderName2": "Enter the Merchant ID"
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
    { label: "Customer", value: "customer" },
    { label: "Suuport", value: "support" }
]

export default function GetTicketsByPhoneNumber() {

    const [searchByStatus, setSearchByStatus] = useState('');

    return (

        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <div className="overflow-y-auto custom-scroll">
                <div className="mb-4 flex justify-between items-end">
                    <div className="flex flex-col">
                        <label className="text-base font-medium mb-1">Enter the PhoneNumber and Merchant ID</label>
                        <DoubleSearchBar placeholder1={pageContent.doubleInputPlaceholderName1} placeholder2={pageContent.doubleInputPlaceholderName2} />
                    </div>
                    <div className='flex flex-col '>
                        <label className="text-base font-medium mb-1">Search by status</label>
                        <CustomDropdown
                            options={searchByStatusList}
                            selected={searchByStatus}
                            setSelected={setSearchByStatus}
                        />
                    </div>
                </div>

                <ReusableComponent
                    title="Get Tickets By Phone"
                    columns={columns}
                    data={parts}
                    actions={actions}
                />
            </div>
        </Layout>
    );
}