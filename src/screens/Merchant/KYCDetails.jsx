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
export const KYCDetails = () => {

    return (
        <div className="relative group bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    KYC Details
                </h2>
            </div>
                    
            <div className="border-b-2 border-gray-300 pb-8">
                <div className="flex justify-between items-center mb-5 ">
                    <h2 className="text-2xl font-semibold">
                        Update Bank Details
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Holder Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.name}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Number</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.phone}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bank IFSC</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.category}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.subCategory}
                        </div>
                    </div>                           
                </div>
            </div>
            <div className="border-b-2 border-gray-300 pb-8">
                <div className="flex justify-between items-center my-5">
                    <h2 className="text-2xl font-semibold">
                        Update Aadhaar Details
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.name}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.phone}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar DOB</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.category}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Address</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.subCategory}
                        </div>
                    </div>                           
                </div>
            </div>
            <div className="border-b-2 border-gray-300 pb-8">
                <div className="flex justify-between items-center my-5">
                    <h2 className="text-2xl font-semibold">
                        Update PAN Details
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.name}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.phone}
                        </div>
                    </div>

                                          
                </div>
            </div>
            <div className="border-b-2 border-gray-300 pb-8">
                <div className="flex justify-between items-center my-5 ">
                    <h2 className="text-2xl font-semibold">
                        Update GST Details
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.phone}
                        </div>
                    </div>

                                      
                </div>
            </div>
                        
            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}
                    
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
        </div>        
    )
}
