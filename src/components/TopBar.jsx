import React from 'react'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center border-b border-slate-300 p-6 w-full'>
            <div>
                <h3 className='text-lg font-bold'>Good Evening James</h3>
                <p className='text-slate-500'>Here's your dashboard</p>
            </div>
            <div className='w-9 h-9 flex items-center  rounded-full bg-slate-100'></div>
        </div>
    )
}

export default TopBar