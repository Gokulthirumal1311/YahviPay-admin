import React from 'react'
import { Link } from 'react-router-dom'
const stores = [
  {
    address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
    businessVPA: "rena.9943310704@kvb",
    latitude: "12.955591",
    longitude: "80.247504",
    merchantId: "MC1747298937542",
    shopName: "Gokul2",
    shopPhone: "8667223194"
  },
  {
    address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
    businessVPA: "rena.9943310704@kvb",
    latitude: "12.955591",
    longitude: "80.247504",
    merchantId: "MC1747298937542",
    shopName: "Gokul2",
    shopPhone: "8667223194"
  },
  {
    address: "Srinivasa Nagar, Sholinganallur, Chennai, Tamil Nadu, 600096",
    businessVPA: "rena.9943310704@kvb",
    latitude: "12.955591",
    longitude: "80.247504",
    merchantId: "MC1747298937542",
    shopName: "Gokul2",
    shopPhone: "8667223194"
  },
]

export const SearchShopCard = () => {
    return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stores.map((store) => (
        <div
          key={store.shopPhone}
          className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 block"></span>
      
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >


              {store.shopName}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">


            <div>
              <span className="text-sm font-medium text-gray-600 block">Business VPA</span>
              <span>{store.businessVPA}</span >
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600 block">Shop Phone</span>
              <Link className="text-blue-500 font-semibold" to={``}>{store.shopPhone}</Link >
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">Latitude</span>
              <span>{store.latitude}</span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">Longitude</span>
              <span>{store.longitude}</span>
            </div>

            

            <div>
              <span className="text-sm font-medium text-gray-600 block">Address</span>
              <span>{store.address}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      ))}
    </div>
  )
}
