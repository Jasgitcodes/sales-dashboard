import React, { useState } from 'react'
import { navItems } from '../data/data'

const SideBar = () => {

    const [active, setActive] = useState("Overview")
    return (
        <div className='flex flex-col border-l  border-indigo-300 w-60 p-5 text-sm gap-6'>
            <div className='flex items-center justify-center -2' >
                <div className='w-6 h-6 mr-2  bg-indigo-800 rounded-lg'></div>
                <h3 className='text-lg font-semibold'>Developer</h3>
            </div>
            <nav className='mt-6 flex flex-col gap-2 '>
                {navItems.map((navItem) => {
                    const Icon = navItem.icon
                    const isActive = navItem.name === active

                    return (
                        <button
                            key={navItem.name}
                            onClick={() => setActive(navItem.name)}
                            className={`flex w-full gap-2 px-3 py-2 rounded-md ${isActive ? "bg-indigo-200" : "hover:bg-indigo-200/40"}`}
                        >
                            <Icon size={20} />
                            {navItem.name}
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}

export default SideBar