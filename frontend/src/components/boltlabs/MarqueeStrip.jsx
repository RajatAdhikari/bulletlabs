import { motion } from "framer-motion";

const items = [
  "Social Media Marketing",
  "React Websites",
  "Landing Pages",
  "3D Experiences",
  "Lead Generation",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {items.map((item) => (
      <span key={item} className="flex items-center shrink-0">
        <span className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter marquee-outline whitespace-nowrap px-6 hover:text-[#9D4CDD] transition-colors duration-500">
          {item}
        </span>
        <span className="text-[#9D4CDD] text-4xl md:text-6xl px-2">•</span>
      </span>
    ))}
  </div>
);

const MarqueeStrip = () => {
  return (
    <section
      className="py-12 md:py-16 overflow-hidden border-y border-white/5 bg-[#050505]"
      aria-label="Boltlabs expertise"
      data-testid="marquee-section"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <Row />
        <Row />
      </motion.div>
    </section>
  );
};

export default MarqueeStrip;
