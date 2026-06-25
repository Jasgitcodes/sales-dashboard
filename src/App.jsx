import React from 'react'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import RecentOrders from './components/RecentOrders'
import RevenueChart from './components/RevenueChart'

const App = () => {
  return (
    <div className='flex min-h-screen  w-full bg-indigo-100 text-indigo-800 font-sans'>
      <SideBar />
      <div className='flex flex-col w-full min-h-screen'>
        <TopBar />
        <main className=' bg-indigo-50 space-y-6 p-6'>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  )
}

export default App