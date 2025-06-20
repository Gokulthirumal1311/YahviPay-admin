import React, { useState } from 'react';
import { Layout } from '../Layouts/Layout';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { NoDataFound } from '../../../components/NoDataFound/NoDataFound';
import SingleSearchBar from '../../../components/SearchBar/SingleSearchBar';

const pageContent = {
    title: "Get Services By ID",
    subTitle: "Filter and retrieve device service records by Agent ID, Device ID, or Status",
    searchInputPlaceholderName: 'Enter the Lead ID',
    noDataFoundDescription: "No service records found for the selected filters."
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

    const handleSearchDeviceId = () => {

    }

    const renderSecondInput = () => {
        if (searchType === 'Device ID') {
            return (
                // <input
                //     type="text"
                //     placeholder={pageContent.searchInputPlaceholderName}
                //     className="border border-gray-400 rounded px-2 py-1"
                //     value={selectedValue}
                //     onChange={(e) => setSelectedValue(e.target.value)}
                // />
                <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} value={selectedValue} onChange={setSelectedValue} onSearchClick={handleSearchDeviceId} />
            );
        } else if (searchType && Array.isArray(searchOptions[searchType])) {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="inline-flex items-center justify-between w-52 rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200 focus:ring-offset-2"
                        >
                            {selectedValue || `Select ${searchType}`}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-52 bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                        align="start"
                    >
                        {searchOptions[searchType].map((option) => (
                            <DropdownMenuItem
                                key={option}
                                onClick={() => setSelectedValue(option)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                {option}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
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
                <div className='flex flex-col gap-2'>
                    <label className="text-base font-medium mb-1">Search by</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="inline-flex items-center justify-between w-52 rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200 focus:ring-offset-2"
                            >
                                {searchType || 'Select Option'}
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-52 bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                            align="start"
                        >
                            {Object.keys(searchOptions).map((option) => (
                                <DropdownMenuItem
                                    key={option}
                                    onClick={() => {
                                        handleSearchTypeChange({ target: { value: option } });
                                        setSelectedValue(""); // Reset selected value when type changes
                                    }}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    {option}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {searchType ? 
                    <div className='flex flex-col gap-1'>
                        <label className="text-base font-medium mb-1">Value</label>
                        {renderSecondInput()}
                    </div>
                : ''}
            </div>
            <div>
                <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                    <NoDataFound description={pageContent.noDataFoundDescription} />
                </div>
            </div>
        </Layout>
    );
};
9