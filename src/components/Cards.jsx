import React from 'react'


const stores = [
  {
    storeName: 'Gokul',
    phoneNumber: '8667223194',
    merchantId: 'MC1747288873705',
  },
  {
    storeName: 'Mathes',
    phoneNumber: '9566223194',
    merchantId: 'MC1747288873710',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
  {
    storeName: 'Mani',
    phoneNumber: '7896223194',
    merchantId: 'MC1747288873720',
  },
]


const Cards = () => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stores.map((store, index) => (
        <div
          key={store.merchantId}
          className="relative group bg-gradient-to-br from-white  border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
        >
         
         
          {/* Store icon and name */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600 block">Store Name</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {store.storeName}
              </span>
            </div>
          </div>


          <div className="space-y-5">
            {/* Store Name
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <span className="text-sm font-medium text-gray-600 block">Store Name</span>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {store.storeName}
                </span>
              </div>
            </div> */}


            {/* Phone Number */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 block">Phone Number</span>
                <span className="text-gray-800 font-semibold">{store.phoneNumber}</span>
              </div>
            </div>


            {/* Merchant ID */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 block">Merchant ID</span>
                <a
                  href={`https://example.com/merchant/${store.merchantId}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200 inline-flex items-center space-x-1 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{store.merchantId}</span>
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      ))}
    </div>
  )
}


export default Cards;
