import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'

const Layout = () => {
    return (
        <div className='flex min-h-screen bg-indigo-50 text-indigo-800 font-gabriela'>
            <SideBar />
            <div className='flex-1 bg-indigo-100'>
                <TopBar />
                <main className=' bg-indigo-100/50 space-y-6 p-5'>
                    {/* <div className="grid grid-cols-4 gap-4"> */}
                    <Outlet />
                    {/* </div> */}
                </main>
            </div>
        </div>
    )
}

export default Layout