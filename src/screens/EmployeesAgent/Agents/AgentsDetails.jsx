import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import ReusableComponent from '../../../components/ReusableComponent'
import { BanknoteX, Cable, Speaker } from 'lucide-react'
import { Layout } from '../Layout/Layout'
import { EditAgentDetails } from '../../../components/EmployeeAgent/Agent/EditAgentDetails'
import { AddDevices } from '../../../components/EmployeeAgent/Agent/AddDevices'
import { AddDeviceParts } from '../../../components/EmployeeAgent/Agent/AddDeviceParts'
import { AddBusiness } from '../../../components/EmployeeAgent/Agent/AddBusiness'
import { RemoveDevice } from '../../../components/EmployeeAgent/Agent/RemoveDevice'
import { NoDataFound } from '../../../components/NoDataFound'
import { ReportDevice } from '../../../components/EmployeeAgent/Agent/ReportDevice'

const pageContent = {
    "title": "Get Agents Details",
    "subTitle": "View and Edit Detailed Information for the Selected Agent.",
    "searchInputPlaceholderName": "Enter the Agent ID",
    "WorkingDevicesTitle": "Working device details",
    "DamageDevicesTitle": "Damage device details",
    "noDataFoundDescription" : "Please enter the Agent ID to see the Details."
}

const SampleData = {
    agentName: 'User010',
    agentPhone: '8667223194',
    agentEmail: 'gokulthirumal13@gmail.com',

    agentRegisteredDate: '2002-11-13',
    agentType: 'marketing',
    agentId: 'MKTG111010',
    agentStatus: 'active',
    agentAssignedArea: 'Velachery',
    agentAssignedLead: "MKTG111005",
}

const workingDevices = [
    {
        id: "8667223194",
        addedBy: "Admin",
        createdDate: "15/05/2025, 16:42:56",
        status: "WORKING",
    },
    {
        id: "9943310704",
        addedBy: "User1",
        createdDate: "16/05/2025, 16:45:56",
        status: "NOT WORKING",
    },
];

const workingParts = [
    {
        addedBy: "admin",
        id: "P1747386566875322990",
        createdDate: "16/05/2025, 14:39:26",
        partStatus: "NEW",
        partId: "15515550",
        partCount: 5,
        partType: "charger",
    },
];
const damageDevices = [
    {
        id: "1551555053",
        createdDate: "2025-05-15T12:04:37.559Z",
        status: "DAMAGED"
    }
]
const damageParts = [
    {
        id: "P1747386566875322990",
        partId: "15515550",
        createdDate: "2025-05-16T09:09:26.875Z",
        partStatus: "NEW",
        partType: "charger",
        partCount: 5,
        addedBy: "admin",
    },
];

const tableContent = {
    WorkingDevicesColumns: ["Added By", "Id", "Created Date", "Status", "Actions"],
    WorkingDevicesAction: ["Edit"],
    WorkingPartsColumns: ["Added By", "Id", "Created Date", "Part Status", "Part Id", "Part Count", "Part Type"],
    WorkingPartsAction: ["Reduce", "Remove"],
    DamageDevicesColumns: ["Id", "Created Date", "Status"],
    DamageDevicesAction: ["Remove Device"],
    DamagePartsColumns: ["Added By", "Id", "Created Date", "Part Status", "Part Id", "Part Count", "Part Type"],
    DamagePartsAction: ["Remove"]
}

