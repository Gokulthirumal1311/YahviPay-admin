import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";

export default function CustomDropdown({ options = [], selected, setSelected, placeholder = "Select Option", className = "", }) {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={`inline-flex items-center justify-between w-52 rounded-sm border border-gray-300 bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-white/30 transition duration-200 focus:ring-offset-2 ${className}`}
                >
                    { selected ? options.map((option) => (
                        selected === option.value ? (
                            option.label
                        ) : ""
                    )) : placeholder }
                    <ChevronDown className="ml-2 h-4 w-4" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-52 bg-white/90 backdrop-blur-md shadow-2xl ring-1 ring-black/10"
                align="start"
            >
                {options.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => setSelected(option.value)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        {selected === option.value && (
                            <>
                                <Check className="h-4 w-4 text-green-500" />
                            </>
                        )}
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
