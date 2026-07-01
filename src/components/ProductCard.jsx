import React from 'react'
import { useProducts } from '../context/ProductContext'

const ProductCard = ({ products }) => {
    return (
        <div className="min-h-72 bg-slate-100 rounded-md shadow-md p-4 flex flex-col justify-between border cursor-pointer hover:bg-indigo-100/90 hover:scale-[1.03] hover:transition-all duration-300 relative" >
            {/* <div className='rounded-md  border bg-red-200'> */}
            <img
                src={products.image}
                alt={products.title}
                className=' h-48 w-full object-cover mb-4'
            />


            <div className='absolute inset-x-4 bottom-16  flex justify-between  items-center font-sofia' >
                <p className='text-xs font-semibold font-sofia-sans'>${products.price}</p>
                <p className='text-xs font-semibold bg-indigo-200 px-2 py-1.5 max-w-20 truncate rounded-l-md'>{products.category}</p>
            </div>

            <div className='mt-6' >
                <h3 className=' text-sm font-semibold truncate'>
                    {products.title}
                </h3>
                <p className='mt-1 text-sm truncate'>{products.description}</p>

            </div>
            {/* </div> */}
        </div>
    )
}

export default ProductCard