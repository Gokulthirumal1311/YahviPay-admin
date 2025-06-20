import { Check, X } from 'lucide-react';
import React from 'react'

const SampleData = {
    name: 'Gokul',
    phone: '8667223194',
    category: 'Food & Dining',
    subCategory: 'Eating Places, Restaurants',
    businessType: 'Fixed',
    pincode: '600085',
    address: 'Srinivasa Nagar, Sholiganallur, Chennai, Tamil Nadu, 600096',
    latitude: '12.9555489',
    longitudes: '80.9555489',
}
const agents = [
    {
        name: "Gokul10",
        phoneNumber: "8667223194",
        password: "no",
    },
    {
        name: "Gokul11",
        phoneNumber: "8667223194",
        password: "yes",
    },
];

export const AgentDetails = () => {

    return (
        <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Agent Details
                </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agents.map((agent, index) => (
                    <div
                        key={index}
                        className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                    >
                        <div className="mb-6">
                            <span className="text-sm font-medium text-gray-600 block">
                                Agent
                            </span>
                            <span
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                            >
                                Agent Details
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">
                                    Name
                                </span>
                                <span className="text-gray-800 font-semibold">
                                    {agent.name}
                                </span>
                            </div>

                            <div>
                                <span className="text-sm font-medium text-gray-600 block">
                                    Phone Number
                                </span>
                                <span>{agent.phoneNumber}</span>
                            </div>

                            <div>
                                <span className="text-sm font-medium text-gray-600 block">
                                    Password
                                </span>
                                <span>{agent.password}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}