import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Authentication } from './screens/Authentication'
import Layout from './Layout'
import { Ex } from './screens/Ex'
import Modal from './components/Modal'
import Modal2 from './components/Modal2'
import { AccountSettingForm } from './components/AccountSettingForm'
import SearchBar from './components/SearchBar'
import { DualSearchBar } from './components/DualSearchBar'
import { Storing } from './components/Storing'
import { DetailsCards } from './components/DetailsCards'
import TableComponent from './components/TableComponent'
import { AgentsAreas } from './components/AgentsAreas'
import {AgentandAreaCards} from './components/AgentandAreaCards'
import {SearchShopCard} from './components/SearchShopCard'
import {MarketingAgentSelect} from './components/MarketingAgentSelect'
import {RegisteredDeviceCount} from './components/RegisteredDeviceCount'
import { LeadAccountSettingForm } from './components/LeadAccountSettingForm'
import LeadDetails from './components/LeadDetails'
import { Kycverification } from './components/Kycverification'
import WorkingDeviceTable from './components/WorkingDeviceTable'
import WorkingDeviceParts from './components/WorkingDeviceParts'
import { DamagedDevice } from './components/DamagedDevice'
import { DamagedDeviceParts } from './components/DamagedDeviceParts'
import { SettlementSummaryByStatus } from './components/SettlementSummaryByStatus'
import { SettlementDetailsByAction } from './components/SettlementDetailsByAction'

import { SettlementDetailsByPhone } from './components/SettlementDetailsByPhone'
import SettlementDetails from './components/SettlementDetails'
import Status from './components/Status'
import { GetAllServices } from './components/GetAllServices'
import TransactionDetails from './components/TransactionDetails'
import DownloadReport from './components/DownloadReport'
import GetTicketsByPhone from './components/GetTicketsByPhone'
import { AddDevices } from './components/AddDevices'
import { DeviceReports } from './components/DeviceReports'
import SearchDevices from './components/SearchDevices'
import UserCard from './components/UserCard'
import { NewDeviceOrder } from './components/NewDeviceOrder'
import { CreateOrders } from './components/CreateOrders'
import { CalenderGrid } from './components/CalenderGrid'
import { AdminPage } from './components/AdminPage'

import DashboardCards from './components/DashBoardCards'
import Loading from './components/LoadingScreen'
import TabNavigation from './components/TabNavigation'
import { Tab } from './components/Tab'
import AddAndSearchDevices from './components/AddAndSearchDevice'
import { SuccessPop } from './components/SuccessPop'
import { WarningPop } from './components/WarningPop'
import { ErrorPop } from './components/ErrorPop'
import { Action } from './components/Action'
import { GetImageLink } from './components/GetImageLink'
import { SearchShop } from './components/SearchShop'
import { RemoveDialog } from './components/RemoveDialog'
import { ToastComponent } from './components/ToastComponent'
import { ToolsVerificationCard } from './components/ToolsVerificationCard'
import { SkeletonLoader } from './components/SkeletonLoader'
import { Example } from './components/Example'






function App() {
  return (
    <div>
      <DashboardCards/>
      <SearchBar/>
      <DualSearchBar/>
      <Modal/>
      <Modal2/>
      <DetailsCards/>
      <TableComponent/>
      <AgentsAreas/>
      {/* <AgentandAreaCards/>      */}
      <MarketingAgentSelect/>
      <SearchShopCard/>
      <RegisteredDeviceCount/>
      <LeadDetails/>
      <Kycverification/>
      <WorkingDeviceTable/>
      <WorkingDeviceParts/>
      <DamagedDevice/>
      <DamagedDeviceParts/>
      <SettlementSummaryByStatus/>
      <SettlementDetailsByPhone/>
      <SettlementDetails/>
      <Status/>
      <GetAllServices/>
      <TransactionDetails/>
      <DownloadReport/>
      <GetTicketsByPhone/>
      <DeviceReports/>
      <AddDevices/>
      <SearchDevices/>
      <UserCard/>
      <NewDeviceOrder category='device'/>
      <CreateOrders/>
      <CalenderGrid/>
      <AdminPage/>
      {/* <Loading/> */}
      <Tab/>
      <SettlementDetailsByAction />
      <AddAndSearchDevices/>

      <Action/>
      <SuccessPop/>
      <WarningPop/>
      <ErrorPop/>
      <GetImageLink/>
      <SearchShop/>
      <RemoveDialog/>
      <ToastComponent/>
      <ToolsVerificationCard/>
      {/* <SkeletonLoader/> */}
      <Example/>

      
      
      
    </div> 
  )
}
export default App
