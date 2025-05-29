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



function App() {
  return (
    <div>
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
      <SettlementDetailsByAction/>
      <SettlementDetailsByPhone/>
      <SettlementDetails/>
      <Status/>
    </div>
  )
}
export default App
