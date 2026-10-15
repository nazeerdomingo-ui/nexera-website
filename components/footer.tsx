import Link from "next/link";
import { LogoMark, Rings, Wordmark } from "@/components/brand";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink border-t border-white/[0.06] text-silver/80 pt-16 pb-10">
      <Rings className="w-[460px] -right-44 -bottom-56 opacity-60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4" role="img" aria-label="NexEra Logo">
              <LogoMark className="w-11 h-11" />
              <div>
                <Wordmark size="text-2xl" />
                <div className="text-[10px] text-silver/85 tracking-[0.18em] uppercase mt-1.5">Payroll and People Management Systems</div>
              </div>
            </div>
            <p className="text-sm">Payroll and People Management Systems for South African businesses.</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Quick Links</div>
            <div className="space-y-2.5 text-sm">
              <Link href="/" className="block hover:text-white transition-colors">Home</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Contact</div>
            <div className="space-y-2.5 text-sm">
              <p>info@nexerapayroll.co.za</p>
              <p>+27 69 857 4895</p>
              <p>Mon–Fri, 8:00am – 5:00pm</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 text-center text-xs text-silver/80">
          © {new Date().getFullYear()} NexEra Payroll. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
