import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";

const features = [
  { title: "PAYE, UIF & SDL", desc: "Automatic tax calculations, EMP201 returns, and IRP5/IT3(a) certificates generated and ready for eFiling.", icon: "🏛️" },
  { title: "UIF Submissions", desc: "Generate UIF declaration files (UI-19) in the correct format for Department of Labour submission.", icon: "📋" },
  { title: "Banking Payment Files", desc: "Export bank-ready payment files to pay employees directly — compatible with major South African banks.", icon: "🏦" },
  { title: "Contract Alerts", desc: "Automated notifications before fixed-term contracts expire so you never miss a renewal or end date.", icon: "📢" },
  { title: "Leave Management", desc: "Annual, sick, and family responsibility leave — tracked, approved, and balanced automatically.", icon: "📅" },
  { title: "Employee Self-Service", desc: "Employees view payslips, apply for leave, and update their details online — no admin needed.", icon: "👤" },
  { title: "Multi-Company", desc: "Manage multiple companies or entities from one login with fully separate data and reporting.", icon: "🏢" },
  { title: "Role-Based Access", desc: "Super Admin, HR Manager, Accountant, and Employee roles — each sees only what they need.", icon: "🔐" },
  { title: "Multi Cost Centres", desc: "Allocate employees and payroll costs across multiple departments or cost centres for accurate reporting.", icon: "📊" },
  { title: "Payroll Management Outsourcing", desc: "Don't want to run payroll yourself? Let NexEra manage it for you — we handle everything end to end.", icon: "🤝" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-700 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-6">
              🇿🇦 Built for South African businesses
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Payroll made simple.<br />
              <span className="text-indigo-400">Compliance made easy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
              NexEra is a cloud-based payroll and people management platform built specifically for South African businesses. SARS compliant, secure, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg">
                Get Started
              </a>
              <Link href="/pricing"
                className="border border-indigo-500 hover:bg-indigo-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for South African payroll</h2>
              <p className="text-gray-500 max-w-xl mx-auto">From UIF submissions to banking files, IRP5s to contract alerts — NexEra covers every part of your payroll process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 mb-10">Plans starting from R599/month. No hidden fees.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {[
                { name: "Starter", price: "R599", employees: "Up to 10 employees" },
                { name: "Professional", price: "R799", employees: "Up to 50 employees", popular: true },
                { name: "Business", price: "R1 599", employees: "Up to 200 employees" },
              ].map((plan) => (
                <div key={plan.name} className={`p-6 rounded-2xl border-2 ${plan.popular ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-200 bg-white"}`}>
                  {plan.popular && <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">Most Popular</div>}
                  <div className={`font-bold text-lg mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</div>
                  <div className={`text-3xl font-bold mb-1 ${plan.popular ? "text-white" : "text-indigo-600"}`}>{plan.price}<span className="text-sm font-normal">/mo</span></div>
                  <div className={`text-sm ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>{plan.employees}</div>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              See Full Pricing
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-indigo-600 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-4">Ready to simplify your payroll?</h2>
            <p className="text-indigo-200 mb-8">Join South African businesses already using NexEra to manage their people and payroll.</p>
            <a href="/contact"
              className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg inline-block">
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
