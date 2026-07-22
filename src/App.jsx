import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import ProductsPage from "./pages/ProductsPage";
import CustomersPage from "./pages/CustomersPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import ProductOverview from "./pages/ProductOverview";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/orders" element={<ProductsPage />} />
        <Route path="/orders/:productId" element={<ProductOverview />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
