import React, { useEffect, useState } from 'react';

export const DoubleSearchBar = ({ placeholder1, placeholder2 }) => {

    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ referenceId, setReferenceId ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Phone: ${phoneNumber} | Reference ID: ${referenceId}`);
    };
    useEffect(() => {
        const storedMerchantDetail = JSON.parse(localStorage.getItem('merchant'));

        setPhoneNumber(storedMerchantDetail.phoneNumber)

        setReferenceId(storedMerchantDetail.merchantId)
    }, []);

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full">       
                <div className="flex w-full overflow-hidden rounded-md gap-2">
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={placeholder1}
                        className="flex-1 px-4 py-2 text-sm text-gray-900 border-[1px] border-gray-500 rounded-md"
                    />

                    <input
                        type="text"
                        value={referenceId}
                        onChange={(e) => setReferenceId(e.target.value)}
                        placeholder={placeholder2}
                        className="flex-1 px-4 py-2 text-sm text-gray-900 border-[1px] border-gray-500 rounded-md"
                    />

                    <button
                        type="submit"
                        className="px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 "
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};