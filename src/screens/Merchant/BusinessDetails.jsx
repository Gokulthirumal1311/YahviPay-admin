import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

const SampleData = {
    name: 'Gokul',
    phone: '8667223194',
    category: 'Food & Dining',

    subCategory: 'Eating Places, Restaurants',
    businessType: 'Fixed',
    pincode: '600085',
    address: 'Srinivasa Nagar, Sholiganallur, Chennai, Tamil Nadu, 600096',
    latitude: '12.9555489',
    longitudes: '80.9555489',
}


export const BusinessDetails = () => {

    const [businessData, setBusinessData] = useState(SampleData);
    const [formData, setFormData] = useState(SampleData);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmitEditBusiness = (e) => {
        e.preventDefault();
        setBusinessData(formData);
    };

    const editBusinessDetails = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Edit
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit Business Details</DialogTitle>
                        <DialogDescription>
                            Modify business information below and click "Save Changes".
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmitEditBusiness} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: "Name", name: "name", type: "text" },
                                { label: "Phone", name: "phone", type: "text" },
                                { label: "Category", name: "category", type: "text" },
                                { label: "Sub Category", name: "subCategory", type: "text" },
                                { label: "Business Type", name: "businessType", type: "text" },
                                { label: "Pincode", name: "pincode", type: "text" },
                                { label: "Address", name: "address", type: "text" },
                                { label: "Latitude", name: "latitude", type: "text" },
                                { label: "Longitude", name: "longitudes", type: "text" }
                            ].map((field) => (
                                <div key={field.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            ))}
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
        )
    }
    return (
        <div className="group bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Business Details
                </h2>
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                    Edit
                </button> */}
                {editBusinessDetails()}
            </div>

            <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.name}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.phone}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.category}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.subCategory}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.businessType}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.pincode}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.address}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.latitude}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                            {SampleData.longitudes}
                        </div>
                    </div>
                </div>
            </div>

            {/* {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} userData={userData} onSave={handleSave} />} */}

            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
        </div>
    )
}
