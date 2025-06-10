import React, { useEffect, useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

const pageContent = {
    "title": "All Merchant Account By Phone Number",
    "subTitle": "Search all Merchant from one place with phone number"
}
const SampleData = {
    name: 'Gokul',
    phone: '8667223194',
    email: 'gokulthirumal13@gmail.com',
    dob: '2002-11-13',
    address: 'Thirumalai nagar, Perungudi, Chennai.',
    merchantId: 'MC1747288873705'
}

export const UserDetails = () => {

    const [userData, setUserData] = useState(SampleData);
    const [formData, setFormData] = useState(SampleData);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmitEditUserDetails = (e) => {
        e.preventDefault();
       
    };

    function EditUserDialog(formData, handleChange, handleSubmitEditUserDetails) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all">
                        Edit User
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Edit User Details</DialogTitle>
                        <DialogDescription>
                            Update the information for the selected user below.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmitEditUserDetails} className="space-y-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <DialogFooter className="mt-4 flex justify-end gap-2">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition-all"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md transition-all"
                            >
                                Save Changes
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <div className="relative group bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    User Details
                </h2>
                {EditUserDialog(formData, handleChange, handleSubmitEditUserDetails)}
            </div>

            <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {userData.name}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {userData.phone}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {userData.dob}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {userData.address}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {userData.merchantId}
                        </div>
                    </div>
                </div>
            </div>

            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}

        </div>
    )
}