import React from 'react'

const StatusBadge = ({ status }) => {

    const toLower = status.toLowerCase()
    const color = {
        paid: "bg-emerald-100 text-emerald-800 rounded-full",
        pending: "bg-amber-100 text-amber-800 rounded-full",
        failed: "bg-rose-100 text-rose-800 rounded-full",
    }
    return (
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${color[toLower]}`}>{status}</span>
    )
}

export default StatusBadge