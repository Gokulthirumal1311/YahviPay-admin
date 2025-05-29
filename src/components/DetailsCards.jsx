import React from 'react'
import { Link } from 'react-router-dom'

const stores = [
  {
    LeadId: 'MKTG111005',
    LeadName: 'User005',
    LeadEmail: 'gokul13@gmail.com',
    PhoneNumber: '1234567891',
    Status: 'active'
  },
  {
    LeadId: 'MKTG111006',
    LeadName: 'User006',
    LeadEmail: 'user006@gmail.com',
    PhoneNumber: '9876543210',
    Status: 'inactive'
  },
  {
    LeadId: 'MKTG111007',
    LeadName: 'User007',
    LeadEmail: 'user007@gmail.com',
    PhoneNumber: '9988776655',
    Status: 'active'
  },
]

export const DetailsCards = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stores.map((store) => (
        <div
          key={store.LeadId}
          className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 block">Lead ID</span>
      
            <Link className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            
            to={`${store.LeadId}`}
            >


              {store.LeadId}
            </Link>
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
              <span>{store.Status}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      ))}
    </div>
  )
}
