import React, { useEffect, useState } from 'react'
import { AccountSettingForm } from './AccountSettingForm'

const SampleData = {
  name: 'Gokul',
  phone: '8667223194',
  email: 'gokulthirumal13@gmail.com',
  dob: '2002-11-13',
  address: 'Thirumalai nagar, Perungudi, Chennai.',
  merchantId: 'MC1747288873705'
}

const Modal2 = () => {
  const [userData, setUserData] = useState(SampleData)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('userData')
    if (stored) {
      setUserData(JSON.parse(stored))
    }
  }, [])

  const handleSave = (updatedFields) => {
    const updated = { ...userData, ...updatedFields }
    localStorage.setItem('userData', JSON.stringify(updated))
    setUserData(updated)
    setIsModalOpen(false)
  }

  const handleEdit = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="flex items-center justify-center p-6 font-[Montserrat] bg-gray-50 min-h-screen">
      <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">USER DETAILS</h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(userData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                {value}
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <AccountSettingForm
            onClose={() => setIsModalOpen(false)}
            userData={userData}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  )
}

export default Modal2
