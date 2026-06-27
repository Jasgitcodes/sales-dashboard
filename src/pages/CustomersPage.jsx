import React from 'react'
import { useProducts } from '../context/ProductContext'

const CustomersPage = () => {

    const { products, loading, error } = useProducts()
    return (
        <div>CustomersPage</div>
    )
}

export default CustomersPage