import React from 'react'
import RevenueChart from '../components/RevenueChart'
import RecentOrders from '../components/RecentOrders'
import { useProducts } from '../context/ProductContext'

const OverviewPage = () => {

    // const { products, loading, error } = useProducts()

    // console.log(products)
    return (
        <div className='col-span-4 flex flex-col space-y-6'>
            <RevenueChart />
            <RecentOrders />
        </div>

    )
}

export default OverviewPage