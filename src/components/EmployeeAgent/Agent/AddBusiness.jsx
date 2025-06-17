import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const dialogContent = {
    "addBusinessTitle" : "Add Business",
    "addBusinessDescription" : "Change Agent details in case any mistake.",
}
export const AddBusiness = ({ handleSubmit, addBusiness, handleAddBusiness }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="text-blue-500 hover:underline font-semibold py-2 px-5 rounded-xl transition-all"
                >
                    Add Business
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] w-full">
                <DialogHeader>
                    <DialogTitle>{dialogContent.addBusinessTitle}</DialogTitle>
                    <DialogDescription>{dialogContent.addBusinessDescription}</DialogDescription>
                </DialogHeader>

                {/* Responsive Grid */}
                <form onSubmit={handleSubmit}>
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
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                                className="button-cancel-color button-design"
                            >
                                Cancel
                            </button>
                        </DialogClose>
                        <button
                            type="submit"
                            className="button-submit-color button-design"
                        >
                            Save Changes
                        </button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
