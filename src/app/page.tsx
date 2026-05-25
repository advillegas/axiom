import { Contact } from "@/components/landing/contact";
import { Coverage } from "@/components/landing/coverage";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Process } from "@/components/landing/process";
import { Projects } from "@/components/landing/projects";
import { Services } from "@/components/landing/services";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustStrip } from "@/components/landing/trust-strip";
import { WhyUs } from "@/components/landing/why-us";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <WhyUs />
        <Projects />
        <Coverage />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
