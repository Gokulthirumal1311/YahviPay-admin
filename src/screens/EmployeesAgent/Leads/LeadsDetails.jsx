import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import { LeadCards } from '../../../components/LeadCards'
import { LeadAccountSettingForm } from '../../../components/LeadAccountSettingForm'
import { AgentsAreas } from '../../../components/AgentsAreas'
import { DynamicModel } from '../../../components/DynamicModel/DynamicModel'
import { Layout } from '../Layout/Layout'
import { InputModal } from '../../../components/DynamicModel/InputModal'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { NoDataFound } from '../../../components/NoDataFound'
import { ExternalLink } from 'lucide-react'
import CustomDropdown from '../../../components/CustomDropDown'


const pageContent = {
    "title": "Leads Details",
    "subTitle": "View and manage complete information for the selected lead, including contact details and follow-up status.",
    "searchInputPlaceholderName": 'Enter the Lead ID',
    "noDataFoundDescription": "There’s currently no data available. Try adjusting your filters or add new entries to get started."
}

let SampleData = {
    LeadId: "MKTG111005",
    LeadName: "User005",
    LeadEmail: "gokul13@gmail.com",
    PhoneNumber: "1234567891",
    RegisteredDate: "06/05/2025, 12:23:37",
    Status: "active",
};

const tableHeaderTitle = ["Agent ID", "Assigned Agent", "Phone Number", "Assigned Area", "Edit Area"]

const initialAgents = [
    {
        agentID: "MKTG111008",
        agentName: "User008",
        agentPhone: "9876543210",
        assignedArea: "Pallavaram",
    },
    {
        agentID: "MKTG111009",
        agentName: "User009",
        agentPhone: "9876543211",
        assignedArea: "Velachery",
    },
];


const removeAgentList = initialAgents.map((item, index) => ({ label: item.agentID, value: item.agentID }))

