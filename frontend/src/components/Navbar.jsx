import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const links = [
    {
      to: "/products",
      data: "Products",
    },
    {
      to: "/pricing",
      data: "Pricing",
    },
    {
      to: "/support",
      data: "Support",
    },
    {
      to: "/about",
      data: "About",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link className="w-60" to="/">
            <img className="w-40" src="/logo.svg" alt="" />
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex!">
          {links.map((item,idx)=> (
            <Link key={idx} className="text-sm font-medium text-slate-700 hover:text-slate-900" to={item.to}>{item.data}</Link>
          ))}
          
          
        </div>

        <div className="hidden items-center gap-3 md:flex!">
          <Link to={'/signup'} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
            Sign in
          </Link>
          <button className="rounded-lg bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm ">
            Open account
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/60 bg-white/80 md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4">
             {links.map((item,idx)=> (
            <Link key={idx} className="text-sm font-medium text-slate-700 hover:text-slate-900" to={item.to}>{item.data}</Link>
          ))}
            <div className="mt-2 flex items-center gap-2">
              <Link to={''} className="flex-1 text-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Sign in
              </Link>
              <Link to={''} className="flex-1 text-center rounded-lg bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white">
                Open account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
