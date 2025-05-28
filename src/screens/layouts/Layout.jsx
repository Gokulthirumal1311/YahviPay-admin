import React from 'react'
import {SideNavBar} from '../../components/SideNavBar'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const Layout = () => {
  return (

    <div className = 'p-2 bg-[#dee2e6] h-screen'>
        <Header />
        <SideNavBar />
        <div className = 'lg:ml-72'>
            <Outlet />

        </div>
    </div>
  )
}
