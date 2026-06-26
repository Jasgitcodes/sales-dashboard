import React from 'react'
import { chartData } from '../data/data'

const RevenueChart = () => {
    const max = Math.max(...chartData.map((data) => data.value))
    return (
        <div className='border border-indigo-200 rounded-xl bg-indigo-50 p-5 shadow-sm '>
            <h3 className='font-medium'>Revenue Chart (less thean 6 month)</h3>

            <div className='mt-6 h-40 flex items-end justify-between gap-3'>

                {chartData.map((data) => {
                    const height = (data.value / max) * 100

                    return (

                        <div
                            key={data.month}
                            className='flex flex-1 border-t border-x border-indigo-200 rounded-md flex-col justify-end items-center gap-2 h-full'
                        >
                            <div
                                className='w-full rounded-t-xl bg-indigo-900'
                                style={{ height: `${height}%` }}
                            >

                            </div>
                            <span className='text-xs items-center'>{data.month}</span>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default RevenueChart