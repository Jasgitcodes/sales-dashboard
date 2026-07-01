import React from 'react'
// import { useProducts } from '../context/ProductContext'
import { useUsers } from '../context/UserContext'

const CustomersPage = () => {

    const { users, loading, error } = useUsers()

    if (loading) return <p className='text-2xl  text-center mt-20 font-bold'>{loading}</p>
    if (error) return <p className='text-sm text-center mt-20 text-rose-700 font-medium'>{error?.message}</p>

    console.log(users)
    return (
        <div>CustomersPage</div>
    )
}

export default CustomersPage