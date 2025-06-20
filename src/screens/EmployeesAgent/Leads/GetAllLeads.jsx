import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout/Layout'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Link } from 'react-router-dom'
import { ExternalLink, User, Users } from 'lucide-react'

const pageContent = {
    "title": "Get All Leads Account",
    "subTitle": "Get a complete overview of all lead accounts and manage their details in one place."
}

const dialogContent = {
    "addLeadTitle": "Add Lead",
    "addLeadDescription": "Create and Add new Lead"
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
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
    {
        LeadId: 'MKTG111007',
        LeadName: 'User007',
        LeadEmail: 'user007@gmail.com',
        PhoneNumber: '9988776655',
        Status: 'active'
    },
]

const backgroundColorByStatus = (status) => {
    if (status.toLowerCase().trim() === 'active') {
        return 'bg-emerald-200 bg-emerald-100/60 text-emerald-700 rounded-2xl'
    }
    else {
        return 'bg-red-200 bg-red-100/60 text-red-700 rounded-2xl '
    }
}

const changeFirstCharacterUpperCase = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
}

const createDotColor = (status) => {
    if (status.toLowerCase().trim() === 'active') {
        return 'bg-emerald-700 bg-emerald-100/60 rounded-full'
    }
    else {
        return 'bg-red-700 bg-emerald-100/60 rounded-full'
    }
}

export const GetAllLeads = () => {

    const [getAllLeads, setGetAllLeads] = useState([]);
    const [addLead, setAddLead] = useState({
        leadId: 'MKTG',
        leadName: '',
        leadPhoneNumber: '',
        leadEmail: ''
    })

    const handleAddLeadDetail = (e) => {
        setAddLead(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitAddLead = (e) => {
        e.preventDefault();
    }

    useEffect(() => {

    }, []);

    const addNewLead = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className="button-submit-color button-design">Add Lead</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>{dialogContent.addLeadTitle}</DialogTitle>
                        <DialogDescription>{dialogContent.addLeadDescription}</DialogDescription>
                    </DialogHeader>
                    {/* Responsive Grid */}
                    <form onSubmit={handleSubmitAddLead}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Lead Id */}
                            <div className="flex flex-col">
                                <label
                                    htmlFor="leadId"
                                    className="text-sm font-medium text-gray-700 capitalize mb-1"
                                >
                                    Lead Id
                                </label>
                                <input
                                    id="leadId"
                                    name="leadId"
                                    type='text'
                                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={addLead.leadId}
                                    onChange={handleAddLeadDetail}
                                    required
                                />
                            </div>
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
                                    value={addLead.leadName}
                                    onChange={handleAddLeadDetail}
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
                                    value={addLead.leadEmail}
                                    onChange={handleAddLeadDetail}
                                    required
                                />
                            </div>
                            {/* Lead Phone Number */}
                            <div className="flex flex-col">
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
                                    value={addLead.leadPhoneNumber}
                                    onChange={handleAddLeadDetail}
                                    required
                                />
                            </div>
                        </div>
                        {/* Footer Buttons */}
                        <DialogFooter className="mt-6 flex justify-end gap-4">
                            <DialogClose asChild>
                                <button type="button" className="button-cancel-color button-cancel-design">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="button-submit-color button-design">Save</button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    const handleStoreInLocalStorage = (leadId) => {
        localStorage.setItem('leadId', JSON.stringify({ leadId: leadId }))
    }

    const LeadCards = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {stores.map((store) => (
                    <div
                        key={store.LeadId}
                        className="group bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl px-8 py-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                    >
                        <div className="flex flex-wrap items-center space-x-4 mb-6">
                            <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0 text-white'>
                                <User />
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead ID</span>
                                <Link className="text-xl text-blue-600 hover:text-blue-700 font-bold hover:underline transition-all duration-200 inline-flex items-center space-x-1 group"

                                    onClick={() => handleStoreInLocalStorage(store.LeadId)}
                                    to={'/LeadsDetails'}
                                >
                                    {store.LeadId}
                                    <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 wrap-anywhere">
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead Name</span>
                                <span className="text-gray-800 font-semibold">{store.LeadName}</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Lead Email</span>
                                <span>{store.LeadEmail}</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Phone Number</span>
                                <span>{store.PhoneNumber}</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-600 block">Status</span>
                                <span className={`inline-flex items-center px-3 rounded-md gap-x-2 ${backgroundColorByStatus(store.Status)}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${createDotColor(store.Status)}`}></span>
                                    <span>{changeFirstCharacterUpperCase(store.Status)}</span>
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <Layout>
            <div className='overflow-y-auto custom-scroll'>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <div className='mb-2'>
                    {/* <addNewLead /> */}
                    {addNewLead()}
                </div>
                <div className='flex-1 overflow-y-auto rounded-2xl'>
                    {/* <LeadCards stores={stores} /> */}
                    {LeadCards(stores)}
                </div>
            </div>
        </Layout>
    )
}
