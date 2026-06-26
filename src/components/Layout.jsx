import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'
import RecentOrders from './RecentOrders'
import RevenueChart from './RevenueChart'


const Layout = () => {
    return (
        <div className='flex min-h-screen font-serif text-emerald-800  w-full'>
            <SideBar />
            <div className='flex-1'>
                <TopBar />
                <main className='p-6 space-y-6 bg-emerald-100/20'>
                    <div className="grid grid-cols-4">
                        <Outlet />
                    </div>
                    {/* <Outlet /> */}
                </main>
            </div>
        </div>
    )
}

export default Layout