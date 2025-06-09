import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import TabNavigation from '../../components/TabNavigation';
import { DoubleSearchBar } from '../../components/DoubleSearchBar';
import { UserDetails } from '../Merchant/UserDetails';
import { BusinessDetails } from '../Merchant/BusinessDetails';
import { KYCDetails } from '../Merchant/KYCDetails';
import { AgentDetails } from '../Merchant/AgentDetails';
import { Charges } from '../Merchant/Charges';
import { SetLoanCode } from '../Merchant/SetLoanCode';
import { SetBusinessVPA } from '../Merchant/SetBusinessVPA';
import { SetMarketingAgent } from '../Merchant/SetMarketingAgent';
import { AccountStatus } from '../Merchant/AccountStatus';
import { SetLocation } from '../Merchant/SetLocation';

const pageContent = {
    "title" : "All Merchant Account By Phone Number",
    "subTitle" : "Search all Merchant from one place with phone number"
}

const tabs = [
  { id: 'tab1', label: 'User Details', url : 'UserDetails' },
  { id: 'tab2', label: 'Business Details', url : 'BusinessDetails' },
  { id: 'tab3', label: 'KYC Details', url : 'KYCDetails' },
  { id: 'tab4', label: 'Agent Details', url : 'AgentDetails' },
  { id: 'tab5', label: 'Charges', url : 'Charges' },
  { id: 'tab6', label: 'Set LoanCode', url : 'SetLoanCode' },
  { id: 'tab7', label: 'Set BusinessVPA', url : 'SetBusinessVPA' },
  { id: 'tab8', label: 'Set MarketingAgent', url : 'SetMarketingAgent' },
  { id: 'tab9', label: 'Account Status', url : 'AccountStatus' },
]
export const MerchantLayout = () => {
    
    const [ activeTab, setActiveTab ] = useState(tabs[0].id);
    const params = useParams();
    
    console.log(params)

    const renderTabContent = () => {    
        switch (activeTab) {
            case 'tab1': return <UserDetails />;
            case 'tab2': return <BusinessDetails />;
            case 'tab3': return <KYCDetails />;
            case 'tab4': return <AgentDetails />;
            case 'tab5': return <Charges />;
            case 'tab6': return <SetLoanCode />;
            case 'tab7': return <SetBusinessVPA />;
            case 'tab8': return <SetMarketingAgent />;
            case 'tab9': return <AccountStatus />;
            default: return null;
        }
    };
    
    return (
        <div className='m-2 mr-0 bg-white relative bottom-0 overflow-y-auto '>
            <div className = 'p-5 h-[85vh] flex flex-col'>
                <div>
                    <h2 className = 'text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                    <h4 className = 'text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
                </div>

                <DoubleSearchBar />
                <div className='my-4'>
                    <TabNavigation
                        tabs = {tabs} 
                        activeTab = {activeTab} 
                        setActiveTab = {setActiveTab}
                    />

                </div>
                <div className="tab-content overflow-y-auto">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    )
}
