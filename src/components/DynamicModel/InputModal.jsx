import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"


export const InputModal = () => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <button variant="outline" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all">Edit Lead Details</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <label htmlFor="name-1" className="block text-sm font-medium text-gray-700 capitalize mb-1">Name</label>
                            <input id="name-1" name="name" defaultValue="Pedro Duarte" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                        <div className="grid gap-3">
                            <label htmlFor="username-1" className="block text-sm font-medium text-gray-700 capitalize mb-1">Username</label>
                            <input id="username-1" name="username" defaultValue="@peduarte" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <button variant="outline">Cancel</button>
                        </DialogClose>
                        <button type="submit">Save changes</button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
