"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark, Wordmark } from "@/components/brand";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-ink/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="w-9 h-9" />
          <div>
            <Wordmark />
            <div className="text-[7px] text-silver/70 tracking-[0.18em] uppercase mt-1">Payroll and People Management Systems</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-sm font-medium px-3.5 py-2 rounded-full transition-colors ${pathname === href ? "text-white bg-white/[0.07]" : "text-silver hover:text-white"}`}>
              {label}
            </Link>
          ))}
          <a href="https://app.nexerapayroll.co.za/login"
            className="btn-primary ml-3 text-sm font-semibold px-5 py-2 rounded-full">
            Login
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-5 h-0.5 bg-silver mb-1"></div>
          <div className="w-5 h-0.5 bg-silver mb-1"></div>
          <div className="w-5 h-0.5 bg-silver"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] px-4 py-4 space-y-1">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-2 ${pathname === href ? "text-white" : "text-silver hover:text-white"}`}>
              {label}
            </Link>
          ))}
          <a href="https://app.nexerapayroll.co.za/login"
            className="btn-primary block text-sm font-semibold px-4 py-2.5 rounded-full text-center mt-2">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
