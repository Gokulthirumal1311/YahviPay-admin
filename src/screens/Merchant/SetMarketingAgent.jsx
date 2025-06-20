import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const primaryAgent = {
    name: "Gokul10",
    phoneNumber: "8667223194",
    merchantId: "MKTG111010",
}
const secondaryAgent = {
    name: "Gokul10",
    phoneNumber: "8667223194",
    merchantId: "MKTG111012",
}

const optionsAgentType = [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
];

const agentIds = ["AGT123", "AGT456", "AGT789"];

export const SetMarketingAgent = () => {

    const [formData, setFormData] = useState({
        agentType: "",
        agentId: "",
    });

    const handleSelectAgentType = (value) => {
        setFormData((prev) => ({ ...prev, agentType: value }));
    };

    const handleSelectAgentId = (value) => {
        setFormData((prev) => ({ ...prev, agentId: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission logic here
        console.log("Submitted Marketing Agent:", formData);
    };

    const AgentDropdown = ({ id, options, value, onSelect }) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        id={id}
                        className="inline-flex items-center justify-between w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        {value
                            ? options.find((o) => o.value === value)?.label
                            : `Select`}
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
        );
    };

    const editMarketingAgent = () => {

        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Set Marketing Agent
                    </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle>Set Marketing Agent</DialogTitle>
                        <DialogDescription>
                            Select the agent type and agent ID below.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                        <div className="grid grid-cols-2 items-center gap-4">
                            <label
                                htmlFor="agentType"
                                className="text-sm font-medium text-gray-700"
                            >
                                Agent Type
                            </label>
                            <AgentDropdown
                                id="agentType"
                                options={optionsAgentType}
                                value={formData.agentType}
                                onSelect={handleSelectAgentType}
                            />

                            <label
                                htmlFor="agentId"
                                className="text-sm font-medium text-gray-700"
                            >
                                Agent ID
                            </label>
                            <AgentDropdown
                                id="agentId"
                                options={agentIds.map((id) => ({ label: id, value: id }))}
                                value={formData.agentId}
                                onSelect={handleSelectAgentId}
                            />
                        </div>

                        <DialogFooter className="flex justify-end gap-2">
                            <DialogClose
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1.5 px-4 rounded transition"
                            >
                                Cancel
                            </DialogClose>
                            <button
                                type="submit"
                                disabled={!formData.agentType || !formData.agentId}
                                className={`py-1.5 px-6 rounded text-white font-semibold transition ${formData.agentType && formData.agentId
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-blue-300 cursor-not-allowed"
                                    }`}
                            >
                                Save
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
                    Set Marketing Agent
                </h2>
                <div>
                    {editMarketingAgent(agentIds)}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                    <div className="mb-6">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Primary Agent
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Name
                            </span>
                            <span className="text-gray-800 font-semibold">
                                {primaryAgent.name}
                            </span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Merchant ID
                            </span>
                            <span>{primaryAgent.merchantId}</span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Phone Number
                            </span>
                            <span>{primaryAgent.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>

                <div
                    className="relative group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                    <div className="mb-6">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Secondary Agent
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Name
                            </span>
                            <span className="text-gray-800 font-semibold">
                                {secondaryAgent.name}
                            </span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Merchant ID
                            </span>
                            <span>{secondaryAgent.merchantId}</span>
                        </div>

                        <div>
                            <span className="text-sm font-medium text-gray-600 block">
                                Phone Number
                            </span>
                            <span>{secondaryAgent.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
            </div>
        </div>
    )
}
