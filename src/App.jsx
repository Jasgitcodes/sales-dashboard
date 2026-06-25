import React from 'react'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import RecentOrders from './components/RecentOrders'
import RevenueChart from './components/RevenueChart'

const App = () => {
  return (
    <div className='flex justify-center min-h-screen font-serif text-emerald-800 '>
      <SideBar />
      <div className='flex-1'>
        <TopBar />
        <main className='p-6 space-y-6 bg-emerald-100/20'>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  )
}

export default App