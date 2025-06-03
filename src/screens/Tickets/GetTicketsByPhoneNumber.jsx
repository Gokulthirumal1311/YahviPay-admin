import React from "react";
import ReusableComponent from "../../components/ReusableComponent";
import { Layout } from "./Layout/Layout";
import { DoubleSearchBar } from "../../components/DoubleSearchBar";

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
export default function GetTicketsByPhoneNumber() {

    return (

        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className="mb-4 flex justify-between">

                <DoubleSearchBar placeholder1={pageContent.doubleInputPlaceholderName1} placeholder2={pageContent.doubleInputPlaceholderName2} />
                <div className='flex items-center gap-2'>

                    <label className="text-base font-medium mb-1">Search by status </label>
                    <select className="border border-gray-400 rounded px-2 py-1">
                        <option>CUSTOMER</option>
                        <option>SYSTEM</option>
                    </select>

                </div>
            </div>

            <ReusableComponent
                title="Get Tickets By Phone"
                columns={columns}
                data={parts}
                actions={actions}
            />

        </Layout>

    );
}
