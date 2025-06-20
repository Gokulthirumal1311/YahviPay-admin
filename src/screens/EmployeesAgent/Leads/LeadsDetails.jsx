import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SearchBar/SingleSearchBar'
import { Layout } from '../Layout/Layout'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { NoDataFound } from '../../../components/NoDataFound/NoDataFound'
import { ExternalLink } from 'lucide-react'
import CustomDropdown from '../../../components/CustomDropDown/CustomDropDown'

const pageContent = {
    "title": "Leads Details",
    "subTitle": "View and manage complete information for the selected lead, including contact details and follow-up status.",
    "searchInputPlaceholderName": 'Enter the Lead ID',
    "noDataFoundDescription": "There’s currently no data available. Try adjusting your filters or add new entries to get started."
}

const dialogContent = {
    "editLeadDetailTitle" : "Edit Lead Details",
    "editLeadDetailDescription" : "Update Lead Information to Keep Your Records Accurate.",
    "addAgentDialogTitle" : "Add Agent",
    "addAgentDialogDescription" : "Provide Agent ID and Specify the Area for Lead Assignment.",
    "removeAgentDialogTitle" : "Remove Agent",
    "removeAgentDialogDescription" : "Select an Agent to Remove and Confirm Deletion.",
    "updateAgentAreaDialogTitle" : "Update Agent Assign Area",
    "updateAgentAreaDialogDescription" : "Update the Assigned Area for the Selected Agent.",
    "removeAgentAreaDialogTitle" : "Are you sure do you want to delete this area ?",
    "removeAgentAreaDialogDescription" : "This action cannot be undone. This will permanently delete your area and remove your area from our servers.",
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
    const [leadDetails, setLeadDetails] = useState(SampleData)
    const [editLeadDetails, setEditLeadDetails] = useState({
        leadName: SampleData.LeadName,
        leadPhoneNumber: SampleData.PhoneNumber,
        leadEmail: SampleData.LeadEmail
    })
    const [addAgent, setAddAgent] = useState({
        agentId: '',
        assignArea: ''
    });
    const [updateArea, setUpdateArea] = useState('');
    const [selectedAgentToRemove, setSelectedAgentToRemove] = useState('');

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


    const handleSubmitSearchLeadDetails = (e) => {


    }


    const handleSubmitEditDetails = (e) => {


    }


    const handleSubmitAddAgent = (e) => {


    }


    const handleSubmitRemoveAgent = (e) => {


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
                <DialogTrigger asChild>
                    <button type="button" className="button-submit-color button-design">Edit Lead Details</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.editLeadDetailTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.editLeadDetailDescription}</DialogDescription>
                    </DialogHeader>
                    {/* Responsive Grid */}
                    <form onSubmit={handleSubmitEditDetails}>
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
                                <button type="button" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Save Changes</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }


    const addAgentDialog = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className="button-submit-color button-design">Add Agent</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.addAgentDialogTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.addAgentDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitAddAgent}>
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
                                <button type="button" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Save Changes</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }


    const removeAgentDialog = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className="button-cancel-color button-cancel-design">Remove Agent</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.removeAgentDialogTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.removeAgentDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitRemoveAgent}>
                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Remove Agent */}
                            <div className="flex flex-col">
                                <label className="text-base font-medium mb-1">Select Agent</label>
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
                                <button type="button" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Remove Agent</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }


    const updateAgentAreaDialog = (area) => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button onClick={() => setUpdateArea(area)} variant="outline" className="button-submit-color small-button-design">Update Area</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.updateAgentAreaDialogTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.updateAgentAreaDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <form className='inline-block' onSubmit={handleSubmitUpdateAgentArea}>
                        <div className="grid gap-4 mb-4">
                            <div className="grid gap-1">
                                <label htmlFor="LeadEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">Assign Area</label>
                                <input id="LeadEmail" value={updateArea} onChange={(e) => setUpdateArea(e.target.value)} name="username" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <button variant="outline" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Save changes</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }


    const removeAgentAreaDialog = (area) => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        disabled={!area}
                        className={`small-button-design ${area ? "button-cancel-color" : "bg-gray-300 cursor-not-allowed"}`}>
                        Remove Area
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{dialogContent.removeAgentAreaDialogTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.removeAgentAreaDialogDescription}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose className="button-submit-color button-design">Cancel</DialogClose >
                        <button onClick={handleSubmitRemoveAgentArea(area)} className="button-cancel-color button-cancel-design">Continue</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }


    return (
        <Layout>
            <div className='overflow-y-auto custom-scroll'>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar onSearchClick={handleSubmitSearchLeadDetails} placeholderName={pageContent.searchInputPlaceholderName} value={leadId} onChange={setLeadId} />
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
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        Lead Id
                                    </label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.LeadId}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">Lead Name</label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.LeadName}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">Lead Email</label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.LeadEmail}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">PhoneNumber</label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.PhoneNumber}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">Registered Date</label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.RegisteredDate}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">Status</label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                                        {leadDetails.Status}
                                    </div>
                                </div>
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
                                <section className="">
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
                                                                        {updateAgentAreaDialog(agent.assignedArea ? agent.assignedArea : '')}
                                                                        {removeAgentAreaDialog(agent.assignedArea ? agent.assignedArea : '')}
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

