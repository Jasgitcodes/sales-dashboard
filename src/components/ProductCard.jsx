import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const rating = products?.rating?.rate ?? 0;
  const reviewCount = products?.rating?.count ?? 0;

  return (
    <button
      type="button"
      onClick={() => navigate(`/orders/${products.id}`)}
      className="group flex min-h-[18rem] flex-col justify-between rounded-2xl border border-indigo-100 bg-white/90 p-4 text-left shadow-[0_12px_35px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(79,70,229,0.14)]"
    >
      <img
        src={products.image}
        alt={products.title}
        className="mb-4 h-40 w-full rounded-xl object-cover"
      />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 text-xs">
          <p className="rounded-full bg-indigo-50 px-2.5 py-1 font-semibold text-indigo-700">
            ${products.price}
          </p>
          <p className="max-w-[140px] truncate rounded-full bg-indigo-200 px-2 py-1.5 font-semibold">
            {products.category}
          </p>
        </div>

        <div>
          <h3 className="truncate text-sm font-semibold">{products.title}</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-amber-600">
            <span className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={`${products.id}-${index}`}>
                  {index < Math.round(rating) ? "★" : "☆"}
                </span>
              ))}
            </span>
            <span className="text-xs font-medium text-slate-600">
              {rating.toFixed(1)} ({reviewCount})
            </span>
          </div>
          <p className="mt-1 line-clamp-3 text-sm text-slate-600">
            {products.description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
