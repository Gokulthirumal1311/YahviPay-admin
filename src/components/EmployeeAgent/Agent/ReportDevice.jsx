import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

export const ReportDevice = () => {
    return (
        <Dialog>

            <form>
                <DialogTrigger asChild>
                    <button
                        type="button"
                        className="text-yellow-500 hover:underline font-semibold py-2 px-2 rounded-xl transition-all"
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
                        {/* Device Id */}
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
                                // value={removeDevice.deviceId}
                                // onChange={handleRemoveDeviceDetails}
                                required
                            />
                        </div>
                        {/* Notes */}
                        <div className="flex flex-col md:col-span-2">
                            <label
                                htmlFor="notes"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Report Notes
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows="4"
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                // value={removeDevice.notes}
                                // onChange={handleRemoveDeviceDetails}
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
