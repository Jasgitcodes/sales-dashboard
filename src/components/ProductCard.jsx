import React from 'react'
import { useProducts } from '../context/ProductContext'

const ProductCard = ({ products }) => {
    return (
        <div className="min-h-72 bg-slate-100 rounded-md shadow-md p-4 flex flex-col justify-between border cursor-pointer hover:bg-indigo-100/90 hover:scale-[1.03] hover:transition-all duration-300" >
            {/* <div className='rounded-md  border bg-red-200'> */}
            <img
                src={products.image}
                alt={products.title}
                className=' h-48 w-full object-cover'
            />
            <div>

                <h3 className='mt-3 text-sm font-medium truncate'>
                    {products.title}
                </h3>
                <p className='mt-1 text-sm truncate'>{products.description}</p>
                <p className='mt-1 text-sm font-medium'>${products.price}</p>
            </div>
            {/* </div> */}
        </div>
    )
}

export default ProductCard