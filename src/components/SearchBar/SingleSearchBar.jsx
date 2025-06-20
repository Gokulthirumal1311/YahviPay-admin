import React, { useState } from 'react';


const SingleSearchBar = ({ placeholderName, value, onChange, onSearchClick }) => {



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
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder={placeholderName}
                            className="w-full px-4 py-2 text-md text-gray-900 rounded-tl-md rounded-bl-md font-semibold tracking-wider"
                        />
                        <button
                            type="submit"
                            className="px-5 text-sm font-medium button-submit-color"
                            onClick={() => onSearchClick()}
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
