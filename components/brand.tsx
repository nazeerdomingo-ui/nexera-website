/* Shared brand pieces taken from the business card: the circled-N mark,
   the concentric rings that bleed off the card's corner, and page headers. */

export function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="25" cy="25" r="21" fill="none" stroke="#62589C" strokeWidth="2.5" strokeDasharray="118 14" strokeLinecap="round" />
      <rect x="16" y="13" width="4" height="24" fill="#62589C" />
      <polygon points="20,13 23,13 30,37 27,37" fill="#8687BE" />
      <rect x="30" y="13" width="4" height="24" fill="#62589C" />
    </svg>
  );
}

export function Wordmark({ size = "text-[17px]" }: { size?: string }) {
  return (
    <div className={`font-display font-bold leading-none ${size}`}>
      <span className="text-white">Nex</span><span className="text-lilac">Era</span>
    </div>
  );
}

/* The card's thick charcoal ring with a thin outer ring, as a corner ornament */
export function Rings({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <circle cx="200" cy="200" r="150" fill="none" stroke="#2E3234" strokeOpacity="0.75" strokeWidth="44" />
      <circle cx="200" cy="200" r="190" fill="none" stroke="#BBBDBF" strokeOpacity="0.22" strokeWidth="1.5" />
    </svg>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 text-center">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-amethyst/30 blur-[120px]" />
      <Rings className="w-[520px] -right-40 -bottom-64 opacity-80" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 animate-rise">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">{title}</h1>
        <p className="text-lg text-haze/80">{subtitle}</p>
      </div>
    </section>
  );
}
