import React from "react";
import {Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,}from "@/components/ui/dialog";
export const RemoveDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl">
            Remove Area
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure do you want to delete this area?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your area
              and remove your area from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose className="text-amber-50 border border-gray-300 px-2 py-1 rounded bg-blue-500">Cancel</DialogClose >
            <DialogClose className="text-amber-50 border border-gray-300 px-2 py-1 rounded bg-red-500">Continue</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
