import React from 'react'
import { Link } from 'react-router-dom'
import { User, Users } from 'lucide-react'

export const LeadCards = ({ stores }) => {

    const backgroundColorByStatus = (status) => {

        if(status.toLowerCase().trim() === 'active') {
            return 'bg-emerald-200 bg-emerald-100/60 text-emerald-700 rounded-2xl'
        }
        else {
            return 'bg-red-200 bg-red-100/60 text-red-700 rounded-2xl '
        }
    }
    const changeFirstCharacterUpperCase = (status) => {

        return status.charAt(0).toUpperCase() + status.slice(1)
    }
    const createDotColor = (status) => {
        if(status.toLowerCase().trim() === 'active') {

            return 'bg-emerald-700 bg-emerald-100/60 rounded-full'
        }
        else {
            return 'bg-red-700 bg-emerald-100/60 rounded-full'
        }
    }

    const handleStoreInLocalStorage = (leadId) => {
        localStorage.setItem('leadId', JSON.stringify({ leadId : leadId }))
    }
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stores.map((store) => (
                    <div
                        key={store.LeadId}
                        className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0 text-white'>
                                <User/>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead ID</span>
                                <Link className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                    onClick={() => handleStoreInLocalStorage(store.LeadId)}
                                    to={'/LeadsDetails'}
                                >
                                    {store.LeadId}
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead Name</span>
                                <span className="text-gray-800 font-semibold">{store.LeadName}</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead Email</span>
                                <span>{store.LeadEmail}</span>
                            </div>

                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Phone Number</span>
                                <span>{store.PhoneNumber}</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Status</span>
                                <span className = {`inline-flex items-center px-3 rounded-md gap-x-2 ${backgroundColorByStatus(store.Status)}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${createDotColor(store.Status)}`}></span>
                                    <span>{changeFirstCharacterUpperCase(store.Status)}</span>
                                </span>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
