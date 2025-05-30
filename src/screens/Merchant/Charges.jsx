import React from 'react'

export const Charges = () => {
    return (
        <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Charges Details
                </h2>
            </div>

                
            <div className="flex justify-between items-center mb-5 ">
                    <h2 className="text-xl font-semibold">
                        Charges : 
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </div>
                        
            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}
                    
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
        </div>  
    )
}
