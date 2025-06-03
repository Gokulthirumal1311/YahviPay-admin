import React, { useState } from 'react';
import { Layout } from '../Layouts/Layout';

const pageContent = {
    title: "Get Services By ID",
    subTitle: "Leads Details from one place with LeadId",
    searchInputPlaceholderName: 'Enter the Lead ID'
};

const searchOptions = {
    "Agent": ["MKTG111001", "MKTG111002", "MKTG111003", "MKTG111004", "MKTG111005"],
    "Status": ["New", "Active", "Inactive", "Services", "Working", "Damaged", "Returned"],
    "Device ID": "input"
};

export const GetServicesByID = () => {
    const [searchType, setSearchType] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        setSelectedValue(''); // Reset second field
    };

    const renderSecondInput = () => {
        if (searchType === 'Device ID') {
            return (
                <input
                    type="text"
                    placeholder={pageContent.searchInputPlaceholderName}
                    className="border border-gray-400 rounded px-2 py-1"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                />
            );
        } else if (searchType && Array.isArray(searchOptions[searchType])) {
            return (
                <select
                    className="border border-gray-400 rounded px-2 py-1"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    <option value="">Select {searchType}</option>
                    {searchOptions[searchType].map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            );
        }
        return null;
    };

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <label className="text-base font-medium mb-1">Search by: </label>
                    <select
                        className="border border-gray-400 rounded px-2 py-1"
                        value={searchType}
                        onChange={handleSearchTypeChange}
                    >
                        <option value="">Select Option</option>
                        {Object.keys(searchOptions).map((key) => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-base font-medium mb-1">Value: </label>
                    {renderSecondInput()}
                </div>
            </div>
        </Layout>
    );
};
9