import React from 'react'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center border-b border-slate-300 p-8 shadow-md'>
            <div>
                <h3 className='text-lg font-bold'>Good Evening James</h3>
                <p className='text-slate-500'>Here's your dashboard</p>
            </div>
            <div className='w-12 h-12 flex items-center  rounded-full bg-indigo-900'></div>
        </div>
    )
}

export default TopBar