import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

export const AddBusiness = ({ handleSubmit, addBusiness, handleAddBusiness }) => {
    return (
        <Dialog>
            <form onSubmit={handleSubmit}>
                <DialogTrigger asChild>
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all"
                    >
                        Add Business
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>Add Business</DialogTitle>
                        <DialogDescription>
                            Change Agent details in case any mistake.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Responsive Grid */}
                    <div className="mt-2">
                        {/* Lead Name */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="businessPhoneNumber"
                                className="text-sm font-medium text-gray-700 capitalize mb-1"
                            >
                                Business PhoneNumber
                            </label>
                            <input
                                id="businessPhoneNumber"
                                name="businessPhoneNumber"
                                type='text'
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={addBusiness}
                                onChange={handleAddBusiness}
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
