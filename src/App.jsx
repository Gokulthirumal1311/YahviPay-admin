import './App.css'
import { Layout } from './screens/Layout'
import { Routes, Route } from 'react-router-dom'
import { AdminDashboard } from './screens/AdminDashboard'
import { EmployeeAgent } from './screens/EmployeeAgent'
import { AllMerchantAccount } from './screens/AllMerchantAccount'
import { UserDetails } from './screens/UserDetails'

function App() {

    return (
        <>
            <Routes>
                <Route path = '/' element = {<Layout />}>
                    <Route path = 'adminDashboard' element = {<AdminDashboard />} />
                    <Route path = 'employeeAgent' element = {<EmployeeAgent />} />

                    <Route path = 'AllMerchantAccount' element = {<AllMerchantAccount />} />
                    <Route path = 'UserDetails' element = {<UserDetails />} />
                </Route>
            </Routes>
        </>
    )
}

export default App