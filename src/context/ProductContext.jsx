import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

// import React from 'react'
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();
        const normalized = Array.isArray(data)
          ? data.map((product) => ({
              ...product,
              id: product.id ?? product._id,
            }))
          : [];

        setProducts(normalized);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
