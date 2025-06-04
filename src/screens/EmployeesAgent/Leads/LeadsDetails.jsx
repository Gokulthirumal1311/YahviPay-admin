import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import { LeadCards } from '../../../components/LeadCards'
import { LeadAccountSettingForm } from '../../../components/LeadAccountSettingForm'
import { AgentsAreas } from '../../../components/AgentsAreas'
import { DynamicModel } from '../../../components/DynamicModel/DynamicModel'
import { Layout } from '../Layout/Layout'

const pageContent = {
    "title": "Leads Details",
    "subTitle": "View and manage complete information for the selected lead, including contact details and follow-up status.",
    "searchInputPlaceholderName": 'Enter the Lead ID'
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


export const LeadsDetails = () => {

    const [leadId, setLeadId] = useState('');
    // Single state object for managing all modals
    const [modalStates, setModalStates] = useState({
        editLeadDetail: false,
        addAgent: false,
        updateArea: false,
        removeAgent: false
    });

    const [userData, setUserData] = useState({
        LeadName: SampleData.LeadName,
        LeadEmail: SampleData.LeadEmail,
        PhoneNumber: SampleData.PhoneNumber,
    });

    const [agents, setAgents] = useState({
        agentId: 'MKTG',
        assignArea: ''
    });

    // Generic function to open any modal
    const openModal = (modalType) => {
        setModalStates(prev => ({
            ...prev,
            [modalType]: true
        }));
    };

    // Generic function to close any modal
    const closeModal = (modalType) => {
        setModalStates(prev => ({
            ...prev,
            [modalType]: false
        }));
    };

    const handleSaveLeadDetails = (updatedFields) => {
        const updated = { ...SampleData, ...updatedFields };
        // Note: localStorage removed as per artifact requirements
        setUserData({
            LeadName: updatedFields.LeadName ? updatedFields.LeadName : SampleData.LeadName,
            LeadEmail: updatedFields.LeadEmail ? updatedFields.LeadEmail : SampleData.LeadEmail,
            PhoneNumber: updatedFields.PhoneNumber ? updatedFields.PhoneNumber : SampleData.PhoneNumber,
        });
        SampleData = updated;
        closeModal('editLeadDetail');
    };

    const handleAddAgent = (newAgentData) => {
        const newAgent = {
            id: agents.length + 1,
            ...newAgentData
        };
        setAgents(prev => [...prev, newAgent]);
        closeModal('addAgent');
    };

    const handleUpdateArea = (updateArea) => {
        const newAgent = {
            id: agents.length + 1,
            ...newAgentData
        };
        setAgents(prev => [...prev, newAgent]);
        closeModal('addAgent');
    };
    // Different modal content based on modal type
    const getModalContent = () => {
        if (modalStates.editLeadDetail) {
            return {
                title: "Edit Lead Details",
                userData: userData,
                onSave: handleSaveLeadDetails,
                onClose: () => closeModal('editLeadDetail')
            };
        }

        if (modalStates.addAgent) {
            return {
                title: "Add Agent",
                userData: { agentId: "MKGT", assignArea: "" },
                onSave: handleAddAgent,
                onClose: () => closeModal('addAgent')
            };
        }
        if (modalStates.updateArea) {

            return {
                title: "Update Agent Area",
                userData: { assignArea: "" },
                onSave: handleAddAgent,
                onClose: () => closeModal('updateArea')
            };
        }

        if (modalStates.removeAgent) {
            return {
                title: "Remove Agent For Lead",
                userData: { assignArea: "" },
                onSave: handleAddAgent,
                onClose: () => closeModal('removeAgent')
            };
        }
        return null;
    };
    useEffect(() => {

        const leadId = JSON.parse(localStorage.getItem('leadId'))

        setLeadId(leadId.leadId);
    }, []);
    const isAnyModalOpen = Object.values(modalStates).some(state => state);

    return (

        <Layout>
            <div className='overflow-y-auto'>


                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>

                <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} value={leadId} onChange={setLeadId} />

                <div className='flex-1 mt-6'>
                    <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full">

                        {/* Lead Details Section */}
                        <div className="flex justify-between items-center mb-6 border-b-2 border-b-gray-300 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-blue-600">Lead Details</h2>
                            </div>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl"
                                onClick={() => openModal('editLeadDetail')}
                            >
                                Edit Lead Detail
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {Object.entries(SampleData).map(([key, value]) => (
                                <div key={key}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        {key.replace(/([A-Z])/g, " $1")}
                                    </label>
                                    <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
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
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl"
                                        onClick={() => openModal('addAgent')}
                                    >
                                        Add Agent
                                    </button>
                                </div>
                            </div>
                            {/* <AgentsAreas  {...getModalContent()} /> */}

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
                                                                <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentID}</td>
                                                                <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentName}</td>
                                                                <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentPhone}</td>
                                                                <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.assignedArea || "-"}</td>
                                                                <td className="px-4 py-4 text-md text-gray-700 font-semibold text-center">
                                                                    <button
                                                                        onClick={() => openModal('updateArea')}
                                                                        className="transition-all bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm"
                                                                    >
                                                                        Add / Update
                                                                    </button>
                                                                    <button
                                                                        onClick={() => openModal('removeAgent')}
                                                                        disabled={!agent.assignedArea}
                                                                        className={`ml-3 px-2 py-1 rounded text-sm text-white ${agent.assignedArea ? "transition-all bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"
                                                                            }`}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {agents.length === 0 && (
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

                        {/* Render appropriate modal */}
                        {isAnyModalOpen && (
                            <DynamicModel {...getModalContent()} />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};