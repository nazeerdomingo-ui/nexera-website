import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-3">
              <div className="flex items-center gap-3" aria-label="NexEra Logo">
                <svg viewBox="0 0 50 50" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="21" fill="none" stroke="#62589C" strokeWidth="2.5" strokeDasharray="118 14" strokeLinecap="round"/>
                  <rect x="16" y="13" width="4" height="24" fill="#62589C"/>
                  <polygon points="20,13 23,13 30,37 27,37" fill="#8687BE"/>
                  <rect x="30" y="13" width="4" height="24" fill="#62589C"/>
                </svg>
                <div className="text-2xl leading-none tracking-tight font-bold">
                  <span className="text-white">Nex</span><span className="text-indigo-400">Era</span>
                </div>
              </div>
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
