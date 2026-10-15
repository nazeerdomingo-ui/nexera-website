import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/brand";
import { IconTile } from "@/components/icons";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Contact" title="Contact Us" subtitle="We're here to help. Reach out and we'll get back to you." />

        <section className="pb-24 bg-ink">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="reveal card-lit p-8 sm:p-10 space-y-8">
              <div className="flex items-start gap-5">
                <IconTile name="mail" />
                <div>
                  <div className="eyebrow mb-1.5">Email</div>
                  <div className="text-white font-medium text-lg">info@nexerapayroll.co.za</div>
                </div>
              </div>

              <div className="h-px bg-white/[0.07]" />

              <div className="flex items-start gap-5">
                <IconTile name="phone" />
                <div>
                  <div className="eyebrow mb-1.5">Phone</div>
                  <div className="text-white font-medium text-lg">+27 69 857 4895</div>
                </div>
              </div>

              <div className="h-px bg-white/[0.07]" />

              <div className="flex items-start gap-5">
                <IconTile name="clock" />
                <div>
                  <div className="eyebrow mb-1.5">Office Hours</div>
                  <div className="text-white font-medium text-lg">Monday – Friday</div>
                  <div className="text-silver text-sm">8:00am – 5:00pm</div>
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
