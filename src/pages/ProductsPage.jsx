import React, { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import { Search } from 'lucide-react'

const ProductsPage = () => {
    const [query, setQuery] = useState("")
    const { products, loading, error } = useProducts()

    if (loading) return <p className=' text-center m-20 text-indigo-700'>Loading Products...</p>
    if (error) return <p className=' text-center m-20 text-rose-700'>{error?.message}</p>

    const filtered = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    )

    console.log(products)
    return (

        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-4 flex items-center justify-between px-3 my-6'>
                <h3 className='font-semibold text-md'>Our Products</h3>
                <div className='flex items-center gap-2 px-2 py-1.5 border rounded-md'>
                    <Search size={15} />
                    <input
                        type="search"
                        value={query}
                        placeholder='Search Products'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none'
                    />
                </div>
            </div>
            {filtered.map((product) => {
                return (
                    <ProductCard key={product.id} products={product} />
                )
            })}
        </div>
    )
}

export default ProductsPage