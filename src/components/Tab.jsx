import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import TabNavigation from './TabNavigation';
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
  { id: 'tab10', label: 'Set Location', url : 'SetLocation' },
]
export const Tab = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id);
  const params = useParams();

  console.log(params);

    const renderTabContent = () => {    
        
    };
  return (
    <div className="p-6 space-y-6">
      {/* Tabs Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Active Tab Content */}
      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
