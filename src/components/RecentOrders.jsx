import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { orders } from '../data/data'
import StatusBadge from './StatusBadge'

const RecentOrders = () => {

    const [query, setQuery] = useState("")
    const filtered = orders.filter((order) => order.customer.toLowerCase().includes(query.toLowerCase()))

    return (
        // {const Icon  < Search />}
        <div className='border rounded-2xl bg-emerald-50  border-emerald-500 shadow-md p-5'>
            <div className='flex items-center justify-between '>
                <h1 className='text-sm font-semibold'>Recent Orders</h1>
                <div className='flex items-center gap-2 border px-2 py-1.5 rounded-xl'>
                    <Search size={15} />
                    <input type="search" value="" placeholder="Search Customer"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='text-gray-400 text-sm outline-none'
                    />
                </div>

            </div>
            <table className='mt-6 w-full text-sm'>
                <thead>
                    <tr className='text-left text-gray-400 '>
                        <th className='pb-2 font-semibold'>Order</th>
                        <th className='pb-2 font-semibold'>Customer</th>
                        <th className='pb-2 font-semibold'>Amount</th>
                        <th className='pb-2 font-semibold'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((od) => {
                        return (
                            <tr key={od.id} className='border-t-2 border-emerald-100 hover:bg-slate-100'>
                                <td className='py-3 font-medium'>{od.id}</td>
                                <td className='py-3 font-medium'>{od.customer}</td>
                                <td className='py-3 font-medium'>{od.amount}</td>
                                <td className='py-3 font-medium'>
                                    <StatusBadge status={od.status} />
                                </td>

                            </tr>
                        )
                    })}

                    {filtered.length === 0 && (
                        <tr >
                            <td colSpan={4} className='py-6 font-medium text-center'> No Customers Match `{query}`</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders