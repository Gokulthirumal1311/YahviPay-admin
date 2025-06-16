import React, { useState } from 'react'
import { Layout } from './Layouts/Layout'
import ReusableComponent from '../../components/ReusableComponent';
import { DatePicker } from '../../components/DatePicker';
import SingleSearchBar from '../../components/SingleSearchBar';
import { DoubleSearchBar } from '../../components/DoubleSearchBar';
import CustomDropdown from '../../components/CustomDropDown';

const pageContent = {
    "title": "Get Transaction Details",
    "subTitle": "Leads Details from one place with LeadId",
    "transactionIdInputPlaceholderName": 'Enter the Transaction ID',
    "busniessVpaSearchInputPlaceholderName": "Enter the Business VPA",
}

const devices = [
    {
        transactionDate: "16/05/2025, 16:45:56",
        customerName: "Gokul",
        Amount: "10000",
    },
    {
        transactionDate: "27/05/2025, 16:32:00",
        customerName: "Mathes",
        Amount: "20000",
    },
];

const searchByStatusList = [
    { label: "SUCCESS", value: "SUCCESS" },
    { label: "INPROGRESS", value: "INPROGRESS" },
]


export const TransactionDetails = () => {

    const columns = ["transactionDate", "customerName", "Amount"];
    const actions = [];
    const [ searchByStatus, setSearchByStatus ] = useState('');

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className='flex gap-3 items-end'>
                <DatePicker />
                {/* <SingleSearchBar placeholderName={pageContent.singleSearchInputPlaceholderName} /> */}
                <div className='flex flex-col'>
                    <label className="text-base font-medium mb-1">Search by status </label>
                    {/* <select className="border border-gray-300 rounded px-2 py-1.5">
                        <option>SUCCESS</option>
                        <option>INPROGRESS</option>
                    </select> */}
                    <CustomDropdown                         
                        options={searchByStatusList}
                        selected={searchByStatus}
                        setSelected={setSearchByStatus}
                    />
                </div>
                <SingleSearchBar placeholderName={pageContent.busniessVpaSearchInputPlaceholderName} />
            </div>

            <div className='my-4'>
                {/* <DoubleSearchBar placeholder1={pageContent.doubleSearchInputPlaceholderName1} placeholder2={pageContent.doubleSearchInputPlaceholderName2} /> */}
                <SingleSearchBar placeholderName={pageContent.transactionIdInputPlaceholderName} />
            </div>
            <div>
                <ReusableComponent
                    title="Transaction Details"
                    columns={columns}
                    data={devices}
                    actions={actions}
                />

            </div>
        </Layout>
    )
}
