import Navbar from "@/components/boltlabs/Navbar";
import Hero from "@/components/boltlabs/Hero";
import MarqueeStrip from "@/components/boltlabs/MarqueeStrip";
import Services from "@/components/boltlabs/Services";
import Work from "@/components/boltlabs/Work";
import FAQ from "@/components/boltlabs/FAQ";
import Contact from "@/components/boltlabs/Contact";
import Footer from "@/components/boltlabs/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <Work />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
