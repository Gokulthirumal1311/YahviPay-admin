import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

export const AddDeviceParts = ({ handleSubmit, addPartId, handleAddDevicePartsDetails }) => {
    return (
        <Dialog>
            <form onSubmit={handleSubmit}>
                <DialogTrigger asChild>
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all"
                    >
                        Add Device Parts
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>Add Devices Parts</DialogTitle>
                        <DialogDescription>
                            Change Agent details in case any mistake.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {/* Lead Name */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="partId"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Part ID
                            </label>
                            <input
                                id="partId"
                                name="partId"
                                type='text'
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={addPartId.partId}
                                onChange={handleAddDevicePartsDetails}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="partCount"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Part Count
                            </label>
                            <input
                                id="partCount"
                                name="partCount"
                                type='text'
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={addPartId.partCount}
                                onChange={handleAddDevicePartsDetails}
                                required
                            />
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
