import React, { useState } from 'react'
import { navItems } from '../data/data'

const SideBar = () => {

    const [active, setActive] = useState("Overview")
    return (
        <aside className='w-60 px-4 bg-emerald-950 text-emerald-100 py-8'>
            <div className="flex items-center-safe px-2">
                <div className='w-8 h-8 shadow-md rounded-lg mr-3 bg-emerald-200 shadow-emerald-700'></div>
                <p className='text-xl font-bold'>Developer</p>
            </div>

            <nav className='mt-8 flex flex-col gap-1'>
                {navItems.map((navItem) => {
                    const Icon = navItem.icon
                    const isActive = navItem.name === active
                    return (
                        <button
                            key={navItem.name}
                            onClick={() => {
                                setActive(navItem.name)
                            }}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium 
                                    ${isActive ? "bg-emerald-800/50 text-white" : "hover:bg-emerald-800/30 "}`}
                        >
                            <Icon size={20} />
                            {navItem.name}
                        </button>
                    )

                })}

            </nav>
        </aside>
    )
}

export default SideBar