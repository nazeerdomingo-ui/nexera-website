import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { PageHeader, Rings } from "@/components/brand";
import { Icon, IconTile, type IconName } from "@/components/icons";

const plans = [
  {
    name: "Free Trial",
    price: "R0",
    employees: "Up to 10 employees",
    annualFee: "No annual service fee",
    trial: true,
    features: ["Full access for 30 days", "Payroll processing", "Payslip generation", "Leave management", "UIF & PAYE calculations", "Email support"],
  },
  {
    name: "Starter",
    price: "R999",
    employees: "Up to 10 employees",
    annualFee: "R5 000",
    features: ["Payroll processing", "Payslip generation", "Leave management", "UIF & PAYE calculations", "Email support"],
  },
  {
    name: "Professional",
    price: "R1 599",
    employees: "Up to 50 employees",
    annualFee: "R10 000",
    popular: true,
    features: ["Everything in Starter", "Multi-user access", "Role-based permissions", "Audit trail", "Reports & analytics", "Priority support"],
  },
  {
    name: "Business",
    price: "R2 599",
    employees: "Up to 200 employees",
    annualFee: "R15 000",
    features: ["Everything in Professional", "Advanced reporting", "Custom integrations", "Dedicated account manager", "Phone support", "SLA guarantee"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    employees: "200+ employees",
    annualFee: "R20 000+",
    features: ["Everything in Business", "Custom development", "On-site training", "White-label options", "API access", "24/7 support"],
  },
];
const outsourcingTiers = [
  { employees: "1 – 10 employees", price: "R5 999", note: "per month", setupFee: "R4 999" },
  { employees: "11 – 25 employees", price: "R8 999", note: "per month", setupFee: "R7 999" },
  { employees: "26 – 50 employees", price: "R12 999", note: "per month", setupFee: "R11 999" },
  { employees: "51 – 100 employees", price: "R15 999", note: "per month", setupFee: "R15 999" },
  { employees: "101 – 1 000+ employees", price: "Custom", note: "contact us for a quote", setupFee: "Custom" },
];

const outsourcingSteps: { title: string; desc: string; icon: IconName }[] = [
  { title: "We Calculate", desc: "PAYE, UIF, SDL, and all deductions calculated accurately every month.", icon: "calc" },
  { title: "We Submit", desc: "EMP201 returns, UIF declarations, and IRP5 certificates handled on your behalf.", icon: "send" },
  { title: "We Report", desc: "Payslips distributed and management reports delivered — nothing for you to do.", icon: "chart" },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Pricing" title="Simple, transparent pricing" subtitle="No hidden fees. Cancel anytime. All plans include an annual service fee." />

        <section className="pb-24 bg-ink">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white mb-3">Subscription Plans</h2>
              <p className="text-silver max-w-2xl mx-auto">Choose the plan that fits your business. All plans include full access to NexEra&apos;s payroll and people management features.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
              {plans.map((plan) => (
                <div key={plan.name} className={`reveal p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${plan.popular ? "card-lit lg:scale-105 z-10" : plan.trial ? "card !border-emerald-400/40" : "card"}`}>
                  <div className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-3 ${plan.popular ? "text-haze" : plan.trial ? "text-emerald-400" : "invisible"}`}>
                    {plan.popular ? "Most Popular" : plan.trial ? "30 Days Free" : "Plan"}
                  </div>
                  <div className="font-display font-semibold text-lg text-white mb-2">{plan.name}</div>
                  <div className={`font-display text-3xl font-bold mb-1 ${plan.popular ? "text-glow" : plan.trial ? "text-emerald-400" : "text-white"}`}>
                    {plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-silver/80">/mo</span>}
                  </div>
                  <div className="text-sm mb-1 text-silver">{plan.employees}</div>
                  <div className="text-xs mb-5 text-silver/80">
                    {plan.trial ? plan.annualFee : (
                      <>Annual service fee:<br />{plan.annualFee}</>
                    )}
                  </div>
                  <ul className="space-y-2.5 flex-1 border-t border-white/[0.07] pt-5">
                    {plan.features.map((f) => (
                      <li key={f} className="text-sm flex items-start gap-2 text-silver/90">
                        <Icon name="check" className={`w-4 h-4 mt-0.5 shrink-0 ${plan.trial ? "text-emerald-400" : "text-lilac"}`} />{f}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`mt-6 block text-center font-semibold py-2.5 rounded-full transition-colors text-sm ${plan.popular ? "bg-white text-ink hover:bg-haze" : plan.trial ? "bg-emerald-500 text-white hover:bg-emerald-400" : "btn-primary"}`}>
                    {plan.trial ? "Start Free Trial" : "Get Started"}
                  </a>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="mt-24">
              <div className="reveal text-center mb-10">
                <div className="eyebrow mb-3">Extras</div>
                <h2 className="font-display text-3xl font-bold text-white mb-3">Add-ons</h2>
                <p className="text-silver max-w-2xl mx-auto">Extend any plan with optional features. Add-ons are billed monthly alongside your subscription.</p>
              </div>
              <div className="reveal max-w-2xl mx-auto card-lit p-7 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
                <IconTile name="monitor" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="font-display font-bold text-white text-lg">Employee Self-Service Portal (SSP)</div>
                    <div className="font-display text-white font-bold text-2xl whitespace-nowrap">R999<span className="text-sm font-normal text-silver/80">/mo</span></div>
                  </div>
                  <p className="text-silver text-sm mt-2 leading-relaxed">Give your employees their own secure portal to view payslips, apply for leave, update personal details, and download tax documents — available on any plan.</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Employee payslip access", "Leave application & approval", "Personal details update", "IRP5 & tax document downloads", "Mobile-friendly interface"].map((f) => (
                      <li key={f} className="text-sm text-silver/90 flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-lilac shrink-0" />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Payroll Management Outsourcing */}
            <div className="mt-24">
              <div className="reveal text-center mb-10">
                <div className="eyebrow mb-3">Done for you</div>
                <h2 className="font-display text-3xl font-bold text-white mb-3">Payroll Management Outsourcing</h2>
                <p className="text-silver max-w-2xl mx-auto">Don&apos;t want to run payroll yourself? Let NexEra manage your entire payroll process — from calculations and payslips to UIF submissions and IRP5 certificates. We handle it all so you can focus on running your business.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {outsourcingSteps.map((item) => (
                  <div key={item.title} className="reveal card p-7 text-center flex flex-col items-center">
                    <div className="mb-4"><IconTile name={item.icon} /></div>
                    <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-silver/90">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="reveal card overflow-hidden mb-6 !rounded-2xl">
                <div className="bg-gradient-to-r from-amethyst/60 to-amethyst/20 border-b border-white/[0.08] px-6 py-4">
                  <div className="grid grid-cols-3 items-center text-white text-xs sm:text-sm font-semibold tracking-wide">
                    <span>Company Size</span>
                    <span className="text-right">Monthly Fee</span>
                    <span className="text-right">Setup Fee</span>
                  </div>
                </div>
                {outsourcingTiers.map((tier, i) => (
                  <div key={tier.employees} className={`grid grid-cols-3 items-center px-6 py-4 transition-colors hover:bg-white/[0.04] ${i % 2 === 1 ? "bg-white/[0.02]" : ""} ${i > 0 ? "border-t border-white/[0.05]" : ""}`}>
                    <span className="text-silver font-medium text-sm sm:text-base">{tier.employees}</span>
                    <div className="text-right">
                      <span className={`font-display font-bold ${tier.price === "Custom" ? "text-lilac" : "text-white"}`}>{tier.price}</span>
                      <span className="text-silver/80 text-xs ml-1">{tier.note}</span>
                    </div>
                    <div className="text-right">
                      <span className={`font-display font-bold ${tier.setupFee === "Custom" ? "text-lilac" : "text-white"}`}>{tier.setupFee}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a2448] via-[#171329] to-ink p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <Rings className="w-[340px] -right-32 -bottom-48 opacity-70" />
                <div className="relative">
                  <div className="font-display text-xl font-bold mb-2">A once-off setup fee applies</div>
                  <p className="text-haze/80 text-sm max-w-md leading-relaxed">Covers full setup, data migration, and onboarding of your employees onto the NexEra platform — see pricing by company size above. Custom quotes for 101+ employees.</p>
                </div>
                <div className="relative text-center shrink-0">
                  <div className="text-haze/70 text-sm mb-3">Interested? Get in touch:</div>
                  <a href="mailto:info@nexerapayroll.co.za" className="block bg-white text-ink font-semibold px-6 py-3 rounded-full hover:bg-haze transition-colors">
                    info@nexerapayroll.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
