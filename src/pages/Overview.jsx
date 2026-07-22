import React from "react";
import RevenueChart from "../components/RevenueChart";
import RecentOrders from "../components/RecentOrders";

const Overview = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <RevenueChart />
      <RecentOrders />
    </div>
  );
};

export default Overview;
