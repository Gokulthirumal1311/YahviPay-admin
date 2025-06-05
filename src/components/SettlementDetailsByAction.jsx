import React, { useState } from 'react'

import ReusableComponent from './ReusableComponent'
import { DatePicker } from './DatePicker'
import CustomDropdown from './CustomDropDown'
import { Layout } from './Layout'


const pageContent = {
  title: "All Settlements By Action",
  subTitle: "Settlement Records Organized by Action Type",
  searchInputPlaceholderName: 'Enter the Merchant ID'
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
    settledBy: "system",
  },
]

export const SettlementDetailsByAction = () => {
  const [showCards, setShowCards] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState(null)
  const columns = ["amountSettled", "businessVPA", "settledBy"];
  const actions = [];

  return (
    <Layout>
      <div>
        <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
        <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
      </div>

      <div className='flex-1 overflow-y-auto mt-4'>
        <div>
          <div className="flex items-end gap-3 mb-8">
            <DatePicker/>

            <div className='flex flex-col'>
              <label className="text-base font-medium mb-1">Search by status</label>
              < CustomDropdown     selected={selectedStatus} setSelected={setSelectedStatus} />
            </div>

            <button
              onClick={() => setShowCards(true)}
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              search
            </button>
          </div>

          {showCards && (
            <ReusableComponent
              title="Settlement Summary By Status"
              columns={columns}
              data={settlements}
              actions={actions}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}
