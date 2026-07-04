import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nebula Finance",
    cat: "React Web App · 3D Experience",
    img: "https://images.pexels.com/photos/36136699/pexels-photo-36136699.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "md:col-span-7",
  },
  {
    title: "Aura Studio",
    cat: "Landing Page · CRO",
    img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
  },
  {
    title: "Pulse Social",
    cat: "Social Media Campaign",
    img: "https://images.pexels.com/photos/5678243/pexels-photo-5678243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "md:col-span-12",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 lg:py-40 bg-[#0A0A0A] border-y border-white/5" data-testid="work-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-4">
              Selected Work
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-bold">
              Recent <span className="text-gradient">dimensions</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
            A glimpse into the universes we've built for brands that refuse to blend in.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 ${p.span} ${i === 2 ? "h-[320px] md:h-[420px]" : "h-[320px] md:h-[460px]"}`}
              data-testid={`work-card-${i + 1}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B26CE8] mb-2">{p.cat}</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold">{p.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
