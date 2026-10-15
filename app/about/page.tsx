import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { PageHeader, Rings } from "@/components/brand";
import { IconTile, type IconName } from "@/components/icons";

const reasons: { title: string; desc: string; icon: IconName }[] = [
  { title: "SARS Compliant", desc: "Always up to date with the latest tax tables and legislative requirements.", icon: "landmark" },
  { title: "Cloud-Based", desc: "No software to install. Access your payroll securely from any device.", icon: "cloud" },
  { title: "Dedicated Support", desc: "Real people, real answers. Reach us by email or phone during business hours.", icon: "headset" },
  { title: "Affordable", desc: "Plans starting from R999/month — fair pricing for businesses of all sizes.", icon: "tag" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="About" title="About NexEra" subtitle="Built by South Africans, for South African businesses." />

        <section className="pb-24 bg-ink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal card p-8">
                <div className="eyebrow mb-3">01</div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-silver leading-relaxed">
                  NexEra was built to make payroll simple, accurate, and accessible for every South African business — from small start-ups to large enterprises. We believe that managing your people and staying compliant with SARS should not require an accounting degree or expensive consultants.
                </p>
              </div>

              <div className="reveal card p-8">
                <div className="eyebrow mb-3">02</div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">What We Do</h2>
                <p className="text-silver leading-relaxed">
                  NexEra is a cloud-based payroll and people management platform. We handle PAYE, UIF, SDL, leave, payslips, EMP201 submissions, IRP5 certificates, and more — all in one place. Our platform is fully compliant with South African tax legislation and updated whenever SARS changes the rules.
                </p>
              </div>
            </div>

            <div className="pt-10">
              <div className="reveal text-center mb-10">
                <div className="eyebrow mb-3">03</div>
                <h2 className="font-display text-3xl font-bold text-white">Why NexEra?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map((item) => (
                  <div key={item.title} className="reveal card p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-lilac/40">
                    <IconTile name={item.icon} />
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-silver/90 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a2448] via-[#171329] to-ink p-10 sm:p-14 text-white text-center !mt-16">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-amethyst-bright/30 blur-[100px]" />
              <Rings className="w-[380px] -right-36 -bottom-52" />
              <div className="relative">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-haze/80 mb-8">Join South African businesses already running payroll on NexEra.</p>
                <a href="/contact"
                  className="bg-white text-ink hover:bg-haze font-semibold px-8 py-3.5 rounded-full transition-colors inline-block">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
