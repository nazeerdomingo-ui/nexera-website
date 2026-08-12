import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-indigo-950 to-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-indigo-200">We&apos;re here to help. Reach out and we&apos;ll get back to you.</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600 font-bold text-lg">@</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-0.5">Email</div>
                  <div className="text-gray-900 font-medium">info@nexerapayroll.co.za</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600 font-bold text-lg">#</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-0.5">Phone</div>
                  <div className="text-gray-900 font-medium">+27 69 857 4895</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600 font-bold text-lg">⏰</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-0.5">Office Hours</div>
                  <div className="text-gray-900 font-medium">Monday – Friday</div>
                  <div className="text-gray-500 text-sm">8:00am – 5:00pm</div>
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
