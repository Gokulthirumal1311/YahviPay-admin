import './App.css'
import { Layout } from './screens/layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import { AdminDashboard } from './screens/AdminDashboard'
import { EmployeeAgent } from './screens/EmployeeAgent'
import { AllMerchantAccount } from './screens/Merchant/AllMerchantAccount'
import { UserDetails } from './screens/Merchant/UserDetails'
import { MerchantLayout } from './screens/layouts/MerchantLayout'
import { GetAllLeads } from './screens/EmployeesAgent/Leads/GetAllLeads'
import { LeadsDetails } from './screens/EmployeesAgent/Leads/LeadsDetails'
import { GetAllAgents } from './screens/EmployeesAgent/Agents/GetAllAgents'
import { AgentDetails } from './screens/Merchant/AgentDetails'
import { TrackLocation } from './screens/EmployeesAgent/Agents/TrackLocation'
import { SearchShop } from './screens/EmployeesAgent/Agents/SearchShop'
import { KYCDetails } from './screens/Merchant/KYCDetails'
import { AgentsDetails } from './screens/EmployeesAgent/Agents/AgentsDetails'
import { RegisterDevicesCount } from './screens/EmployeesAgent/Agents/RegisterDevicesCount'
import { KYCPending } from './screens/EmployeesAgent/Agents/KYCPending'

function App() {

    return (
        <>
            <Routes>
                <Route path = '/' element = {<Layout />}>
                    <Route path = 'adminDashboard' element = {<AdminDashboard />} />
                    <Route path = 'employeeAgent' element = {<EmployeeAgent />} />

                    <Route path = 'AllMerchantAccount' element = {<AllMerchantAccount />} />
                    <Route path = 'AllMerchantAccount/:id' element = {<MerchantLayout />} />
                    <Route path = 'MerchantDetails' element = {<MerchantLayout />} />

                    <Route path = 'GetAllLeads' element = {<GetAllLeads />} />
                    <Route path = 'LeadsDetails' element = {<LeadsDetails />} />
                    
                    <Route path = 'GetAllAgents' element = {<GetAllAgents />} />
                    <Route path = 'AgentsDetails' element = {<AgentsDetails />} />
                    
                    <Route path = 'RegisterDevicesCount' element = {<RegisterDevicesCount />} />
                    <Route path = 'TrackLocation' element = {<TrackLocation />} />
                    <Route path = 'SearchShop' element = {<SearchShop />} />
                    <Route path = 'KYCPending' element = {<KYCPending />} />
                    
                    {/* <Route path = 'UserDetails' element = {<UserDetails />} /> */}
                    {/* <Route path = 'BusinessDetails' element = {<UserDetails />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default App