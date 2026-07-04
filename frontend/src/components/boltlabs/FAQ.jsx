import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is your approach to SMM?",
    a: "We start with a deep brand audit, then build a data-driven content engine: platform-native creatives, community management, paid amplification, and weekly performance loops. Every post is tied to a KPI — reach, engagement, or conversion — so your budget always compounds.",
  },
  {
    q: "Do you build custom 3D websites?",
    a: "Absolutely. Immersive 3D is our signature. We build WebGL experiences with Three.js and React Three Fiber — from interactive hero scenes to full 3D product configurators — all optimized to run smoothly on mobile devices.",
  },
  {
    q: "How long does a landing page take to build?",
    a: "A high-converting landing page typically takes 1–2 weeks from kickoff to launch, including copywriting, design, development, and conversion tracking setup. Complex 3D or animation-heavy pages may take 3–4 weeks.",
  },
  {
    q: "Are your websites mobile-friendly?",
    a: "Every build is mobile-first. We test across real devices, ensure 3D canvases never block touch scrolling, and target 90+ Lighthouse scores for performance and accessibility on every project we ship.",
  },
  {
    q: "How do we get started with Boltlabs?",
    a: "Simply fill out the contact form below or email us at boltlabs1@gmail.com. We'll schedule a free discovery call within 24 hours to understand your goals and map out a strategy tailored to your brand.",
  },
];

const FAQItem = ({ faq, index, open, onToggle }) => (
  <div className="border-b border-white/10">
    <button
      onClick={onToggle}
      className="w-full py-6 flex items-center justify-between text-left group"
      aria-expanded={open}
      data-testid={`faq-trigger-${index + 1}`}
    >
      <h3 className="text-lg md:text-xl font-medium group-hover:text-[#B26CE8] transition-colors pr-6">
        {faq.q}
      </h3>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${open ? "border-[#9D4CDD] bg-[#9D4CDD]/10" : "border-white/15"}`}
      >
        <Plus className={`w-4 h-4 ${open ? "text-[#B26CE8]" : "text-zinc-400"}`} />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
          data-testid={`faq-content-${index + 1}`}
        >
          <p className="pb-8 text-zinc-400 leading-relaxed font-light max-w-3xl">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 relative" data-testid="faq-section">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#9D4CDD]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-4">
            FAQ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight font-bold">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p className="mt-6 text-zinc-500 text-sm leading-relaxed">
            Everything you need to know before we launch your brand into a new dimension.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
