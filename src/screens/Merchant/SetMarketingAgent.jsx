import React from 'react'

const primaryAgent = {
    name : "Gokul10",
    phoneNumber: "8667223194",
    merchantId: "MKTG111010",
}
const secondaryAgent = {
    name : "Gokul10",
    phoneNumber: "8667223194",
    merchantId: "MKTG111012",
}
export const SetMarketingAgent = () => {

    return (
        <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Set Marketing Agent
                </h2>
            </div>
                
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                    <div className="mb-6">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Primary Agent
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Name
                            </span>
                            <span className="text-gray-800 font-semibold">
                                {primaryAgent.name}
                            </span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Merchant ID
                            </span>
                            <span>{primaryAgent.merchantId}</span>
                        </div>
                           
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Phone Number
                            </span>
                            <span>{primaryAgent.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>

                <div
                    className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                    <div className="mb-6">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Secondary Agent
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Name
                            </span>
                            <span className="text-gray-800 font-semibold">
                                {secondaryAgent.name}
                            </span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Merchant ID
                            </span>
                            <span>{secondaryAgent.merchantId}</span>
                        </div>
                           
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Phone Number
                            </span>
                            <span>{secondaryAgent.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
            </div>
                        
            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}
                    
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
        </div>        
    )
}
