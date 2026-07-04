import { motion } from "framer-motion";
import { Megaphone, Code2, Rocket, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

const services = [
  {
    icon: Megaphone,
    num: "01",
    title: "Social Media Mastery",
    desc: "End-to-end social media marketing, content creation, and scaling. We turn scrolls into sales with data-driven campaigns that dominate feeds.",
    tags: ["Strategy", "Content", "Growth"],
  },
  {
    icon: Code2,
    num: "02",
    title: "React Web Architecture",
    desc: "Building scalable, lightning-fast React-based websites. Modern stacks, immersive 3D layers, and performance obsessed engineering.",
    tags: ["React", "Three.js", "Performance"],
  },
  {
    icon: Rocket,
    num: "03",
    title: "High-Converting Landing Pages",
    desc: "Optimized funnels designed to convert traffic into clients. Every pixel engineered for persuasion, speed, and measurable ROI.",
    tags: ["Funnels", "CRO", "A/B Testing"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 relative" data-testid="services-section">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9D4CDD]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-bold max-w-3xl">
            Services engineered for <span className="text-gradient">gravity-defying</span> growth
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <TiltCard
                testId={`service-card-${i + 1}`}
                className="group relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/[0.04] hover:border-[#9D4CDD]/40 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9D4CDD]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#9D4CDD]/10 border border-[#9D4CDD]/30 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(157,76,221,0.4)] transition-shadow duration-500">
                    <s.icon className="w-5 h-5 text-[#B26CE8]" />
                  </div>
                  <span className="font-heading text-sm text-zinc-600">{s.num}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl tracking-tight font-semibold mt-8">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400 font-light">
                  {s.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs uppercase tracking-wider text-zinc-500 border border-white/10 rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-[#B26CE8] transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
