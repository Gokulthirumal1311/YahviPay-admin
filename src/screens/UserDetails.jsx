import React, { useEffect, useState } from 'react'
import SingleSearchBar from '../components/SingleSearchBar'
import { ModalForm } from '../components/ModalForm'
import Cards from '../components/Cards'

const pageContent = {
    "title" : "All Merchant Account By Phone Number",
    "subTitle" : "Search all Merchant from one place with phone number"
}
const SampleData = {
   name: 'Gokul',
  phone: '8667223194',
  email: 'gokulthirumal13@gmail.com',
  dob: '2002-11-13',
  address: 'Thirumalai nagar, Perungudi, Chennai.'
 
}

export const UserDetails = () => {
    
    const[userData,setUserData]=useState(SampleData);
    const [isModalOpen,setIsModalOpen]=useState(false);
    
    useEffect(()=>{
        const stored=localStorage.getItem('userData');
        if(stored){
        setUserData(JSON.parse(stored));
        }
    },[]);

    function handleSave(updatedFields){
        const updated = { ...userData, ...updatedFields };
        localStorage.setItem('userData', JSON.stringify(updated));
        setUserData(updated);
        setIsModalOpen(false);
    }
    const Format=(key) => {
        return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace('Dob', 'D.O.B')
    }
    const shouldAlignStart=(value) => {
        return typeof value === 'string' && value.length > 30
    }

    function handleEdit(){
            setIsModalOpen(true);
    }

    return (
    <div className='m-2 mr-0 bg-white relative bottom-0 overflow-hidden '>
        <div className = 'p-5 h-[85vh] flex flex-col'>
            <div>

                <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <SingleSearchBar />
            

                <div className="relative group bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-10 overflow-hidden">
            
                <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    User Details
                </h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5" onClick={handleEdit}>
                    Edit
                </button>
                </div>
            
                <div className="space-y-5">
                { Object.entries(userData).map(([key, value]) => (
                    <div
                    key={key}
                    className={`flex ${shouldAlignStart(value) ?'items-start' : 'items-center'}`}
                    >
                    <div className="w-24 flex-shrink-0">
                        <span className="text-sm font-bold text-gray-700">
                        {Format(key)}
                        </span>
                    </div>
                    <div className="flex-1">
                        <span className="text-gray-600">
                        {value}
                        </span>
                    </div>
                    </div>
                ))}
                </div>


                {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />}
            
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
        </div>
    </div>
  )
}
