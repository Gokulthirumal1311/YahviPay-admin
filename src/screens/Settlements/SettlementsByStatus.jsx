import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import Cards from '../../components/Cards'
import ReusableComponent from '../../components/ReusableComponent';
import { DatePicker } from '../../components/DatePicker';


const pageContent = {
    "title" : "All Settlements By Status",

    "subTitle" : "View and manage settlements organized by specific phone numbers.",
    "searchInputPlaceholderName" : 'Enter the Merchant ID'
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
export const SettlementsByStatus = () => {

    const [showCards, setShowCards] = useState(false);
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
                        <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                        <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                    </div>

                    <div className = 'flex-1 overflow-y-auto mt-4'>
                        

                        <div className="">
                            <div className="flex items-end gap-3 mb-8 ">
                                <DatePicker />
                                <div className='flex flex-col'>
                                    <label className="text-base font-medium mb-1">Search by status </label>
                                    <select className="border border-gray-400 rounded px-2 py-1">
                                        <option>SUCCESS</option>
                                        <option>INPROGRESS</option>
                                    </select>
                                </div>
                                <button
                                    onClick={() => setShowCards(true)}
                                    className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                                >
                                    search
                                </button>
                            </div>
                            { showCards && (
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
                            )}
                            </div>
                    </div>
        </Layout>
    )
}

