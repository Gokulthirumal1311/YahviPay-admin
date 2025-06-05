import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden shadow-lg shadow-blue-100/50 backdrop-blur-sm rounded-xl' >
        <div className = 'p-5 h-[85vh] flex flex-col'>

            { children }
        </div>
    </div>
  )
}