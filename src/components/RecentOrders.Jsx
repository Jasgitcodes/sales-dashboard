import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { orders } from '../data/data'

const RecentOrders = () => {

    const [query, setQuery] = useState("")
    const filtered = orders.filter((order) => order.customer.toLowerCase().includes(query.toLowerCase()))
    const badge = {
        paid: "px-3 py-1.5 bg-emerald-100 text-emerald-900 border-x border-emerald-500 rounded-full",
        pending: "px-3 py-1.5 bg-indigo-100 text-indigo-900 border-x border-indigo-500 rounded-full",
        failed: "px-3 py-1.5 bg-rose-100 text-rose-900 border-x border-rose-500 rounded-full"
    }

    return (
        <div className='p-5 border bg-indigo-50 border-indigo-300 flex flex-col gap-3 rounded-xl shadow-sm '>
            <div className='flex items-center  justify-between gap-2'>
                <h3 className='font-medium'>Recent Orders</h3>
                <div className='flex items-center text-sm border gap-2 px-3 py-1.5 rounded-md'>
                    <Search size={15} />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={`Search Customer's Order`}
                        className=' flex-1 text-sm outline-0 placeholder:text-xs placeholder:italic'
                    />
                </div>
            </div>

            <table className='mt-6 '>
                <thead className='text-xs '>
                    <tr className='text-left p-6'>
                        <th className='pb-3'>Order</th>
                        <th className='pb-3'>Customer</th>
                        <th className='pb-3'>Amount</th>
                        <th className='pb-3'>Status</th>
                    </tr>
                </thead>
                <tbody className='text-xs'>
                    {filtered.map((order) => {
                        const statusBadge = order.status.toLowerCase()
                        return (
                            <tr key={order.id} className='hover:bg-indigo-200/40 '>
                                <td className='py-3 pl-2 font-medium border-t border-indigo-200'>{order.id}</td>
                                <td className='py-3 pl-2 font-medium border-t border-indigo-200'>{order.customer}</td>
                                <td className='py-3 pl-2 font-medium border-t border-indigo-200'>{order.amount}</td>
                                <td className='py-3  border-t border-indigo-200'>

                                    <span className={`${badge[statusBadge] ?? "bg-indigo-900"} text-xs`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>


                        )
                    })}

                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan={4} className='py-6 font-medium text-center text-lg'>No customers match `{query}`</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders