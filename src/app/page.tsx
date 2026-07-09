import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { WhyUs } from "@/components/why-us";
import { Booking } from "@/components/booking";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatCTA } from "@/components/float-cta";
import { ScrollProgress } from "@/components/motion-primitives";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Booking />
        <Contact />
        <Gallery />
        <Services />
        <About />
        <WhyUs />
      </main>
      <Footer />
      <FloatCTA />
    </>
  );
}
