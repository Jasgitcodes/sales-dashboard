import React from 'react'
import { chartData } from '../data/data'

const RevenueChart = () => {
    const max = Math.max(...chartData.map((data) => data.value))

    return (
        <div className='border rounded-2xl bg-emerald-50  border-emerald-500 p-5'>
            <h1 className='text-sm font-semibold'>Revenue (6 months ago)</h1>

            <div className='mt-6 flex items-end justify-between gap-3 h-40'>
                {chartData.map((data) => {
                    const height = (data.value / max) * 100

                    return (
                        <div
                            key={data.month}
                            className='flex flex-1 flex-col justify-end items-center gap-2 h-full'
                        >
                            <div
                                className='w-full rounded-t-md bg-emerald-800'
                                style={{ height: `${height}%` }}
                            />
                            <span className='text-xs '>{data.month}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RevenueChart