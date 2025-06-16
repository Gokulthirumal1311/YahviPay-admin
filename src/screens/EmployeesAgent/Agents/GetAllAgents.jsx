import React, { useState } from 'react'
import { Layout } from '../Layout/Layout'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import AgentTable from '../../../components/AgentTable'
import CustomDropdown from '../../../components/CustomDropDown'

const pageContent = {
    "title": "Get All Agents Account",
    "subTitle": "View and Manage All Registered Agent Accounts.",
    "searchInputPlaceholderName": "Enter the Agent ID",
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
];

const filterByAgentTypeList = [
    { label: "All Types", value: "" },
    { label: "Marketing", value: "marketing" },
    { label: "Loan", value: "loan" },
    { label: "Support", value: "support" },
]

export const GetAllAgents = () => {

    const [selectedType, setSelectedType] = useState(filterByAgentTypeList[0].value);
    const [addNewAgent, setAddNewAgent] = useState({
        agentName: '',
        agentPhoneNumber: '',
        agentType: '',
        assignLead: ''
    });

    const handleStoreAddNewAgentDetails = (e) => {
        setAddNewAgent(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmitAddNewAgent = (e) => {
        e.preventDefault();

        console.log(e);
    }

    const filteredAgent = selectedType ? agents.filter((agent) => agent.agentType === selectedType) : agents;

    const addAgent = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button variant="outline" className="cursor-pointer transition-all bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Agent</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{pageContent.addAgentDialogTitle}</DialogTitle>
                        <DialogDescription>{pageContent.addAgentDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <form className='h-full grid gap-4' onSubmit={handleSubmitAddNewAgent}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div className="grid gap-1">
                                <label htmlFor="agentName" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent Name</label>
                                <input required value={addNewAgent.agentName} onChange={handleStoreAddNewAgentDetails} id="agentName" name="agentName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="agentPhoneNumber" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent PhoneNumber</label>
                                <input required value={addNewAgent.agentPhoneNumber} onChange={handleStoreAddNewAgentDetails} id="agentPhoneNumber" name="agentPhoneNumber" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="agentType" className="block text-sm font-medium text-gray-700 capitalize mb-1">Agent Type</label>
                                <input required value={addNewAgent.agentType} onChange={handleStoreAddNewAgentDetails} id="agentType" name="agentType" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="grid gap-1">
                                <label htmlFor="assignLead" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Lead</label>
                                <input required value={addNewAgent.assignLead} onChange={handleStoreAddNewAgentDetails} id="assignLead" name="assignLead" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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

    return (
        <Layout>
            <div className='overflow-y-auto'>
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
                    <AgentTable filteredAgent={filteredAgent} />
                </div>
            </div>
        </Layout>
    )
}