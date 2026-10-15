import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import HeroCarousel from "@/components/hero-carousel";
import { Rings } from "@/components/brand";
import { IconTile, type IconName } from "@/components/icons";

type Feature = { title: string; desc: string; icon: IconName; addon?: boolean };

const features: Feature[] = [
  { title: "PAYE, UIF & SDL", desc: "Automatic tax calculations, EMP201 returns, and IRP5/IT3(a) certificates generated and ready for eFiling.", icon: "landmark" },
  { title: "UIF Submissions", desc: "Generate UIF declaration files (UI-19) in the correct format for Department of Labour submission.", icon: "clipboard" },
  { title: "Banking Payment Files", desc: "Export bank-ready payment files to pay employees directly — compatible with major South African banks.", icon: "bank" },
  { title: "Contract Alerts", desc: "See at a glance which fixed-term contracts and probation periods are ending soon, so you never miss a renewal or end date.", icon: "bell" },
  { title: "Leave Management", desc: "Annual, sick, and family responsibility leave — tracked, approved, and balanced automatically.", icon: "calendar" },
  { title: "Multi-Company", desc: "Manage multiple companies or entities from one login with fully separate data and reporting.", icon: "building" },
  { title: "Role-Based Access", desc: "Company Admin, HR Manager, Accountant, and Employee roles — each sees only what they need.", icon: "shield" },
  { title: "Employee Document Vault", desc: "Upload and store contracts, IDs, certificates, and HR documents securely against each employee's profile.", icon: "folder" },
  { title: "Multi Cost Centres", desc: "Allocate employees and payroll costs across multiple departments or cost centres for accurate reporting.", icon: "pie" },
  { title: "Payroll Management Outsourcing", desc: "Don't want to run payroll yourself? Let NexEra manage it for you — we handle everything end to end.", icon: "people" },
  { title: "Employee Self-Service Portal (SSP)", desc: "Give employees their own secure portal to view payslips, apply for leave, and download tax documents.", icon: "monitor", addon: true },
];

const ticker = ["PAYE", "UIF", "SDL", "EMP201", "EMP501", "IRP5", "IT3(a)", "UI-19", "Bank payment files", "Leave", "Payslips", "Audit trail", "Cost centres", "Multi-company"];

const previewPlans = [
  { name: "Free Trial", price: "R0", employees: "Up to 10 employees", trial: true },
  { name: "Starter", price: "R999", employees: "Up to 10 employees" },
  { name: "Professional", price: "R1 599", employees: "Up to 50 employees", popular: true },
  { name: "Business", price: "R2 599", employees: "Up to 200 employees" },
  { name: "Enterprise", price: "Custom", employees: "200+ employees" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroCarousel />

        {/* Compliance ticker */}
        <div className="relative border-y border-white/[0.06] bg-ink-2 py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-10 pr-10 font-display text-sm tracking-[0.2em] uppercase text-silver/70 whitespace-nowrap">
                {t}<span className="w-1 h-1 rounded-full bg-lilac/60" />
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <section className="relative py-24 sm:py-28 bg-ink overflow-hidden">
          <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-amethyst/15 blur-[140px]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal">
              <div className="eyebrow mb-4">Features</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Built for South African payroll</h2>
              <p className="text-silver max-w-xl mx-auto">From UIF submissions to banking files, IRP5s to contract alerts — NexEra covers every part of your payroll process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className={`reveal relative p-7 transition-all duration-300 hover:-translate-y-1 ${f.addon ? "card-lit lg:col-span-2" : "card hover:border-lilac/40 hover:shadow-[0_20px_60px_-25px_rgba(125,112,214,0.6)]"}`}>
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <IconTile name={f.icon} />
                    {f.addon && <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white bg-amethyst/50 ring-1 ring-lilac/40 px-3 py-1 rounded-full whitespace-nowrap">Add-on</span>}
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-silver/90 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section className="relative py-24 sm:py-28 bg-ink-2 border-t border-white/[0.04] overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <div className="eyebrow mb-4">Pricing</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
              <p className="text-silver mb-14">Start free for 30 days. Paid plans from R999/month. No hidden fees.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12 items-center">
              {previewPlans.map((plan) => (
                <div key={plan.name} className={`reveal p-6 text-left transition-transform duration-300 hover:-translate-y-1 ${plan.popular ? "card-lit lg:py-10" : plan.trial ? "card !border-emerald-400/40" : "card"}`}>
                  <div className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-3 ${plan.popular ? "text-haze" : plan.trial ? "text-emerald-400" : "invisible"}`}>
                    {plan.popular ? "Most Popular" : plan.trial ? "30 Days Free" : "Plan"}
                  </div>
                  <div className="font-display font-semibold text-lg text-white mb-2">{plan.name}</div>
                  <div className={`font-display text-3xl font-bold mb-1 ${plan.trial ? "text-emerald-400" : "text-white"}`}>{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-silver/70">/mo</span>}</div>
                  <div className="text-sm text-silver/80">{plan.employees}</div>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="btn-primary inline-block font-semibold px-8 py-3.5 rounded-full">
              See Full Pricing
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-ink px-4 sm:px-6">
          <div className="reveal relative overflow-hidden max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a2448] via-[#171329] to-ink px-6 py-20 text-center text-white">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amethyst-bright/30 blur-[110px]" />
            <Rings className="w-[460px] -right-40 -bottom-60" />
            <Rings className="w-[300px] -left-36 -top-40 opacity-50" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">Ready to simplify your payroll?</h2>
              <p className="text-haze/80 text-lg mb-10">Join South African businesses already using NexEra to manage their people and payroll.</p>
              <a href="/contact"
                className="bg-white text-ink hover:bg-haze font-semibold px-9 py-4 rounded-full transition-colors text-lg inline-block shadow-[0_15px_40px_-10px_rgba(255,255,255,0.35)]">
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
