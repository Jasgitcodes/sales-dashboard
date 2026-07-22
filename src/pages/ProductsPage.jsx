import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const ProductsPage = () => {
  const [query, setQuery] = useState("");
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <p className="m-20 text-center text-indigo-700">Loading Products...</p>
    );
  if (error)
    return <p className="m-20 text-center text-rose-700">{error?.message}</p>;

  const filtered = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-7xl overflow-hidden">
      <div className="my-4 flex flex-col gap-3 rounded-2xl border border-indigo-200 bg-white/80 p-3 shadow-[0_10px_30px_rgba(79,70,229,0.08)] sm:my-6 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-indigo-950">
            Our Products
          </h3>
          <p className="text-sm text-slate-500">
            Browse and search your catalog quickly.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-2 sm:min-w-[240px] overflow-hidden">
          <Search size={15} className="text-indigo-500" />
          <input
            type="search"
            value={query}
            placeholder="Search Products"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-indigo-200 bg-white/70 p-6 text-center text-sm text-slate-600">
            No products match “{query}”.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
