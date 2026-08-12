import Nav from "@/components/nav";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Starter",
    price: "R499",
    employees: "Up to 10 employees",
    onboarding: "R5 000",
    features: ["Payroll processing", "Payslip generation", "Leave management", "Employee self-service portal", "UIF & PAYE calculations", "Email support"],
  },
  {
    name: "Professional",
    price: "R699",
    employees: "Up to 50 employees",
    onboarding: "R10 000",
    popular: true,
    features: ["Everything in Starter", "Multi-user access", "Role-based permissions", "Audit trail", "Reports & analytics", "Priority support"],
  },
  {
    name: "Business",
    price: "R1 499",
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
                  <div className={`text-xs mb-4 ${plan.popular ? "text-indigo-300" : "text-gray-400"}`}>Onboarding: {plan.onboarding}</div>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                        <span className="mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://app.nexerapayroll.co.za/login"
                    className={`mt-6 block text-center font-semibold py-2.5 rounded-xl transition-colors text-sm ${plan.popular ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Outsourced Payroll</h3>
              <p className="text-gray-500 mb-4">Let NexEra handle your payroll completely. We process, calculate, and submit on your behalf.</p>
              <div className="text-2xl font-bold text-indigo-600 mb-1">R75 <span className="text-base font-normal text-gray-500">per employee/month</span></div>
              <div className="text-sm text-gray-400 mb-6">Minimum R750/month</div>
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
