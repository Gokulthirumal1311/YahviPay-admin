import React, { useState } from 'react'
import { Layout } from '../Layout/Layout'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import CustomDropdown from '../../../components/CustomDropDown/CustomDropDown'
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const pageContent = {
    "title": "Get All Agents Account",
    "subTitle": "View and Manage All Registered Agent Accounts.",
    "searchInputPlaceholderName": "Enter the Agent ID",
}

const dialogContent = {
    "addAgentDialogTitle": "Add Agent",
    "addAgentDialogDescription": "Enter Agent Details, Assign an Area, and Link to a Lead.",
}

const agents = [
    {
        agentID: "MKTG111006",
        agentName: "User006",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "7299700576",
    },
    {
        agentID: "MKTG111004",
        agentName: "Rajesh",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "8925046655",
    },
    {
        agentID: "MKTG111008",
        agentName: "User008",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234000006",
    },
    {
        agentID: "MKTG111013",
        agentName: "User013",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567891",
    },
    {
        agentID: "MKTG111012",
        agentName: "User012",
        agentType: "loan",
        assignedLead: "MKTG111005",
        agentPhone: "8667223194",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
];

const filterByAgentTypeList = [
    { label: "All Types", value: "" },
    { label: "Marketing", value: "marketing" },
    { label: "Loan", value: "loan" },
    { label: "Support", value: "support" },
]

function color(type) {
    switch (type) {
        case "marketing":
            return "bg-blue-200 text-blue-500 bg-blue-100/60";
        case "loan":
            return "bg-yellow-200 text-yellow-500 bg-yellow-100/60";
        case "support":
            return "bg-green-200 text-green-500 bg-green-100/60";
        default:
            return "bg-gray-200 text-gray-500 bg-gray-100/60";
    }
}

function dotColor(type) {
    switch (type) {
        case "marketing":
            return "bg-blue-500 bg-blue-100/60";
        case "loan":
            return "bg-yellow-500 bg-yellow-100/60";
        case "support":
            return "bg-green-500 bg-green-100/60";
        default:
            return "bg-gray-500 bg-gray-100/60";
    }
}

export const GetAllAgents = () => {

    const [selectedType, setSelectedType] = useState(filterByAgentTypeList[0].value);
    const [addNewAgent, setAddNewAgent] = useState({
        agentName: '',
        agentPhoneNumber: '',
        agentType: '',
        assignLead: ''
    });

    const handleAddNewAgentDetails = (e) => {
        setAddNewAgent(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitAddNewAgent = (e) => {
        e.preventDefault();
    }

    const handleStoreAgentIdInLocalStorage = (agentId) => {
        localStorage.setItem('agentId', JSON.stringify({ agentId: agentId }))
    }

    const handleStoreLeadIdInLocalStorage = (leadId) => {
        localStorage.setItem('leadId', JSON.stringify({ leadId: leadId }))
    }

    const agentTable = (agents) => {
        return (
            <div className="flex flex-col">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-400 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-400">
                            <thead className="bg-gray-50 ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                    >
                                        <span>Agent ID</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                    >
                                        <span>Type</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                    >
                                        <span>Agent Name</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                    >
                                        <span>Phone Number</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                    >
                                        <span>Assigned Lead</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {agents.map((agent) => (
                                    <tr key={agent.agentID} className="">
                                        <td className="px-4 py-4 text-md font-semibold text-blue-700 whitespace-nowrap text-center tracking-wider">
                                            <span className='text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 space-x-1 group'>
                                                <Link className="inline-flex items-center justify-center" to={'/AgentsDetails'} onClick={() => handleStoreAgentIdInLocalStorage(agent.agentID)}>
                                                    {agent.agentID}
                                                    <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap text-center">
                                            <div className={`inline-flex items-center px-3 py-1 rounded-md gap-x-2 ${color(agent.agentType)}`}>
                                                <span className={`w-2 h-2 rounded-full ${dotColor(agent.agentType)}`}></span>
                                                <h2 className="text-md font-normal">
                                                    {agent.agentType.charAt(0).toUpperCase() + agent.agentType.slice(1)}
                                                </h2>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold text-center">{agent.agentName}</td>
                                        <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold text-center">{agent.agentPhone}</td>
                                        <td className="px-4 py-4 text-md text-blue-700 whitespace-nowrap tracking-wider font-semibold text-center">
                                            <span className='text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 space-x-1 group'>
                                                <Link className="inline-flex items-center justify-center" to={'/LeadsDetails'} onClick={() => handleStoreLeadIdInLocalStorage(agent.assignedLead)}>
                                                    {agent.assignedLead}
                                                    <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {agents.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-4 py-4 text-center text-gray-500">No agents found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    
    const addAgent = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button variant="outline" className="button-submit-color button-design">Add Agent</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.addAgentDialogTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.addAgentDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <form className='h-full grid gap-4' onSubmit={handleSubmitAddNewAgent}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div className="grid gap-1">
                                <label htmlFor="agentName" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent Name</label>
                                <input required value={addNewAgent.agentName} onChange={handleAddNewAgentDetails} id="agentName" name="agentName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="agentPhoneNumber" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent PhoneNumber</label>
                                <input required value={addNewAgent.agentPhoneNumber} onChange={handleAddNewAgentDetails} id="agentPhoneNumber" name="agentPhoneNumber" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="agentType" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent Type</label>
                                <input required value={addNewAgent.agentType} onChange={handleAddNewAgentDetails} id="agentType" name="agentType" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="assignLead" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Lead</label>
                                <input required value={addNewAgent.assignLead} onChange={handleAddNewAgentDetails} id="assignLead" name="assignLead" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                        <div className='text-end'>
                            <DialogClose asChild>
                                <button variant="outline" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold py-1.5 px-4 rounded-md transition-all">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-1.5 px-4 rounded-md transition-all">Save changes</button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    const filteredAgent = selectedType ? agents.filter((agent) => agent.agentType === selectedType) : agents;
    
    return (
        <Layout>
            <div className='overflow-y-auto custom-scroll'>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 '>{pageContent.subTitle}</h4>
                </div>

                <div className='flex-1 overflow-y-auto mt-5'>
                    <div className="flex justify-between items-center mb-4">
                        {addAgent()}
                        <CustomDropdown
                            options={filterByAgentTypeList}
                            selected={selectedType}
                            setSelected={setSelectedType}
                            placeholder={'All Types'}
                        />
                    </div>
                    {agentTable(filteredAgent)}
                </div>
            </div>
        </Layout>
    )
}