import { createContext, useContext, useState, useEffect } from "react";


const ProductContext = createContext();


export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]) //products
    const [loading, setLoading] = useState(true) // loading
    const [error, setError] = useState(null) // error

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                setError(error, "failed to load products")
            } finally {
                setLoading(false)
            }
        }
        loadProducts()
    }, [])


    return (
        <ProductContext.Provider value={{ products, loading, error }} >
            {children}
        </ProductContext.Provider>
    )

}

export function useProducts() {
    return useContext(ProductContext)
}