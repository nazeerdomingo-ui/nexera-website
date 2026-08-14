import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import HeroCarousel from "@/components/hero-carousel";

const features = [
  { title: "PAYE, UIF & SDL", desc: "Automatic tax calculations, EMP201 returns, and IRP5/IT3(a) certificates generated and ready for eFiling.", icon: "🏛️" },
  { title: "UIF Submissions", desc: "Generate UIF declaration files (UI-19) in the correct format for Department of Labour submission.", icon: "📋" },
  { title: "Banking Payment Files", desc: "Export bank-ready payment files to pay employees directly — compatible with major South African banks.", icon: "🏦" },
  { title: "Contract Alerts", desc: "Automated notifications before fixed-term contracts expire so you never miss a renewal or end date.", icon: "📢" },
  { title: "Leave Management", desc: "Annual, sick, and family responsibility leave — tracked, approved, and balanced automatically.", icon: "📅" },
  { title: "Employee Self-Service", desc: "Employees view payslips, apply for leave, and update their details online — no admin needed.", icon: "👤" },
  { title: "Multi-Company", desc: "Manage multiple companies or entities from one login with fully separate data and reporting.", icon: "🏢" },
  { title: "Role-Based Access", desc: "Super Admin, HR Manager, Accountant, and Employee roles — each sees only what they need.", icon: "🔐" },
  { title: "Employee Document Vault", desc: "Upload and store contracts, IDs, certificates, and HR documents securely against each employee's profile.", icon: "🗂️" },
  { title: "Multi Cost Centres", desc: "Allocate employees and payroll costs across multiple departments or cost centres for accurate reporting.", icon: "📊" },
  { title: "Payroll Management Outsourcing", desc: "Don't want to run payroll yourself? Let NexEra manage it for you — we handle everything end to end.", icon: "🤝" },
  { title: "Employee Self-Service Portal (SSP)", desc: "Give employees their own secure portal to view payslips, apply for leave, and download tax documents. Available as an add-on for R999/month on any plan.", icon: "🖥️", addon: true },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroCarousel />

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for South African payroll</h2>
              <p className="text-gray-500 max-w-xl mx-auto">From UIF submissions to banking files, IRP5s to contract alerts — NexEra covers every part of your payroll process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className={`p-6 rounded-2xl border transition-all ${(f as any).addon ? "border-indigo-200 bg-indigo-50 hover:border-indigo-400 hover:shadow-md" : "border-gray-100 hover:border-indigo-200 hover:shadow-md"}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="text-3xl">{f.icon}</div>
                    {(f as any).addon && <span className="text-xs font-semibold bg-indigo-600 text-white px-2 py-0.5 rounded-full whitespace-nowrap">Add-on</span>}
                  </div>
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
            <p className="text-gray-500 mb-10">Start free for 30 days. Paid plans from R999/month. No hidden fees.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
              {[
                { name: "Free Trial", price: "R0", employees: "Up to 10 employees", trial: true },
                { name: "Starter", price: "R999", employees: "Up to 10 employees" },
                { name: "Professional", price: "R1 599", employees: "Up to 50 employees", popular: true },
                { name: "Business", price: "R2 599", employees: "Up to 200 employees" },
                { name: "Enterprise", price: "Custom", employees: "200+ employees" },
              ].map((plan) => (
                <div key={plan.name} className={`p-6 rounded-2xl border-2 ${plan.popular ? "border-indigo-600 bg-indigo-600 text-white" : plan.trial ? "border-emerald-400 bg-emerald-50" : "border-gray-200 bg-white"}`}>
                  {plan.popular && <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200 mb-2">Most Popular</div>}
                  {plan.trial && <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">30 Days Free</div>}
                  <div className={`font-bold text-lg mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</div>
                  <div className={`text-3xl font-bold mb-1 ${plan.popular ? "text-white" : plan.trial ? "text-emerald-600" : "text-indigo-600"}`}>{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal">/mo</span>}</div>
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
