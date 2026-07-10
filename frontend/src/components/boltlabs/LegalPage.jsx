import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft } from "lucide-react";
import Footer from "./Footer";

const LegalPage = ({ title, updated, children, testId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030303] text-white min-h-screen" data-testid={testId}>
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/60 border-b border-white/10">
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" data-testid="legal-logo-link">
            <Zap className="w-5 h-5 text-[#9D4CDD] group-hover:rotate-12 transition-transform" fill="#9D4CDD" />
            <span className="font-heading font-bold text-lg tracking-tight">
              BOLT<span className="text-[#9D4CDD]">LABS</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            data-testid="legal-back-home"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </nav>
      </header>

      <main className="max-w-[900px] mx-auto px-6 md:px-12 pt-40 pb-24">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-4">Legal</p>
        <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight font-bold">{title}</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: {updated}</p>
        <div className="mt-12 space-y-10 text-zinc-400 font-light leading-relaxed">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export const LegalSection = ({ heading, children }) => (
  <section>
    <h2 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">{heading}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default LegalPage;
