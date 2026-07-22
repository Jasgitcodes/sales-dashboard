import React, { useEffect, useRef, useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const TopBar = ({ onMenuToggle, title = "Documents" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  const { pathname } = location;
  const segments = pathname.split("/").filter(Boolean);
  const { products } = useProducts();

  let acc = "";
  const crumbs =
    segments.length > 0
      ? segments.map((seg, idx) => {
          acc += `/${seg}`;
          const isLast = idx === segments.length - 1;

          const map = {
            overview: "Overview",
            orders: "Orders",
            products: "Products",
            customers: "Customers",
            settings: "Settings",
          };

          let label;
          if (isLast && title && title !== "Documents") {
            label = title;
          } else if (!isNaN(Number(seg))) {
            const id = Number(seg);
            const prod = products?.find((p) => p.id === id);
            label = prod ? prod.category : "Details";
          } else {
            label =
              map[seg] ||
              seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          }

          return { label, path: acc, isLast };
        })
      : [{ label: "Overview", path: "/", isLast: true }];

  useEffect(() => {
    function handleClick(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="relative border-b border-indigo-200/70 bg-white/85 px-3 py-3 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 sm:py-4 lg:px-8 lg:py-5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-white p-2 text-indigo-700 shadow-sm transition hover:bg-indigo-50 lg:hidden"
          >
            <Menu size={18} />
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-sm text-indigo-700 sm:flex">
            <Search size={14} />
            <span className="text-sm font-medium">Search insights</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center">
            <nav className="hidden md:flex items-center gap-2 text-xs text-indigo-400">
              {crumbs.map((c, i) => (
                <React.Fragment key={c.path}>
                  {!c.isLast ? (
                    <button
                      onClick={() => navigate(c.path)}
                      className="text-indigo-400 hover:text-indigo-600 text-xs"
                    >
                      {c.label}
                    </button>
                  ) : (
                    <span className="font-medium text-indigo-700 text-xs truncate">
                      {c.label}
                    </span>
                  )}

                  {i < crumbs.length - 1 && (
                    <span className="text-indigo-300">/</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            <nav className="flex md:hidden items-center gap-2 text-xs text-indigo-400">
              <span className="font-medium text-indigo-700 truncate">
                {crumbs[crumbs.length - 1]?.label || title}
              </span>
            </nav>

            <h1 className="text-sm font-semibold text-indigo-950 truncate">
              {crumbs[crumbs.length - 1]?.label || title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Jasgitcodes"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-indigo-200 bg-white px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 sm:inline-flex"
          >
            GitHub
          </a>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 shadow-sm transition hover:bg-indigo-50"
          >
            <Bell size={18} />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
          </button>

          <div className="relative" ref={ddRef}>
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-700 to-violet-500 text-sm font-semibold text-white shadow-md"
            >
              J
            </button>

            {open && (
              <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-indigo-200 bg-white p-2 shadow-lg">
                <button
                  onClick={() => {
                    navigate("/settings");
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-indigo-50"
                >
                  Profile settings
                </button>
                <button
                  onClick={() => {
                    navigate("/settings");
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-indigo-50"
                >
                  Workspace settings
                </button>
                <button
                  onClick={() => {
                    console.log("sign out");
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-rose-600 transition hover:bg-rose-50"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
