import { Search } from "lucide-react";
import React, { useState } from "react";
import { orders } from "../data/data";
import StatusBadge from "./StatusBadge";
const RecentOrders = () => {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const filtered = orders.filter((order) => {
    return (
      order.customer.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-indigo-200 bg-white/90 p-4 shadow-[0_15px_40px_rgba(79,70,229,0.08)] sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-indigo-950">Recent Orders</h3>
        <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm">
          <Search size={15} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search Customer's Order`}
            className="flex-1 text-sm outline-0 placeholder:text-xs placeholder:italic"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] mt-6">
          <thead className="text-xs ">
            <tr className="text-left">
              <th className="pb-3">Order</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {filtered.map((order) => {
              return (
                <tr key={order.id} className="transition hover:bg-indigo-50/80">
                  <td className="py-3 pl-2 font-medium border-t border-indigo-200">
                    {order.id}
                  </td>
                  <td className="py-3 pl-2 font-medium border-t border-indigo-200">
                    {order.customer}
                  </td>
                  <td className="py-3 pl-2 font-medium border-t border-indigo-200">
                    {order.amount}
                  </td>
                  <td className="py-3 border-t border-indigo-200">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              );
            })}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-6 font-medium text-center text-lg"
                >
                  No customers match `{query}`
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
