import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import { ChevronDown, ChevronUp } from "lucide-react";
import ReusableComponent from '../../components/TableComponent/ReusableComponent';
import { DatePicker } from '../../components/DatePicker/DatePicker';
import { DoubleSearchBar } from '../../components/SearchBar/DoubleSearchBar';
import { NoDataFound } from '../../components/NoDataFound/NoDataFound';

const pageContent = {
    "title": "All Settlements By Phone Number",
    "subTitle": "View and manage settlements organized by specific phone numbers.",
    "searchInputPlaceholderName": 'Enter the Merchant ID',
    "noDataFoundTitle": "No Data Found",
    "noDataFoundDescription": "We couldn’t find any settlements matching the entered phone number, merchant ID, or selected date range. Please review the filters and try again.",
}

const settlements = [
    {
        phoneNumber: "8667223194",
        settlementID: "1747631926224160996",
        dateSettled: "21/05/2025, 11:43:53",
        amountSettled: "200.00",
    },
    {
        phoneNumber: "8667223194",
        settlementID: "1747631926224160997",
        dateSettled: "22/05/2025, 10:43:34",
        amountSettled: "100.00",
    },
    {
        phoneNumber: "9080355312",
        settlementID: "1747631926224160998",
        dateSettled: "23/05/2025, 11:49:50",
        amountSettled: "200.00",
    },
];

export const SettlementsByPhoneNumber = () => {

    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [showCards, setShowCards] = useState(false);

    const columns = ["settlementID", "dateSettled", "amountSettled"];
    const actions = ['Details'];

    const handleSearch = () => {
        const filtered = settlements.filter((item) =>
            item.phoneNumber.includes(searchValue)
        );
        setFilteredData(filtered);
        setShowCards(true);
    };

    return (
        <Layout>

            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <div className='flex-1 overflow-y-auto mt-1'>

                <div className="">
                    <div className="flex items-center gap-3 mb-8">
                        <DatePicker />
                        <div className='w-full'>
                            <div className='text-md text-gray-800 font-medium mb-1'>Search Settlements Details</div>
                            <DoubleSearchBar />
                        </div>
                    </div>
                    {showCards ? (
                        <ReusableComponent
                            title={`Summary Details for Phone Number`}
                            columns={columns}
                            data={filteredData}
                            actions={actions}
                        />
                    ) :
                        <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                            <NoDataFound
                                title={pageContent.noDataFoundTitle}
                                description={pageContent.noDataFoundDescription}
                            />
                        </div>
                    }

                </div>
            </div>
        </Layout>
    )
}
