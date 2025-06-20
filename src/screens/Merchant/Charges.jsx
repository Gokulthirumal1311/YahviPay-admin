import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const Charges = () => {

    const [formData, setFormData] = useState({
        chargeName: "",
        frequency: "",
        amount: "",
    });

    const chargeOptions = [
        { label: "Device", value: "device" },
        { label: "Loan", value: "loan" },
        { label: "Device Advance", value: "deviceadvance" },
        { label: "Device Payment", value: "devicepayment" },
    ];

    const frequencyOptions = [
        { label: "Daily", value: "daily" },
        { label: "Monthly", value: "monthly" },
        { label: "One Time", value: "onetime" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Charge Data:", formData);
        // Add your API call or state update here
    };

    const Dropdown = ({ label, value, options, onSelect }) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={`inline-flex items-center justify-between w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200`}
                    >
                        {value ? options.find((o) => o.value === value)?.label : `Select ${label}`}
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-full bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
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

    const editCharges = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Add Charge
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Add Charge</DialogTitle>
                        <DialogDescription>Fill out the charge details below.</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 gap-4">
                            {/* Charge Name */}
                            <Dropdown
                                label="Charge Name"
                                value={formData.chargeName}
                                options={chargeOptions}
                                onSelect={(val) => setFormData((prev) => ({ ...prev, chargeName: val }))}
                            />

                            {/* Frequency */}
                            <Dropdown
                                label="Frequency"
                                value={formData.frequency}
                                options={frequencyOptions}
                                onSelect={(val) => setFormData((prev) => ({ ...prev, frequency: val }))}
                            />

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
                                    className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

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
                            >
                                Save Charge
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <div className="relative bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Charges Details
                </h2>
            </div>

            <div className="flex justify-between items-center mb-5 ">
                <h2 className="text-xl font-semibold">
                    Charges :
                </h2>
                {editCharges()}
            </div>
        </div>
    )
}
