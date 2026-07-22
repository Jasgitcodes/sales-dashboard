import React from "react";
import { chartData } from "../data/data";

const RevenueChart = () => {
  const max = Math.max(...chartData.map((data) => data.value));
  return (
    <div className="rounded-2xl border border-indigo-200 bg-white/90 p-4 shadow-[0_15px_40px_rgba(79,70,229,0.08)] sm:p-5">
      <h3 className="text-lg font-semibold text-indigo-950">
        Revenue Chart (last 6 months)
      </h3>

      <div className="mt-6 flex h-44 items-end justify-between gap-2 sm:gap-3">
        {chartData.map((data) => {
          const height = (data.value / max) * 100;

          return (
            <div
              key={data.month}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2 rounded-xl border border-indigo-100 bg-indigo-50/80 p-1"
            >
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-indigo-800 to-indigo-500"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs font-medium text-slate-600">
                {data.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueChart;
