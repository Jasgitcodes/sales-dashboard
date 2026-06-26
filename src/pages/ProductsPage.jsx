import React from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
    const { products, loading, error } = useProducts()

    if (loading) return <p className=' text-center m-20 text-indigo-700'>Loading Products...</p>
    if (error) return <p className=' text-center m-20 text-rose-700'>{error}</p>
    return (

        <div className='grid grid-cols-4 gap-4'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} products={product}  />
                )
            })}
        </div>
    )
}

export default ProductsPage