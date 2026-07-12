import { AlertCircle, AlertCircleIcon, AlertTriangle, ArrowBigLeft, ArrowLeft, HomeIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Overview from './Overview'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className=' w-sm max-w-md  mx-auto my-30 flex flex-col justify-between items-center gap-6 p-6 rounded-xl shadow-xs'>

            <AlertTriangle size={40}/>
            <div className='flex flex-col gap-5 text-center items-center'>
                <h1 className='text-2xl font-semibold'>404 NOT FOUND</h1>
                <p className='text-md '>The page you're looking for may have been moved or does not exist pls check back later</p>

                <button className='bg-indigo-800 flex items-center gap-0.5 text-white py-2 px-4 rounded-xl hover:bg-indigo-800/90 cursor-pointer' onClick={() => {
                    console.log("clicked")
                    navigate("/")

                }}>
                    <ArrowLeft size={20}/>
                    <p>Home </p>
                </button>
            </div>

        </div>
    )
}

export default NotFound