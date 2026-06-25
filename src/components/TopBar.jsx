import React from 'react'

const TopBar = () => {
    return (
        <div className='flex items-center justify-between p-8 bg-emerald-50 border-b border-emerald-900 shadow-2xl'>
            <div>
                <h1 className='text-xl font-bold'>Good Evening James</h1>
                <p className='text-lg text-[#777]'>Here's your React App</p>
            </div>
            <div className='w-12 h-12 rounded-full bg-emerald-100'></div>
        </div>
    )
}

export default TopBar