import React from 'react'

const TopBar = () => {
    return (
        <div className='flex items-center justify-between p-8 bg-emerald-50 border-b border-emerald-500 shadow-sm'>
            <div>
                <h1 className='text-xl font-bold'>Good Evening James</h1>
                <p className=' text-[#777]'>Here's your React App</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-emerald-100'></div>
        </div>
    )
}

export default TopBar