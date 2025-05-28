import React, { useState } from 'react';


const SingleSearchBar = ({ placeholderName }) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
    };
    return (
        <div className="">
        <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="Search" className="block w-full">
            <div className="flex w-full rounded-md overflow-hidden border border-gray-300 shadow-sm">
                <input
                    type="text"
                    id="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={placeholderName}
                    className=" bg-white w-full px-4 py-2 text-sm text-gray-900 rounded-tl-md rounded-bl-md"
                />
                <button
                    type="submit"
                    className="px-5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </div>
            </label>
        </form>
        </div>
    );
};


export default SingleSearchBar;
