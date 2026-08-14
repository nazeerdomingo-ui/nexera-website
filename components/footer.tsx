import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-3">
              <Image src="/nexera-logo.png" alt="NexEra Logo" width={140} height={50} className="object-contain" />
            </div>
            <p className="text-sm">Payroll and People Management Systems for South African businesses.</p>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Quick Links</div>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-white transition-colors">Home</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Contact</div>
            <div className="space-y-2 text-sm">
              <p>info@nexerapayroll.co.za</p>
              <p>+27 69 857 4895</p>
              <p>Mon–Fri, 8:00am – 5:00pm</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-xs">
          © {new Date().getFullYear()} NexEra Payroll. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
