import React from 'react'
import RevenueChart from '../components/RevenueChart'
import RecentOrders from '../components/RecentOrders'

const Overview = () => {
    return (
        <div className='col-span-4 space-y-6'>
            <RevenueChart />
            <RecentOrders />
        </div>
    )
}

export default Overview