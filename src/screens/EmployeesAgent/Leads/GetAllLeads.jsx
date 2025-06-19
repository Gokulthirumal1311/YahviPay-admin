import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout/Layout'
import { LeadCards } from '../../../components/LeadCards'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const pageContent = {
    "title": "Get All Leads Account",
    "subTitle": "Get a complete overview of all lead accounts and manage their details in one place."
}

const dialogContent = {
    "addLeadTitle" : "Add Lead",
    "addLeadDescription" : "Create and Add new Lead"
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

export const GetAllLeads = () => {

    const [ getAllLeads, setGetAllLeads ] = useState([]);
    const [ addLead, setAddLead ] = useState({
        leadId : 'MKTG',
        leadName : '',
        leadPhoneNumber : '',
        leadEmail : ''
    })

    const handleAddLeadDetail = (e) => {
        setAddLead(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmitAddLead = (e) => {
        e.preventDefault();
    }

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

    useEffect(() => {

    }, []);

    return (
        <Layout>
            <div className='overflow-y-auto'>
                <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>
                <div className='mb-2'>
                    {/* <addNewLead /> */}
                    {addNewLead()}
                </div>
                <div className='flex-1 overflow-y-auto rounded-2xl'>
                    <LeadCards stores={stores} />
                </div>
            </div>
        </Layout>
    )
}
