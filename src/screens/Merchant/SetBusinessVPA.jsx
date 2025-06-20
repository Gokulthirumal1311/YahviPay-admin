import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const SetBusinessVPA = () => {

    const [selectedBank, setSelectedBank] = useState("");
    const [verifiedType, setVerifiedType] = useState("");

    const bankOptions = [
        { label: "ICICIBank", value: "ICICIBank" },
        { label: "YesBank", value: "YesBank" },
    ];

    const verifiedOptions = [
        { label: "Online", value: "online" },
        { label: "Offline", value: "offline" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Business VPA Settings:", {
            bankName: selectedBank,
            verifiedType,
        });
        // Place logic to save or send data to backend
    };

    const Dropdown = ({ label, value, options, onSelect }) => (
        <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="inline-flex items-center justify-between w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        {value ? options.find((o) => o.value === value)?.label : `Select ${label}`}
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className=" bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                    align="start"
                >
                    {options.map((option) => (
                        <DropdownMenuItem
                            key={option.value}
                            onClick={() => onSelect(option.value)}
                            className="cursor-pointer capitalize"
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

    const setBusinessVPA = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Set Business VPA
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Set Business VPA</DialogTitle>
                        <DialogDescription>
                            Choose the bank and verification type for the business VPA.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <Dropdown
                            label="Bank Name"
                            value={selectedBank}
                            options={bankOptions}
                            onSelect={(val) => setSelectedBank(val)}
                        />

                        <Dropdown
                            label="Verified Type"
                            value={verifiedType}
                            options={verifiedOptions}
                            onSelect={(val) => setVerifiedType(val)}
                        />

                        <DialogFooter className="mt-4 flex justify-end gap-2">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md"
                                disabled={!selectedBank || !verifiedType}
                            >
                                Save
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    const deleteBusinessVpa = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Delete Business VPA
                    </button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold text-gray-800">
                            Confirm Delete Business VPA
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">
                            Are you sure you want to delete the Business VPA? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="mt-4 flex justify-end gap-2">
                        <DialogClose
                            className="text-white border border-gray-300 px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 transition-all"
                        >
                            Cancel
                        </DialogClose>
                        <DialogClose
                            className="text-white border border-gray-300 px-4 py-1.5 rounded bg-red-600 hover:bg-red-700 transition-all"
                        >
                            Delete
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <div className="bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Set BusinessVPA Details
                </h2>
            </div>

            <div className="flex justify-between items-center mb-5 ">
                <h2 className="text-xl font-semibold">
                    Business VPA  :
                </h2>
                <div className='flex gap-2.5'>
                    {setBusinessVPA()}
                    {deleteBusinessVpa()}
                </div>
            </div>
        </div>
    )
}
