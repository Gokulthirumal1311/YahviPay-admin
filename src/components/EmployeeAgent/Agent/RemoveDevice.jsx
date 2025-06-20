import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";

import CustomDropdown from '../../CustomDropDown/CustomDropDown'
import { ChevronDown } from 'lucide-react';
const subRemoveTypeList = [

    { label : 'Device', value : 'device' }
]
const removeTypeList = [
    { label : 'Working', value : 'working' }
    
]

export const RemoveDevice = ({ handleSubmit, removeDevice, handleRemoveDeviceDetails }) => {
    return (
        <Dialog>

            <form onSubmit={handleSubmit}>
                <DialogTrigger asChild>
                    <button
                        type="button"
                        className="text-red-500 hover:underline font-semibold py-2 px-2 rounded-xl transition-all"
                    >
                        Remove Device
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>Remove Device from Agent</DialogTitle>
                        <DialogDescription>
                            Change Agent details in case any mistake.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {/* Lead Name */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="deviceId"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Device Id
                            </label>
                            <input
                                id="deviceId"
                                name="deviceId"
                                type='text'
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={removeDevice.deviceId}
                                onChange={handleRemoveDeviceDetails}
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="addedDeviceId"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Added Device Id
                            </label>
                            <input
                                id="addedDeviceId"
                                name="addedDeviceId"
                                type='text'
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={removeDevice.addedDeviceId}
                                onChange={handleRemoveDeviceDetails}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="subRemoveType"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Sub Remove Type
                            </label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className={`w-full inline-flex items-center justify-between rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200`}
                                    >
                                        {subRemoveTypeList[0].label}
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-full bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                                    align="start"
                                >
                                    {subRemoveTypeList.map((option) => (
                                        <DropdownMenuItem
                                            key={option.value}
                                            onClick={() => setSelected(option.value)}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="subRemoveType"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Sub Remove Type
                            </label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className={`w-full inline-flex items-center justify-between rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200`}
                                    >
                                        {removeTypeList[0].label}
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-full bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                                    align="start"
                                >
                                    {removeTypeList.map((option) => (
                                        <DropdownMenuItem
                                            key={option.value}
                                            onClick={() => setSelected(option.value)}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >

                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>

                    {/* Footer Buttons */}
                    <DialogFooter className="mt-6 flex justify-end gap-4">
                        <DialogClose asChild>
                            <button
                                type="button"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-xl transition-all"
                            >
                                Cancel
                            </button>
                        </DialogClose>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all"
                        >
                            Save Changes
                        </button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
