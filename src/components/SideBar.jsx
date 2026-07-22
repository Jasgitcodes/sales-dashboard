import React, { useState } from "react";
import { navItems } from "../data/data";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const SideBar = ({ mobile = false, onClose }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [openGroups, setOpenGroups] = useState({ main: true, projects: true });

  const getActiveName = () => {
    if (pathname === "/" || pathname.startsWith("/overview")) return "Overview";
    if (pathname.startsWith("/orders")) return "Orders";
    if (pathname.startsWith("/customers")) return "Customers";
    if (pathname.startsWith("/settings")) return "Settings";
    return "Overview";
  };

  const active = getActiveName();

  return (
    <aside
      className={`flex h-full flex-col ${mobile ? "w-64" : "w-60"} bg-indigo-900 text-sm text-white shadow-xl`}
    >
      <div className="h-screen fixed gap-y-4 flex flex-col px-4 py-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-8 w-8 rounded-lg bg-indigo-800 flex items-center justify-center font-bold">
            S
          </div>
          <div>
            <h3 className="text-base font-semibold">Sales Dashboard</h3>
            <p className="text-xs text-indigo-200">Enterprise</p>
          </div>
        </div>

        <div className="overflow-auto px-1">
          <div className="mt-3">
            <div className="flex items-center justify-between px-2 text-xs text-indigo-300">
              <span>Platform</span>
              <button
                className="rounded p-1 hover:bg-indigo-800/40"
                onClick={() => setOpenGroups((s) => ({ ...s, main: !s.main }))}
              >
                <ChevronDown
                  size={14}
                  className={`${openGroups.main ? "rotate-180" : "rotate-0"} transition-transform`}
                />
              </button>
            </div>

            {openGroups.main && (
              <nav className="mt-2 flex flex-col gap-1">
                {navItems.slice(0, 4).map((navItem) => {
                  const Icon = navItem.icon;
                  return (
                    <NavLink
                      to={navItem.to}
                      key={navItem.name}
                      onClick={() => {
                        if (mobile && onClose) onClose();
                      }}
                      className={({ isActive: linkActive }) => {
                        const activeClass = linkActive
                          ? "bg-indigo-200/20 text-white font-medium"
                          : "text-indigo-100 hover:bg-indigo-800/30";
                        return `flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors duration-150 ${activeClass}`;
                      }}
                    >
                      <Icon size={16} />
                      <span className="truncate">{navItem.name}</span>
                    </NavLink>
                  );
                })}
              </nav>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between px-2 text-xs text-indigo-300">
              <span>Projects</span>
              <button
                className="rounded p-1 hover:bg-indigo-800/40"
                onClick={() =>
                  setOpenGroups((s) => ({ ...s, projects: !s.projects }))
                }
              >
                <ChevronDown
                  size={14}
                  className={`${openGroups.projects ? "rotate-180" : "rotate-0"} transition-transform`}
                />
              </button>
            </div>

            {openGroups.projects && (
              <div className="mt-2 flex flex-col gap-1 px-1">
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-800/30">
                  <span className="h-2.5 w-2.5 rounded bg-indigo-300" />
                  Design Engineering
                </button>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-800/30">
                  <span className="h-2.5 w-2.5 rounded bg-indigo-300" />
                  Sales & Marketing
                </button>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-800/30">
                  <span className="h-2.5 w-2.5 rounded bg-indigo-300" />
                  Travel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto px-1">
          <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-indigo-800/30">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-700 to-violet-500 flex items-center justify-center text-white font-semibold">
              S
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">shadcn</div>
              <div className="text-xs text-indigo-200">me@example.com</div>
            </div>
            <div className="text-indigo-200">⋮</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
