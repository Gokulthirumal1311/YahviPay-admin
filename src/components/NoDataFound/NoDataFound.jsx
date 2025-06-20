import React from 'react';

export const NoDataFound = ({ title = 'No Data Found', description }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <div className="max-w-xs w-full mb-1">               
                <img
                    src="/no-data-found-pana.svg"
                    alt="No Data Found"
                    className="w-full object-contain"
                />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-900 mb-4">{description}</p>
        </div>
    );
};
