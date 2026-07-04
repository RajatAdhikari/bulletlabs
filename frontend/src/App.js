import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/boltlabs/Navbar";
import Hero from "@/components/boltlabs/Hero";
import MarqueeStrip from "@/components/boltlabs/MarqueeStrip";
import Services from "@/components/boltlabs/Services";
import Work from "@/components/boltlabs/Work";
import FAQ from "@/components/boltlabs/FAQ";
import Contact from "@/components/boltlabs/Contact";
import Footer from "@/components/boltlabs/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.__lenis = lenis;
    return () => lenis.destroy();
  }, []);

  return (
    <div className="App bg-[#030303] text-white">
      <div className="noise-overlay" />
      <Toaster theme="dark" position="bottom-right" richColors />
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
    </div>
  );
}

export default App;
