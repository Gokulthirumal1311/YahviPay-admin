import './App.css'
import { Layout } from './screens/layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import { AdminDashboard } from './screens/AdminDashboard/AdminDashboard'
import { AllMerchantAccount } from './screens/Merchant/AllMerchantAccount'
import { MerchantLayout } from './screens/Merchant/layouts/MerchantLayout'
import { GetAllLeads } from './screens/EmployeesAgent/Leads/GetAllLeads'
import { LeadsDetails } from './screens/EmployeesAgent/Leads/LeadsDetails'
import { GetAllAgents } from './screens/EmployeesAgent/Agents/GetAllAgents'
import { TrackLocation } from './screens/EmployeesAgent/Agents/TrackLocation'
import { SearchShop } from './screens/EmployeesAgent/Agents/SearchShop'
import { AgentsDetails } from './screens/EmployeesAgent/Agents/AgentsDetails'
import { RegisterDevicesCount } from './screens/EmployeesAgent/Agents/RegisterDevicesCount'
import { KYCPending } from './screens/EmployeesAgent/Agents/KYCPending'
import { SettlementsByAction } from './screens/Settlements/SettlementsByAction'
import { SettlementsByPhoneNumber } from './screens/Settlements/SettlementsByPhoneNumber'
import { SettlementsByStatus } from './screens/Settlements/SettlementsByStatus'
import { VerifyFlags } from './screens/Merchant/VerifyFlags'
import { LoanAgentCount } from './screens/EmployeesAgent/Loan/LoanAgentCount'
import { GetAllServices } from './screens/DevicesAndServices/Services/GetAllServices'
import { GetServicesByID } from './screens/DevicesAndServices/Services/GetServicesByID'
import { TransactionDetails } from './screens/Merchant/TransactionDetails'
import { DownloadReport } from './screens/Merchant/DownloadReport'
import { SetLocation } from './screens/Merchant/SetLocation'
import GetTicketsByPhoneNumber from './screens/Tickets/GetTicketsByPhoneNumber'
import { CreateNewTicketsStatus } from './screens/Tickets/CreateNewTicketsStatus'
import { AddAndSearchDevices } from './screens/DevicesAndServices/DevicesManagement/AddAndSearchDevices'
import { GetDeviceByPhoneNumber } from './screens/DevicesAndServices/DevicesManagement/GetDeviceByPhoneNumber'
import { NewOrders } from './screens/OrderDetails/NewOrders'
import { CreateOrders } from './screens/OrderDetails/CreateOrders'
import { GetOrderByPhone } from './screens/OrderDetails/GetOrderByPhone'
import { GetOrderByStatus } from './screens/OrderDetails/GetOrderByStatus'
import Button from './screens/Button'
import IntegratedExample from './screens/IntegratedExample'


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* AdminDashBoard */}
                    <Route path='adminDashboard' element={<AdminDashboard />} />

                    {/* Employees Agent */}
                    <Route path='GetAllLeads' element={<GetAllLeads />} />
                    <Route path='LeadsDetails' element={<LeadsDetails />} />
                    <Route path='GetAllAgents' element={<GetAllAgents />} />
                    <Route path='AgentsDetails' element={<AgentsDetails />} />
                    <Route path='RegisterDevicesCount' element={<RegisterDevicesCount />} />
                    <Route path='TrackLocation' element={<TrackLocation />} />
                    <Route path='SearchShop' element={<SearchShop />} />
                    <Route path='KYCPending' element={<KYCPending />} />
                    <Route path='LoanAgentCount' element={<LoanAgentCount />} />

                    {/* Devices And Services */}
                    <Route path='AddAndSearchDevices' element={<AddAndSearchDevices />} />
                    <Route path='GetDeviceByPhone' element={<GetDeviceByPhoneNumber />} />
                    <Route path='GetAllServices' element={<GetAllServices />} />
                    <Route path='GetServicesByID' element={<GetServicesByID />} />

                    {/* Merchant */}
                    <Route path='AllMerchantAccount' element={<AllMerchantAccount />} />
                    <Route path='MerchantDetails' element={<MerchantLayout />} />
                    <Route path='VerifyFlags' element={<VerifyFlags />} />
                    <Route path='TransactionDetails' element={<TransactionDetails />} />
                    <Route path='SetLocation' element={<SetLocation />} />
                    <Route path='DownloadReport' element={<DownloadReport />} />

                    {/* Settlements */}
                    <Route path='SettlementsByAction' element={<SettlementsByAction />} />
                    <Route path='SettlementsByPhoneNumber' element={<SettlementsByPhoneNumber />} />
                    <Route path='SettlementsByStatus' element={<SettlementsByStatus />} />

                    {/* OrderDetails */}
                    <Route path='NewOrders' element={<NewOrders />} />
                    <Route path='CreateOrders' element={<CreateOrders />} />
                    <Route path='GetOrdersByPhone' element={<GetOrderByPhone />} />
                    <Route path='GetOrdersByStatus' element={<GetOrderByStatus />} />

                    {/* Tickets */}
                    <Route path='GetTicketsByPhoneNumber' element={<GetTicketsByPhoneNumber />} />
                    <Route path='CreateNewTicketsStatus' element={<CreateNewTicketsStatus />} />
                </Route>
                <Route path='/button'>
                    <Route path='btn' element={<Button />} />
                    <Route path='example' element={<IntegratedExample />} />
                </Route>
            </Routes>

        </>
    )
}

export default App