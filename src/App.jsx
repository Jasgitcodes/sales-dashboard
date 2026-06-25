import React from 'react'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import RecentOrders from './components/RecentOrders'
import RevenueChart from './components/RevenueChart'

const App = () => {
  return (
    <div className='flex justify-center min-h-full font-serif text-emerald-800'>
      <SideBar />

      <div className='flex flex-col w-full h-screen'>
        <TopBar />
        <main className='h-full flex flex-col gap-3 bg-slate-50 p-8'>
          <RecentOrders />
          <RevenueChart />
        </main>
      </div>
    </div>
  )
}

export default App