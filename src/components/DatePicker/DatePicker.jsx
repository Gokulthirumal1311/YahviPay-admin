import React from 'react'

export const DatePicker = ({ fromDate, setFromDate, toDate, setToDate }) => {

    return (
        <div className="flex gap-4">
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
        </div>
    )
}
