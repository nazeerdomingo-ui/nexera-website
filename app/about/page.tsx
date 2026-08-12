import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-indigo-950 to-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl font-bold mb-4">About NexEra</h1>
            <p className="text-indigo-200">Built by South Africans, for South African businesses.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                NexEra was built to make payroll simple, accurate, and accessible for every South African business — from small start-ups to large enterprises. We believe that managing your people and staying compliant with SARS should not require an accounting degree or expensive consultants.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Do</h2>
              <p className="text-gray-600 leading-relaxed">
                NexEra is a cloud-based payroll and people management platform. We handle PAYE, UIF, SDL, leave, payslips, EMP201 submissions, IRP5 certificates, and more — all in one place. Our platform is fully compliant with South African tax legislation and updated whenever SARS changes the rules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Why NexEra?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "SARS Compliant", desc: "Always up to date with the latest tax tables and legislative requirements." },
                  { title: "Cloud-Based", desc: "No software to install. Access your payroll securely from any device." },
                  { title: "Dedicated Support", desc: "Real people, real answers. Reach us by email or phone during business hours." },
                  { title: "Affordable", desc: "Plans starting from R599/month — fair pricing for businesses of all sizes." },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-indigo-200 mb-6">Join South African businesses already running payroll on NexEra.</p>
              <a href="/contact"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-xl transition-colors inline-block">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
