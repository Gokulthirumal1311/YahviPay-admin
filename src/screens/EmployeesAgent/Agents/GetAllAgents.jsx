import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import AgentTable from '../../../components/AgentTable'
import { Layout } from '../Layout/Layout'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const pageContent = {
    "title": "Get All Agents Account",

    "subTitle": "Search all Agents from one place with AgentID",
    "searchInputPlaceholderName": "Enter the Agent ID"
}

const stores = [
    {
        LeadId: 'MKTG111005',
        LeadName: 'User005',
        LeadEmail: 'gokul13@gmail.com',
        PhoneNumber: '1234567891',
        Status: 'active'
    },
    {
        LeadId: 'MKTG111006',
        LeadName: 'User006',
        LeadEmail: 'user006@gmail.com',
        PhoneNumber: '9876543210',
        Status: 'inactive'
    },
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
]
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
];


export const GetAllAgents = () => {

    const [selectedType, setSelectedType] = useState("");
    
    
    const filteredAgent = selectedType ? agents.filter((agent) => agent.agentType === selectedType) : agents;
    return (

        <Layout >

            <div className='overflow-y-auto'>


                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 '>{pageContent.subTitle}</h4>
                </div>


                <div className='flex-1 overflow-y-auto mt-5'>
                    <div className="flex justify-between items-center mb-4">
                        {/* <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                            Add Agents
                        </button> */}
                        <Dialog>
                            <form className='inline-block'>
                                <DialogTrigger asChild>
                                    <button variant="outline" className="transition-all bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Agent</button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add Agent</DialogTitle>
                                        <DialogDescription>
                                            Create new Agent 
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div className="grid gap-1">
                                            <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                            <input id="LeadEmail" name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                        <div className="grid gap-1">
                                            <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                            <input id="LeadEmail" name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                        <div className="grid gap-1">
                                            <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                            <input id="LeadEmail" name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                        <div className="grid gap-1">
                                            <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                            <input id="LeadEmail" name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <button variant="outline" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition-all">Cancel</button>
                                        </DialogClose>
                                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md transition-all">Save changes</button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">All Types</option>
                            <option value="marketing">Marketing</option>
                            <option value="loan">Loan</option>
                            <option value="support">Support</option>
                        </select>
                    </div>
                    <AgentTable filteredAgent = {filteredAgent} />
                </div>
            </div>
        </Layout>
    )
}