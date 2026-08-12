import Nav from "@/components/nav";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Starter",
    price: "R599",
    employees: "Up to 10 employees",
    onboarding: "R5 000",
    features: ["Payroll processing", "Payslip generation", "Leave management", "Employee self-service portal", "UIF & PAYE calculations", "Email support"],
  },
  {
    name: "Professional",
    price: "R799",
    employees: "Up to 50 employees",
    onboarding: "R10 000",
    popular: true,
    features: ["Everything in Starter", "Multi-user access", "Role-based permissions", "Audit trail", "Reports & analytics", "Priority support"],
  },
  {
    name: "Business",
    price: "R1 599",
    employees: "Up to 200 employees",
    onboarding: "R15 000",
    features: ["Everything in Professional", "Advanced reporting", "Custom integrations", "Dedicated account manager", "Phone support", "SLA guarantee"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    employees: "200+ employees",
    onboarding: "R20 000+",
    features: ["Everything in Business", "Custom development", "On-site training", "White-label options", "API access", "24/7 support"],
  },
];

const outsourcingTiers = [
  { employees: "1 – 10 employees", price: "R750", note: "per month" },
  { employees: "11 – 25 employees", price: "R1 500", note: "per month" },
  { employees: "26 – 50 employees", price: "R2 500", note: "per month" },
  { employees: "51 – 100 employees", price: "R4 500", note: "per month" },
  { employees: "101 – 1 000+ employees", price: "Custom", note: "contact us for a quote" },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-indigo-950 to-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-indigo-200">No hidden fees. Cancel anytime. All plans include a once-off onboarding fee.</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <div key={plan.name} className={`rounded-2xl p-6 border-2 flex flex-col ${plan.popular ? "border-indigo-600 bg-indigo-600 text-white shadow-xl scale-105" : "border-gray-200 bg-white text-gray-900"}`}>
                  {plan.popular && <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">Most Popular</div>}
                  <div className="font-bold text-lg mb-1">{plan.name}</div>
                  <div className={`text-3xl font-bold mb-1 ${plan.popular ? "text-white" : "text-indigo-600"}`}>
                    {plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal">/mo</span>}
                  </div>
                  <div className={`text-sm mb-1 ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>{plan.employees}</div>
                  <div className={`text-xs mb-4 ${plan.popular ? "text-indigo-300" : "text-gray-400"}`}>Once-off onboarding: {plan.onboarding}</div>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                        <span className="mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`mt-6 block text-center font-semibold py-2.5 rounded-xl transition-colors text-sm ${plan.popular ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            {/* Payroll Management Outsourcing */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Payroll Management Outsourcing</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Don&apos;t want to run payroll yourself? Let NexEra manage your entire payroll process — from calculations and payslips to UIF submissions and IRP5 certificates. We handle it all so you can focus on running your business.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { title: "We Calculate", desc: "PAYE, UIF, SDL, and all deductions calculated accurately every month." },
                  { title: "We Submit", desc: "EMP201 returns, UIF declarations, and IRP5 certificates handled on your behalf." },
                  { title: "We Report", desc: "Payslips distributed and management reports delivered — nothing for you to do." },
                ].map((item) => (
                  <div key={item.title} className="bg-indigo-50 rounded-2xl p-6 text-center">
                    <h3 className="font-bold text-indigo-700 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
                <div className="bg-indigo-600 px-6 py-4">
                  <div className="flex justify-between items-center text-white text-sm font-semibold">
                    <span>Company Size</span>
                    <span>Monthly Fee</span>
                  </div>
                </div>
                {outsourcingTiers.map((tier, i) => (
                  <div key={tier.employees} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <span className="text-gray-700 font-medium">{tier.employees}</span>
                    <div className="text-right">
                      <span className={`font-bold ${tier.price === "Custom" ? "text-indigo-600" : "text-gray-900"}`}>{tier.price}</span>
                      <span className="text-gray-400 text-xs ml-1">{tier.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-lg font-bold mb-1">Once-off Onboarding Fee: R15 000</div>
                  <p className="text-indigo-100 text-sm max-w-md">Covers full setup, data migration, and onboarding of your employees onto the NexEra platform. For companies over 1 000 employees, contact us for a tailored quote.</p>
                </div>
                <div className="text-center shrink-0">
                  <div className="text-indigo-200 text-sm mb-3">Interested? Get in touch:</div>
                  <a href="mailto:info@nexerapayroll.co.za" className="block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
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
