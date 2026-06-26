import React from 'react'

const StatusBadge = ({ status }) => {

    const toLower = status.toLowerCase()
    const color = {
        paid: "bg-emerald-100  text-xs font-small text-emerald-800 px-3 py-1.5 rounded-full",
        pending: "bg-amber-100  text-xs font-small text-amber-800 px-3 py-1.5 rounded-full",
        failed: "bg-rose-100  text-xs font-small text-rose-800 px-3 py-1.5 rounded-full",
    }
    return (
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${color[toLower]}`}>{status}</span>
    )
}

export default StatusBadge