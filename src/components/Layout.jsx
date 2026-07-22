import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_35%),linear-gradient(135deg,_#f5f7ff_0%,_#eef2ff_100%)] text-indigo-800">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <SideBar />
        </div>

        <div
          className={`fixed inset-0 z-40 bg-indigo-950/50 transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 max-w-[85vw] transform transition-transform duration-300 ease-out lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar mobile onClose={() => setMobileMenuOpen(false)} />
        </div>

        <div className="flex-1 w-full">
          <TopBar onMenuToggle={() => setMobileMenuOpen((prev) => !prev)} />
          <main className="min-h-[calc(100vh-5.5rem)] bg-transparent p-4 sm:p-5 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
