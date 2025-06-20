import React, { useEffect, useState } from 'react';

export const DoubleSearchBar = ({ placeholder1, placeholder2 }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [referenceId, setReferenceId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Phone: ${phoneNumber} | Reference ID: ${referenceId}`);
    };

    useEffect(() => {
        const storedMerchantDetail = JSON.parse(localStorage.getItem('merchant'));

        if (storedMerchantDetail) {

            setPhoneNumber(storedMerchantDetail.phoneNumber)

            setReferenceId(storedMerchantDetail.merchantId)
        }
    }, []);

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex items-center ">
                <div className="flex rounded-md w-full overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={placeholder1}
                        className="w-full px-4 py-2 text-md text-gray-900 border-[1px] rounded-tl-md rounded-bl-md font-semibold tracking-wider"
                    />

                    <input
                        type="text"
                        value={referenceId}
                        onChange={(e) => setReferenceId(e.target.value)}
                        placeholder={placeholder2}
                        className="w-full px-4 py-2 text-md text-gray-900 border-[1px] font-semibold tracking-wider"
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