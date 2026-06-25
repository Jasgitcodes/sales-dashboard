import React from 'react'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import RecentOrders from './components/RecentOrders'
import RevenueChart from './components/RevenueChart'

const App = () => {
  return (
    <div className='flex min-h-screen bg-indigo-50 text-indigo-800 font-sans'>
      <SideBar />
      <div className='flex-1'>
        <TopBar />
        <main className='h-full bg-indigo-100/50 space-y-6 p-5'>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  )
}

export default App