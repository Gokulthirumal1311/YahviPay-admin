import React from 'react'
import { Layout } from './Layouts/Layout'
import ReusableComponent from '../../components/ReusableComponent';
import { RefreshCw } from 'lucide-react';
import SingleSearchBar from '../../components/SingleSearchBar';
import { DoubleSearchBar } from '../../components/DoubleSearchBar';
import { DatePicker } from '../../components/DatePicker';

const pageContent = {
    "title": "Download Report",

    "subTitle": "Search all Merchant from one place with phone number",
    "doubleSearchInputPlaceholderName1": 'Enter the Phone Number ID',
    "doubleSearchInputPlaceholderName2": 'Enter the Merchant ID',
    "busniessVpaSearchInputPlaceholderName": "Enter the Business VPA",
}

const columns = ["DownloadID", "CreatedDate", "StartDate", "EndDate", "StatusLink"];
const actions = [];
const devices = [
    {
        DownloadID: "D1748519507715319813",
        CreatedDate: "29/05/2025, 17:21:47",
        StartDate: "28/05/2025, 05:30:00",
        EndDate: "29/05/2025, 05:29:59",
        StatusLink: <RefreshCw className="animate-spin text-yellow-400 w-5 h-5" />,
    },
    {
        DownloadID: "D1748519507715319814",
        CreatedDate: "25/05/2025, 17:21:47",
        StartDate: "24/05/2025, 05:30:00",
        EndDate: "25/05/2025, 05:29:59",
        StatusLink: <RefreshCw className="animate-spin text-yellow-400 w-5 h-5" />,
    },
];


export const DownloadReport = () => {
    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>


            <div className='flex gap-3 items-end'>
                <DatePicker />

                <SingleSearchBar placeholderName = {pageContent.busniessVpaSearchInputPlaceholderName} />
            </div>

            <div className='my-4'>
                
                <DoubleSearchBar placeholder1={pageContent.doubleSearchInputPlaceholderName1} placeholder2={pageContent.doubleSearchInputPlaceholderName2} />
                
            </div>

            <div>
                <ReusableComponent
                    title="Download Report"
                    columns={columns}
                    data={devices}
                    actions={actions}
                />
            </div>
        </Layout>
    );

}