export const LeadsDetails = () => {

    const [leadId, setLeadId] = useState('');
    const [ leadDetails, setLeadDetails ] = useState({
        leadName: SampleData.LeadName,
        leadPhoneNumber: SampleData.PhoneNumber,
        leadEmail: SampleData.LeadEmail
    })
    const [editLeadDetails, setEditLeadDetails] = useState({
        leadName: SampleData.LeadName,
        leadPhoneNumber: SampleData.PhoneNumber,
        leadEmail: SampleData.LeadEmail
    })
    const [addAgent, setAddAgent] = useState({
        agentId: '',
        assignArea: ''
    });
    const [ agentArea, setAgentArea ] = useState('');
    const [updateArea, setUpdateArea] = useState('');
    const [selectedAgentToRemove, setSelectedAgentToRemove] = useState('');
    
    console.log(selectedAgentToRemove)

    useEffect(() => {
        const leadId = JSON.parse(localStorage.getItem('leadId'))
        if (leadId) {
            setLeadId(leadId.leadId);
        }
    }, []);

    const handleEditLeadDetail = (e) => {
        setEditLeadDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleAddAgent = (e) => {
        setAddAgent(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSearchLeadDetails = (e) => {

    }
    
    const handleSubmitEditDetails = (e) => {

    }
    const handleSubmitAddAgent = (e) => {

    }
    const handleRemoveAgent = (e) => {

    }
    const handleSubmitUpdateAgentArea = (e) => {

    }
    const handleSubmitRemoveAgentArea = (e) => {

    }



    const handleViewAgentDetail = (agentId) => {
        localStorage.setItem('agentId', JSON.stringify({ agentId: agentId }))
    }

    const editLeadDetail = () => {
        return (
            <Dialog>
                <form onSubmit={handleSubmitEditDetails}>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                        >
                            Edit Lead Details
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] w-full">
                        <DialogHeader>
                            <DialogTitle>Edit Lead Details</DialogTitle>
                            <DialogDescription>
                                Update Lead Information to Keep Your Records Accurate.
                            </DialogDescription>
                        </DialogHeader>
                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Lead Name */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="leadName"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Lead Name
                                </label>
                                <input
                                    id="leadName"
                                    name="leadName"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={editLeadDetails.leadName}
                                    onChange={handleEditLeadDetail}
                                    required
                                />
                            </div>
                            {/* Lead Email */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="leadEmail"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Lead Email
                                </label>
                                <input
                                    id="leadEmail"
                                    name="leadEmail"
                                    type='mail'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={editLeadDetails.leadEmail}
                                    onChange={handleEditLeadDetail}
                                    required
                                />
                            </div>
                            {/* Lead Phone Number */}
                            <div className="md:col-span-2 flex flex-col">
                                <label
                                    htmlFor="leadPhoneNumber"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Lead Phone Number
                                </label>
                                <input
                                    id="leadPhoneNumber"
                                    name="leadPhoneNumber"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={editLeadDetails.leadPhoneNumber}
                                    onChange={handleEditLeadDetail}
                                    required
                                />
                            </div>
                        </div>
                        {/* Footer Buttons */}
                        <DialogFooter className="mt-6 flex justify-end gap-4">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                            >
                                Save Changes
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        )
    }

    const addAgentDialog = () => {
        return (
            <Dialog>
                <form onSubmit={handleSubmitEditDetails}>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                        >
                            Add Agent
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[600px] w-full">
                        <DialogHeader>
                            <DialogTitle>Add Agent</DialogTitle>
                            <DialogDescription>
                                Provide Agent ID and Specify the Area for Lead Assignment.
                            </DialogDescription>
                        </DialogHeader>
                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Agent Id */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="agentId"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Agent Id
                                </label>
                                <input
                                    id="agentId"
                                    name="agentId"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addAgent.agentId}
                                    onChange={handleAddAgent}
                                    required
                                />
                            </div>
                            {/* Assign Area */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="assignArea"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Assign Area
                                </label>
                                <input
                                    id="assignArea"
                                    name="assignArea"
                                    type='mail'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addAgent.assignArea}
                                    onChange={handleAddAgent}
                                    required
                                />
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <DialogFooter className="mt-6 flex justify-end gap-4">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                            >
                                Save Changes
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        )
    }

    const removeAgentDialog = () => {
        return (
            <Dialog>
                <form onSubmit={handleRemoveAgent}>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                        >
                            Remove Agent
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] w-full">
                        <DialogHeader>
                            <DialogTitle>Remove Agent</DialogTitle>
                            <DialogDescription>
                                Select an Agent to Remove and Confirm Deletion.
                            </DialogDescription>
                        </DialogHeader>
                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Remove Agent */}
                            <div className="flex flex-col">
                                <label className="text-base font-medium mb-1">
                                    Search by status
                                </label>
                                <CustomDropdown
                                    options={removeAgentList}
                                    selected={selectedAgentToRemove}
                                    setSelected={setSelectedAgentToRemove}
                                    placeholder="Actions"
                                />
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <DialogFooter className="mt-6 flex justify-end gap-4">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl transition-all"
                            >
                                Remove Agent
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        )
    }


    const updateAreaDialog = (area) => {
        return (
            <Dialog>
                <form className='inline-block'>
                    <DialogTrigger asChild>
                        <button onClick={() => {
                            setUpdateArea(area);

                            setAgentArea(area);
                        }} variant="outline" className="cursor-pointer transition-all bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm">Update Area</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Update Agent Assign Area</DialogTitle>
                            <DialogDescription>
                                Update the Assigned Area for the Selected Agent.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-1">
                                <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                <input id="LeadEmail" value={updateArea} onChange={(e) => setUpdateArea(e.target.value)} name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <button variant="outline" className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold py-2 px-5 rounded-xl transition-all">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 px-5 rounded-xl transition-all">Save changes</button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        )
    }

    const removeAreaDialog = (area) => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button 
                        disabled={!area} 
                        className={`ml-3 px-2 py-1 rounded text-sm text-white cursor-pointer 
                            ${area ? "transition-all bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"}`}>
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
                        <DialogClose className="text-amber-50 border border-gray-300 px-2 py-1 rounded transition-all bg-blue-600 hover:bg-blue-700 cursor-pointer ">Cancel</DialogClose >
                        <DialogClose className="text-amber-50 border border-gray-300 px-2 py-1 rounded transition-all bg-red-600 hover:bg-red-700 cursor-pointer ">Continue</DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Layout>
            <div className='overflow-y-auto'>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar onSearchClick = {handleSearchLeadDetails} placeholderName={pageContent.searchInputPlaceholderName} value={leadId} onChange={setLeadId} />
                <div className='flex-1 mt-6'>

                    {leadId ?
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full">
                            <div className="flex justify-between items-center mb-6 border-b-2 border-b-gray-300 pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-blue-600">Lead Details</h2>
                                </div>
                                {editLeadDetail()}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {Object.entries(SampleData).map(([key, value]) => (
                                    <div key={key}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Agents Section */}
                            <div className='pt-8'>
                                <div className='border-b-2 border-b-gray-300 pb-4 flex justify-between items-center mb-6'>
                                    <h2 className='text-2xl font-bold text-blue-600'>Agent's List</h2>
                                    <div className="flex gap-3">
                                        {addAgentDialog()}
                                        {removeAgentDialog()}
                                    </div>
                                </div>
                                <section className="container">
                                    <div className="flex flex-col mt-6">
                                        <div className="overflow-x-auto ">
                                            <div className="inline-block min-w-full align-middle ">
                                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                {tableHeaderTitle.map((item, index) => (
                                                                    <th key={index} className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">{item}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {initialAgents.map((agent) => (
                                                                <tr key={agent.agentID}>
                                                                    <td className="px-4 py-4 text-md font-semibold tracking-widest text-center">
                                                                        <span className='text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 space-x-1 group'>
                                                                            <Link className="inline-flex items-center justify-center" to={'/AgentsDetails'} onClick={() => handleViewAgentDetail(agent.agentID)}>
                                                                                {agent.agentID}
                                                                                <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                            </Link>
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentName}</td>
                                                                    <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentPhone}</td>
                                                                    <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.assignedArea || "-"}</td>
                                                                    <td className="px-4 py-4 text-md text-gray-700 font-semibold text-center">

                                                                        {updateAreaDialog(agent.assignedArea ? agent.assignedArea : '')}
                                                                        {/* <button
                                                                            onClick={() => openModal('removeAgent')}
                                                                            disabled={!agent.assignedArea}
                                                                            className={`ml-3 px-2 py-1 rounded text-sm text-white cursor-pointer ${agent.assignedArea ? "transition-all bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"
                                                                                }`}
                                                                        >
                                                                            Remove Area
                                                                        </button> */}
                                                                        {removeAreaDialog(agent.assignedArea ? agent.assignedArea : '')}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            {initialAgents.length === 0 && (
                                                                <tr>
                                                                    <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                                                                        No agents found
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        :
                        <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                            <NoDataFound description={pageContent.noDataFoundDescription} />
                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
};
