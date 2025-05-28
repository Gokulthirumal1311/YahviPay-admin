import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import { LeadCards } from '../../../components/LeadCards'
import { LeadAccountSettingForm } from '../../../components/LeadAccountSettingForm'
import { AgentsAreas } from '../../../components/AgentsAreas'

const pageContent = {
    "title": "Get All Leads Details",

    "subTitle": "Leads Details from one place with LeadId",
    "searchInputPlaceholderName" : 'Enter the Lead ID'
}

const SampleData = {
    LeadId: "MKTG111005",
    LeadName: "User005",
    LeadEmail: "gokul13@gmail.com",
    PhoneNumber: "1234567891",
    RegisteredDate: "06/05/2025, 12:23:37",
    Status: "active",
};

export const LeadsDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleEdit = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden rounded-xl' >
            <div className='p-5 h-[85vh] overflow-y-auto flex flex-col'>

                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName}/>
                <div className='flex-1 mt-6'>
                    <div className=" ">

                        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full ">
                            <div className="flex justify-between items-center mb-6">
                                <div>

                                    <h2 className="text-2xl font-bold text-blue-600">Lead Details</h2>

                                </div>
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl"
                                    onClick={handleEdit}
                                >
                                    Edit Lead Deatil
                                </button>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {Object.entries(SampleData).map(([key, value]) => (
                                    <div key={key}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className='pt-8'>
                                <h2 className='text-2xl font-bold text-blue-600'>Agent's Assign Area</h2>
                                <AgentsAreas />
                                {isModalOpen && (
                                    
                                    <LeadAccountSettingForm
                                    onClose={() => setIsModalOpen(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
