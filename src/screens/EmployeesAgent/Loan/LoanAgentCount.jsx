import React, { useEffect, useState } from 'react'
import SingleSearchBar from '../../../components/SingleSearchBar'
import AgentTable from '../../../components/AgentTable'
import { Layout } from '../Layout/Layout';
import { NoDataFound } from '../../../components/NoDataFound';

const pageContent = {
    "title": "Loan Agent Count",

    "subTitle": "View the total number of loans processed by the selected Agent ID within the specified date range.",
    "searchInputPlaceholderName": "Enter the Marketing ID",
    "noDataFoundDescription" : "No loans found for the chosen Agent ID within the specified period. Please adjust the dates or agent ID."
}

const deviceData = [
    {
        deviceId: "D001",
        agentId: "MKTG111012",
        registeredDate: "20-05-2025",
    },
    {
        deviceId: "D002",
        agentId: "MKTG111010",
        registeredDate: "22-05-2025",
    },
    {
        deviceId: "D003",
        agentId: "MKTG111013",
        registeredDate: "24-05-2025",
    },
    {
        deviceId: "D004",
        agentId: "MKTG111016",
        registeredDate: "26-05-2025",
    },
    {
        deviceId: "D005",
        agentId: "MKTG111015",
        registeredDate: "28-05-2025",
    },
];

export const LoanAgentCount = () => {

    const [agentId, setAgentId] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [deviceCount, setDeviceCount] = useState(0);
    const [searched, setSearched] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();


        const count = deviceData.reduce((acc, device) => {
            const [day, month, year] = device.registeredDate.split("-");
            const formattedDate = `${year}-${month}-${day}`;
            if (
                device.agentId === agentId &&
                formattedDate >= fromDate &&
                formattedDate <= toDate
            ) {
                return acc + 1;
            }
            return acc;
        }, 0);
        setDeviceCount(count);
        setSearched(true);
    };


    useEffect(() => {
        console.log(deviceCount);
    }, [deviceCount]);

    return (

        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            {/* <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName}/> */}

            <div className='flex-1 overflow-y-auto'>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <label className="text-md text-gray-800 font-medium mb-1">Agent Id</label>
                                <input
                                    type="text"
                                    value={agentId}
                                    onChange={(e) => setAgentId(e.target.value)}
                                    placeholder="Enter the Marketing ID"
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                                />
                            </div>


                            <div className="flex flex-col">
                                <label className="text-md text-gray-800 font-medium mb-1">From Date</label>
                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                                />
                            </div>


                            <div className="flex flex-col">
                                <label className="text-md text-gray-800 font-medium mb-1">To Date</label>
                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
                                />
                            </div>


                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    className="h-[38px] px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


                {searched ? (
                    <div className="bg-gray-100 mt-4 p-2 rounded-md">
                        {deviceCount > 0 ? (
                            <>
                                <span className="font-bold text-blue-700">Device Count :</span>
                                <span> {deviceCount}</span>
                            </>
                        ) : (
                            <span className="text-gray-600">No Data Found</span>
                        )}
                    </div>
                )
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        
                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>
                }


            </div>
        </Layout>


    )
}

