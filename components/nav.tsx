"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 50 50" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="21" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeDasharray="118 14" strokeLinecap="round"/>
            <rect x="16" y="13" width="4" height="24" fill="#4338CA"/>
            <polygon points="20,13 23,13 30,37 27,37" fill="#818CF8"/>
            <rect x="30" y="13" width="4" height="24" fill="#4338CA"/>
          </svg>
          <div>
            <div className="text-[16px] leading-none tracking-tight font-bold">
              <span className="text-gray-900">Nex</span><span className="text-indigo-400 font-light">Era</span>
            </div>
            <div className="text-[7px] text-gray-400 tracking-wide">Payroll and People Management Systems</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-sm font-medium transition-colors ${pathname === href ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"}`}>
              {label}
            </Link>
          ))}
          <a href="https://app.nexerapayroll.co.za/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Login
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-indigo-600 py-1">
              {label}
            </Link>
          ))}
          <a href="https://app.nexerapayroll.co.za/login"
            className="block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
