import React from 'react'
import {SideNavBar} from '../../components/SideNavBar'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const Layout = () => {
  return (

    <div className = 'layout-container body-background-color'>
        <Header />
        <SideNavBar />
        <div className = 'layout-content-container-ml'>
            <Outlet />

        </div>
    </div>
  )
}
