import React from 'react'

export const GetImageLink = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-3">
        <input type="file" className="border border-gray-300 px-2 py-1 rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get link</button>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-10 flex items-center justify-center min-h-[200px]">
        <p className="text-gray-600 text-lg">No data found</p>
      </div>
    </div>
  );

}
