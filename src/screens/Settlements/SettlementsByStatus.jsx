import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import ReusableComponent from '../../components/TableComponent/ReusableComponent';
import { DatePicker } from '../../components/DatePicker/DatePicker';
import CustomDropdown from '../../components/CustomDropDown/CustomDropDown';
import { NoDataFound } from '../../components/NoDataFound/NoDataFound';

const pageContent = {
    "title": "All Settlements By Status",
    "subTitle": "View and manage orders based on their current status.",
    "searchInputPlaceholderName": 'Enter the Merchant ID',
    "noDataFoundTitle": "No Data Found",
    "noDataFoundDescription": "We couldn't find any settlements matching your selected status and date range. Please check your filters and try again.",
}

const settlements = [
    {
        amountSettled: "1000000.00",
        dateSettled: "21/05/2025, 11:43:53",
        businessVPA: "rena.12345678@kvb",
        settledBy: "customer",
    },
    {
        amountSettled: "10000000.00",
        dateSettled: "21/05/2025, 11:41:58",
        businessVPA: "rena.12345678@kvb",
        settledBy: "customer",
    },
    {
        amountSettled: "1000000.00",
        dateSettled: "21/05/2025, 11:43:53",
        businessVPA: "rena.12345678@kvb",
        settledBy: "customer",
    },
];

const searchByStatusOptionsList = [
    { label: "Success", value: "success" },
    { label: "Inprogress", value: "inprogress" }
]

export const SettlementsByStatus = () => {

    const [showCards, setShowCards] = useState(false);
    const [searchByStatus, setSearchByStatus] = useState('');
    const columns = ["amountSettled", "dateSettled", "businessVPA", "settledBy"];
    const actions = [];

    function cal() {
        // let sums = 0;
        // for (let i = 0; i < settlements.length; i++) {
        //   sums += parseInt(settlements[i].amountSettled);
        // }
        // return sums;
        let amount = settlements.reduce(
            (acc, item) => acc + parseInt(item.amountSettled),
            0
        );
        return amount;
    }

    function count() {
        return settlements.length;
    }

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <div className='flex-1 overflow-y-auto mt-1'>
                <div className="">
                    <div className="flex items-end gap-3 mb-8 ">
                        <DatePicker />
                        <div className='flex flex-col'>
                            <label className="text-base font-medium mb-1">Search by status </label>
                            <CustomDropdown
                                options={searchByStatusOptionsList}
                                selected={searchByStatus}
                                setSelected={setSearchByStatus}
                            />
                        </div>
                        <button onClick={() => setShowCards(true)} className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
                            search
                        </button>
                    </div>
                    {showCards ? (
                        <>
                            <p className="font-normal text-lg flex justify-between">
                                <span className="">SUCCESSFULL TRANSACTION : <span className='font-bold'>{count()}</span> </span>
                                <span>TOTAL AMOUNT RECEIVED : <span className='font-bold'>Rs.{cal()}</span></span>
                            </p>
                            <ReusableComponent
                                title="Settlement Summary By Status"
                                columns={columns}
                                data={settlements}
                                actions={actions}
                            />
                        </>
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