export const AgentsDetails = () => {

    const [showWorkingDevicesParts, setShowWorkingDevicesParts] = useState('devices');
    const [showDamageDevicesParts, setShowDamageDevicesParts] = useState('devices');
    const [agentId, setAgentId] = useState('');

    const [editAgentDetails, setEditAgentDetails] = useState({
        agentName: SampleData.agentName,
        agentPhoneNumber: SampleData.agentPhone,
        agentEmail: SampleData.agentEmail,
        assignedLead: SampleData.agentAssignedLead,
        assignedArea: SampleData.agentAssignedArea
    })
    const handleEditLeadDetail = (e) => {
        setEditAgentDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleEditAgentDetails = () => {

    }

    const [addDevice, setAddDevice] = useState('');
    const handleAddDeviceIdDetails = (e) => {
        setAddDevice(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleCheckDeviceId = () => {

    }
    const handleAddDevice = () => {

    }

    const [addDeviceParts, setAddDeviceParts] = useState({
        partId: "",
        partCount: ""
    })
    const handleAddDevicePartsDetails = (e) => {
        setAddDeviceParts(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleAddDeviceParts = () => {

    }
    const [addBusiness, setAddBusiness] = useState({
        businessPhoneNumber: ''
    })
    const handleAddBusinessDetails = (e) => {

        setAddBusiness(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAddBusiness = () => {

    }

    const [removeDevice, setRemoveDevice] = useState({
        deviceId: '',
        addedDeviceId: '',
        subRemoveType: '',
        removeType: '',
        notes: ''
    })
    const handleRemoveDevice = () => {

    }
    const handleRemoveDeviceDetails = (e) => {
        setRemoveDevice(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        const agentId = JSON.parse(localStorage.getItem("agentId"))
        if (agentId) {
            setAgentId(agentId.agentId)
        }
    }, [])

    
    const workingDevicesTable = (workingDevices) => {
        const columns = ["addedBy", "id", "createdDate", "status"];
        const subRemoveTypeList = [
            { label : 'Device', value : 'device' }
        ]

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                            S.No
                        </th>
                        {tableContent.WorkingDevicesColumns.map((col, index) => (
                            <th
                                key={index}
                                className="px-4 py-3.5 text-sm font-semibold text-center text-gray-800"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {workingDevices.length > 0 ? (
                        workingDevices.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-4 text-sm text-gray-700">
                                    {index + 1}
                                </td>
                                {columns.map((col) => (
                                    <td
                                        key={col}
                                        className="px-4 py-4 text-sm text-gray-700 text-center"
                                    >
                                        {col === "status" ? (
                                            <span
                                                className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${item[col] === "WORKING"
                                                    ? "text-emerald-800 bg-emerald-200"
                                                    : "text-red-800 bg-red-100"
                                                    }`}
                                            >
                                                {item[col]}
                                            </span>
                                        ) : (
                                            item[col]
                                        )}
                                    </td>
                                ))}
                                <td className="px-4 py-4 space-x-2 flex">
                                    <AddBusiness handleSubmit={handleAddBusiness} addbusiness={addBusiness} handleAddBusiness={handleAddBusinessDetails} />
                                    {/* <button className="text-blue-500 hover:underline">Add Business</button> */}
                                    <RemoveDevice handleSubmit={handleRemoveDevice} removeDevice={removeDevice} handleRemoveDeviceDetails={handleRemoveDeviceDetails} subRemoveTypeList = {subRemoveTypeList} />
                                    {/* <button className="text-red-500 hover:underline">Remove Device</button>
                                    <button className="text-yellow-500 hover:underline">Report Damage</button> */}
                                    <ReportDevice />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={tableContent.WorkingDevicesColumns.length + 1}
                                className="px-4 py-4 text-center text-gray-500 bg-gray-50"
                            >
                                No Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const workingPartsTable = (workingParts) => {
        const columns = ["addedBy", "id", "createdDate", "partStatus", "partId", "partCount", "partType"];
        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                            S.No
                        </th>
                        {tableContent.WorkingPartsColumns.map((col, index) => (
                            <th
                                key={index}
                                className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {workingParts.length > 0 ? (
                        workingParts.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-4 text-sm text-gray-700">
                                    {index + 1}
                                </td>
                                {columns.map((col) => (
                                    <td
                                        key={col}
                                        className="px-4 py-4 text-sm text-gray-700"
                                    >
                                        {item[col]}
                                    </td>
                                ))}
                                <td className="px-4 py-4 space-x-2">
                                    <button className="text-blue-500 hover:underline">Reduce</button>
                                    <button className="text-red-500 hover:underline">Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + 2}
                                className="px-4 py-4 text-center text-gray-500 bg-gray-50"
                            >
                                No Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    const damageDevicesTable = (damageDevices) => {
        const columns = ["id", "createdDate", "status"];
        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                            S.No
                        </th>
                        {tableContent.DamageDevicesColumns.map((col, index) => (
                            <th
                                key={index}
                                className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                            >
                                {col}
                            </th>
                        ))}
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {damageDevices.length > 0 ? (
                        damageDevices.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
                                {columns.map((col) => (
                                    <td key={col} className="px-4 py-4 text-sm text-gray-700">
                                        {col === "status" ? (
                                            <span
                                                className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${item[col] === "WORKING"
                                                    ? "text-emerald-800 bg-emerald-200"
                                                    : "text-red-800 bg-red-100"
                                                    }`}
                                            >
                                                {item[col]}
                                            </span>
                                        ) : (
                                            item[col]
                                        )}
                                    </td>
                                ))}
                                <td className="px-4 py-4">
                                    <button className="text-red-500 hover:underline">
                                        Remove Device
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + 2}
                                className="px-4 py-4 text-center text-gray-500 bg-gray-50"
                            >
                                No Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )

    }
    const damagePartsTable = (workingParts) => {
        const columns = ["addedBy", "id", "createdDate", "partStatus", "partId", "partCount", "partType"];
        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">S.No</th>
                        {tableContent.DamagePartsColumns.map((col, index) => (
                            <th
                                key={index}
                                className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                            >
                                {col}
                            </th>
                        ))}
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {damageParts.length > 0 ? (
                        damageParts.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
                                {columns.map((col) => (
                                    <td key={col} className="px-4 py-4 text-sm text-gray-700">
                                        {item[col]}
                                    </td>
                                ))}
                                <td className="px-4 py-4">
                                    <button className="text-red-500 hover:underline">Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + 2}
                                className="px-4 py-4 text-center text-gray-500 bg-gray-50"
                            >
                                No Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }



    return (

        <Layout>
            <div className={agentId ? 'overflow-y-auto' : ''}>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <SingleSearchBar placeholderName={pageContent.searchInputPlaceholderName} value={agentId} onChange={setAgentId} />
                { agentId ?
                    <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full mt-5'>
                        <div className='pb-4 border-b-2 border-gray-300 flex justify-between items-center'>
                            <div>
                                <h2 className='text-xl font-bold text-blue-600'>Agent Details</h2>
                            </div>
                            <div className='flex gap-2'>
                                <EditAgentDetails handleSubmit={handleEditAgentDetails} editAgentDetails={editAgentDetails} handleEditLeadDetail={handleEditLeadDetail} />
                                <AddDevices addDevicesId={addDevice} handleAddDevicesIdDetails={handleAddDeviceIdDetails} handleSubmit={handleAddDevice} handleCheckDeviceId={handleCheckDeviceId} />
                                <AddDeviceParts handleSubmit={handleAddDeviceParts} addPartId={addDeviceParts} handleAddDevicePartsDetails={handleAddDevicePartsDetails} />
                            </div>
                        </div>
                        <div className='flex-1 mt-6'>
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agent ID</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentId}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agent Name</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentName}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agent Phone Number</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentPhone}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agent E-mail</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentEmail}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agent Type</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentType}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Lead</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentAssignedLead}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Registered on</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentRegisteredDate}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentStatus}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Area</label>
                                        <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600">
                                            {SampleData.agentAssignedArea}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5 mt-8 border-t-2 border-gray-300'>
                            <div className="flex items-center mb-5">
                                <h2 className="text-2xl font-bold text-blue-600">{pageContent.WorkingDevicesTitle}</h2>
                            </div>
                            <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                                <button onClick={() => setShowWorkingDevicesParts('devices')}
                                    className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                                ${showWorkingDevicesParts === 'devices'
                                            ? 'text-blue-600 border-b-2 border-blue-500'
                                            : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                                        }`}
                                >
                                    <Speaker />
                                    <span className="mx-1 text-sm sm:text-base">
                                        Devices
                                    </span>
                                </button>
                                <button onClick={() => setShowWorkingDevicesParts('parts')}
                                    className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                                ${showWorkingDevicesParts === 'parts'
                                            ? 'text-blue-600 border-b-2 border-blue-500'
                                            : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                                        }`}
                                >
                                    <Cable />
                                    <span className="mx-1 text-sm sm:text-base">
                                        Parts
                                    </span>
                                </button>
                            </div>

                            <div className="flex flex-col">
                                <div className="overflow-x-auto">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                            {showWorkingDevicesParts === "devices" ?
                                                (
                                                    workingDevicesTable(workingDevices)
                                                ) : (
                                                    workingPartsTable(workingParts)
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-5 mt-8 border-t-2 border-gray-300'>
                            <div className="flex items-center mb-5">
                                <h2 className="text-2xl font-bold text-blue-600">{pageContent.DamageDevicesTitle}</h2>
                            </div>
                            <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                                <button onClick={() => setShowDamageDevicesParts('devices')}
                                    className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                                ${showDamageDevicesParts === 'devices'
                                            ? 'text-blue-600 border-b-2 border-blue-500'
                                            : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                                        }`}
                                >
                                    <Speaker />
                                    <span className="mx-1 text-sm sm:text-base">
                                        Devices
                                    </span>
                                </button>

                                <button onClick={() => setShowDamageDevicesParts('parts')}
                                    className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                                ${showDamageDevicesParts === 'parts'
                                            ? 'text-blue-600 border-b-2 border-blue-500'
                                            : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                                        }`}
                                >
                                    <Cable />
                                    <span className="mx-1 text-sm sm:text-base">
                                        Parts
                                    </span>
                                </button>
                            </div>
                            {showDamageDevicesParts === "devices" ?
                                (
                                    damageDevicesTable(damageDevices)
                                ) : (
                                    damagePartsTable(damageParts)
                                )
                            }
                        </div>
                    </div>
                    :
                    <div className='h-full bg-gray-100 mt-4 rounded-2xl'>
                        <NoDataFound description={pageContent.noDataFoundDescription} />
                    </div>   
                }
            </div>
        </Layout>
    )
}