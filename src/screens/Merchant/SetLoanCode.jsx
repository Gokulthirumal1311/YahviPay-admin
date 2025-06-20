import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const SetLoanCode = () => {

    const [selectedLoanCode, setSelectedLoanCode] = useState("");

    const loanCodeOptions = [
        { label: "Loan Code A", value: "loanCodeA" },
        { label: "Loan Code B", value: "loanCodeB" },
        { label: "Loan Code C", value: "loanCodeC" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const editLoanCode = () => {

        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Set Loan Code
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                        <DialogTitle>Set Loan Code</DialogTitle>
                        <DialogDescription>Select the appropriate loan code below.</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Code</label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className="inline-flex items-center justify-between w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 transition"
                                    >
                                        {selectedLoanCode
                                            ? loanCodeOptions.find((c) => c.value === selectedLoanCode)?.label
                                            : "Select Loan Code"}
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-full bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                                    align="start"
                                >
                                    {loanCodeOptions.map((option) => (
                                        <DropdownMenuItem
                                            key={option.value}
                                            onClick={() => setSelectedLoanCode(option.value)}
                                            className="cursor-pointer capitalize"
                                        >
                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
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
                                disabled={!selectedLoanCode}
                            >
                                Save Code
                            </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
    
    return (
        <div className="bg-gradient-to-br from-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Set LoanCode Details
                </h2>
            </div>

            <div className="flex justify-between items-center mb-5 ">
                <h2 className="text-xl font-semibold">
                    Loan Code :
                </h2>
                {editLoanCode()}
            </div>
        </div>
    )
}
