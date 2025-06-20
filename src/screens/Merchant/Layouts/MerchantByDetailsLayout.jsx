import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import TabNavigation from '../../../components/TabNavigation/TabNavigation';
import { DoubleSearchBar } from '../../../components/SearchBar/DoubleSearchBar';
import { UserDetails } from '../UserDetails';
import { BusinessDetails } from '../BusinessDetails';
import { KYCDetails } from '../KYCDetails';
import { AgentDetails } from '../AgentDetails';
import { Charges } from '../Charges';
import { SetLoanCode } from '../SetLoanCode';
import { SetBusinessVPA } from '../SetBusinessVPA';
import { SetMarketingAgent } from '../SetMarketingAgent';
import { AccountVerifyDetails } from '../AccountVerifyDetails';
import { SetLocation } from '../SetLocation';
import { AccountStatus } from '../AccountStatus';

import { Layout } from './Layout'

const pageContent = {
    "title": "Merchant By Details",
    "subTitle": "Search all Merchant from one place with phone number"
}

const tabs = [
    { id: 'tab1', label: 'User Details', url: 'UserDetails' },
    { id: 'tab2', label: 'Business Details', url: 'BusinessDetails' },
    { id: 'tab3', label: 'KYC Details', url: 'KYCDetails' },
    { id: 'tab4', label: 'Agent Details', url: 'AgentDetails' },
    { id: 'tab5', label: 'Charges', url: 'Charges' },
    { id: 'tab6', label: 'Set LoanCode', url: 'SetLoanCode' },
    { id: 'tab7', label: 'Set BusinessVPA', url: 'SetBusinessVPA' },
    { id: 'tab8', label: 'Set MarketingAgent', url: 'SetMarketingAgent' },
    { id: 'tab9', label: 'Account Status', url: 'AccountStatus' },
    { id: 'tab10', label: 'Account Verify Details', url: 'AccountVerifyDetails' },
]
export const MerchantByDetailsLayout = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id);
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
            case 'tab10': return <AccountVerifyDetails />;
            default: return null;
        }
    };

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>

            <DoubleSearchBar />
            
            <div className='my-4 '>
                <TabNavigation
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

            </div>
            <div className="tab-content overflow-y-auto custom-scroll">
                {renderTabContent()}
            </div>
        </Layout>
    )
}
