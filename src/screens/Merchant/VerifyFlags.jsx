import React, { useState } from 'react'
import { Layout } from './Layouts/Layout'
import { DoubleSearchBar } from '../../components/SearchBar/DoubleSearchBar'
import { Check, ChevronDown, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";

const pageContent = {
    "title": "Verify Flags",
    "subTitle": "Review flagged records and enable users to resubmit required information.",
    "searchInputPlaceholderNameForPhoneNumber": 'Enter the Phone Number',
    "searchInputPlaceholderNameForMerchantID": 'Enter the Merchant ID',

}
const stores = [
    {
        bankValid: "no",
        aadhaarValid: "no",
        panValid: "no",
        creditscore: "no",
        gst: 'yes',
        location: 'no',
        pan: 'no',
        user: 'yes',
        business: 'yes'
    }
];

const editVerifyFlags = [
    { label: 'Aadhaar', value: 'aadhaar' },
    { label: 'Bank', value: 'bank' },
    { label: 'Pan', value: 'pan' },
    { label: 'GST', value: 'gst' }
]

export const VerifyFlags = () => {

    const [selected, setSelected] = useState(null);
    
    const editVerifyFlagsDialog = () => (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                    Edit Flag
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Edit Flag</DialogTitle>
                    <DialogDescription>Select a flag from the dropdown</DialogDescription>
                </DialogHeader>

                <form className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                Selete Flag
                            </label>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-between w-52 rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200 focus:ring-offset-2"
                                    >
                                        Selete 
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    className="w-52 bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                                    align="start"
                                >
                                    {editVerifyFlags.map((option) => (
                                        <DropdownMenuItem
                                            key={option.value}
                                            onClick={() => handleSelect(option)}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <DialogFooter className="mt-4 flex justify-end gap-2">
                        <DialogClose asChild>
                            <button
                                type="button"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition"
                            >
                                Cancel
                            </button>
                        </DialogClose>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md transition"
                        >
                            Save Changes
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <DoubleSearchBar

                placeholder1={pageContent.searchInputPlaceholderNameForPhoneNumber}
                placeholder2={pageContent.searchInputPlaceholderNameForMerchantID}
            />
            <div className='flex-1 overflow-y-auto mt-4'>
                <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl">
                    <div
                        className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg overflow-hidden"
                    >
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">User Details Verified</h2>

                            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl">Edit</button> */}
                            {editVerifyFlagsDialog()}
                        </div>
                        <div className="mt-6 grid gap-8">
                            {stores.map((store, index) => (
                                <div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Aadhaar Verify
                                            </span>
                                            <span className={`font-bold ${store.creditscore === "yes"
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}>
                                                {store.aadhaarValid === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Bank Verify
                                            </span>
                                            <span className={`font-bold ${store.creditscore === "yes"
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}>{store.bankValid === "yes" ? <Check /> : <X />}</span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Business Verify
                                            </span>
                                            <span className={`font-bold ${store.business === "yes" ? "text-green-600" : "text-red-600"
                                                }`}
                                            >
                                                {store.business === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Creditscore
                                            </span>
                                            <span
                                                className={`font-bold ${store.creditscore === "yes"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                    }`}
                                            >
                                                {store.creditscore === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                GST
                                            </span>
                                            <span
                                                className={`font-bold ${store.gst === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.gst === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Location
                                            </span>
                                            <span
                                                className={`font-bold ${store.location === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.location === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                Pan
                                            </span>
                                            <span
                                                className={`font-bold ${store.panValid === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.panValid === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-600 block">
                                                User
                                            </span>
                                            <span
                                                className={`font-bold ${store.user === "yes" ? "text-green-600" : "text-red-600"
                                                    }`}
                                            >
                                                {store.user === "yes" ? <Check /> : <X />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
