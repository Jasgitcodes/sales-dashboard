import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Tag, DollarSign } from "lucide-react";
import { useProducts } from "../context/ProductContext";

const ProductOverview = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <p className="m-20 text-center text-indigo-700">Loading product...</p>
    );
  if (error)
    return <p className="m-20 text-center text-rose-700">{error?.message}</p>;

  const product = products.find((item) => item.id === Number(productId));
  const rating = product?.rating?.rate ?? 0;
  const reviewCount = product?.rating?.count ?? 0;

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl rounded-xl border border-indigo-200 bg-white/80 p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-indigo-900">
          Product not found
        </h2>
        <button
          type="button"
          onClick={() => navigate("/orders")}
          className="mt-4 rounded-md bg-indigo-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-800"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-2xl border border-indigo-200 bg-white/90 p-4 shadow-sm sm:p-6 lg:p-8">
      <button
        type="button"
        onClick={() => navigate("/orders")}
        className="inline-flex items-center gap-2 self-start rounded-full border border-indigo-200 px-3 py-2 text-sm text-indigo-700 transition hover:bg-indigo-100"
      >
        <ArrowLeft size={16} />
        Back to products
      </button>

      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 overflow-clip">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 w-full max-w-md rounded-xl object-contain sm:h-80 transition-scale ease-linear duration-500  hover:scale-130"
          />
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              <Tag size={14} />
              {product.category}
            </p>
            <h2 className="text-2xl font-semibold text-indigo-950">
              {product.title}
            </h2>
            <div className="flex items-center gap-2 text-sm text-amber-600">
              <span className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={`${product.id}-${index}`}>
                    {index < Math.round(rating) ? "★" : "☆"}
                  </span>
                ))}
              </span>
              <span className="font-medium text-slate-600">
                {rating.toFixed(1)} · {reviewCount} reviews
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-indigo-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-indigo-200">
                <DollarSign size={16} />
                Price
              </div>
              <div className="mt-2 text-3xl font-semibold">
                ${product.price}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-100"
              >
                Place order
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-white/70 p-4 text-sm text-slate-600">
            <p className="font-semibold text-indigo-900">Why it stands out</p>
            <ul className="mt-2 space-y-2">
              <li>• Premium quality for everyday use</li>
              <li>• Fast, reliable delivery and support</li>
              <li>• Designed to fit modern dashboards and workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
