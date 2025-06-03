import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleSearchBar from '../../../components/SingleSearchBar'
import ReusableComponent from '../../../components/ReusableComponent'
import { BanknoteX, Cable, Speaker } from 'lucide-react'


const pageContent = {
    "title" : "Get Agents Details",
    "subTitle" : "Agents Details from one place with AgentID",
    "searchInputPlaceholderName" : "Enter the Agent ID",
    "WorkingDevicesTitle" : "Working device details",
    "DamageDevicesTitle" : "Damage device details"
}


const SampleData = {
    agentName: 'User010',    
    agentPhone: '8667223194',    
    agentEmail: 'gokulthirumal13@gmail.com',

    agentRegisteredDate: '2002-11-13',
    agentType: 'marketing',
    agentId: 'MKTG111010',
    agentStatus : 'active',
    agentAssignedArea : 'Velachery',
    agentAssignedLead : "MKTG111005",
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
const damageDevices=[
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

const reusableComponent = {
    WorkingDevicesColumns : ["addedBy", "id", "createdDate", "status"],
    WorkingDevicesAction : ["Edit"],
    WorkingPartsColumns : ["addedBy", "id", "createdDate", "partStatus", "partId", "partCount", "partType"],
    WorkingPartsAction : ["Reduce", "Remove"],
    DamageDevicesColumns : ["id","createdDate","status"],
    DamageDevicesAction : ["Remove Device"],
    DamagePartsColumns : ["addedBy", "id", "createdDate", "partStatus", "partId", "partCount", "partType"],
    DamagePartsAction : ["Remove"]
}

export const AgentsDetails = () => {

    const [ showWorkingDevicesParts, setShowWorkingDevicesParts ] = useState('devices');
    const [ showDamageDevicesParts, setShowDamageDevicesParts ] = useState('devices');

    const handleShowWorkingDevicesParts = () => {
        setShowWorkingDevicesParts(prev => prev === "devices" ? "parts" : "devices")
    }
    
    const handleShowDamageDevicesParts = () => {
        setShowDamageDevicesParts(prev => prev === "devices" ? "parts" : "devices")

    }
    return (
        <div className='lg:ml-2 mt-2 mr-0 bg-white relative bottom-0 overflow-hidden rounded-xl' >
        <div className = 'p-5 h-[85vh] flex flex-col overflow-y-auto'>

            <div>
                <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName} />
            <div className='relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full mt-5'>

            
            <div className='pb-4 border-b-2 border-gray-300'>
                <h2 className='text-xl font-bold text-blue-600'>Agent Details</h2>
            </div>
            <div className = 'flex-1 mt-6'>
                
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
                <div class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                    <button onClick={() => setShowWorkingDevicesParts('devices')} 
                        className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                            ${ showWorkingDevicesParts === 'devices'
                                    ? 'text-blue-600 border-b-2 border-blue-500'
                                    : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                                }`}
                        >
                        <Speaker />
                        <span class="mx-1 text-sm sm:text-base">
                            Devices
                        </span>
                    </button>

                    <button onClick={() => setShowWorkingDevicesParts('parts')} 
                        className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                            ${ showWorkingDevicesParts === 'parts'
                                ? 'text-blue-600 border-b-2 border-blue-500'
                                : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                            }`}
                        >
                        <Cable />

                        <span class="mx-1 text-sm sm:text-base">
                            Parts
                        </span>
                    </button>

                </div>
                { showWorkingDevicesParts === "devices" ?
                    (
                        <ReusableComponent
                            columns={reusableComponent.WorkingDevicesColumns}
                            data={workingDevices}
                            actions={reusableComponent.WorkingDevicesAction}
                        />
                    ) : (
                        <ReusableComponent
                            columns={reusableComponent.WorkingPartsColumns}
                            data={workingParts}
                            actions={reusableComponent.WorkingPartsAction}
                        />
                    ) 
                }
            </div>

            <div className='pt-5 mt-8 border-t-2 border-gray-300'>
                <div className="flex items-center mb-5">
                    <h2 className="text-2xl font-bold text-blue-600">{pageContent.DamageDevicesTitle}</h2>
                </div>
                <div class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap">
                    
                    <button onClick={() => setShowDamageDevicesParts('devices')} 
                        className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                            ${ showDamageDevicesParts === 'devices'
                                    ? 'text-blue-600 border-b-2 border-blue-500'
                                    : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                            }`}
                    >
                        <Speaker />
                        <span class="mx-1 text-sm sm:text-base">
                            Devices
                        </span>
                    </button>

                    <button onClick={() => setShowDamageDevicesParts('parts')} 
                        className={`w-full justify-center inline-flex items-center h-10 px-2 py-2 -mb-px sm:px-4 whitespace-nowrap focus:outline-none 
                            ${ showDamageDevicesParts === 'parts'
                                    ? 'text-blue-600 border-b-2 border-blue-500'
                                    : 'text-gray-700 border-b-2 border-transparent hover:border-gray-400'
                            }`}
                    >
                        <Cable />

                        <span class="mx-1 text-sm sm:text-base">
                            Parts
                        </span>
                    </button>

                </div>

                { showDamageDevicesParts === "devices" ?
                    (
                        <ReusableComponent
                            columns={reusableComponent.DamageDevicesColumns}
                            data={damageDevices}
                            actions={reusableComponent.DamageDevicesAction}
                        />
                    ) : (
                        <ReusableComponent
                            columns={reusableComponent.DamagePartsColumns}
                            data={damageParts}
                            actions={reusableComponent.DamagePartsAction}
                        />
                    ) 
                }
            </div>        
                </div>
        </div>
    </div>

        
    )
}
