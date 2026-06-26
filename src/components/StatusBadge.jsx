import React from 'react'

const StatusBadge = ({ status }) => {

    const Badge = status.toLowerCase()
    const colors = {
        paid: "bg-emerald-100 text-emerald-900 border-x border-emerald-500",
        pending: "bg-amber-100 text-amber-900 border-x border-amber-500",
        failed: "bg-rose-100 text-rose-900 border-x border-rose-500"
    }


    return (
        <span className={`px-3 py-1.5 rounded-full text-xs ${colors[Badge]}`}>
            {status}
        </span>
    )
}

export default StatusBadge