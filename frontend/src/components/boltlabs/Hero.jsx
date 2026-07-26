"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { scrollToId } from "./Navbar";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const headline = ["We", "Build", "Digital", "Dimensions."];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      <Scene3D />

      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,3,0.55)_75%,#030303_100%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-20 sm:pt-32 pb-24 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-6"
        >
          Digital Agency — Delhi, India
        </motion.p>

        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] tracking-tighter leading-[1.02]">
          {headline.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden mr-[0.22em] align-bottom">
              <motion.span
                className={`inline-block ${i >= 2 ? "text-gradient" : "text-white"}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400 font-light"
        >
          Boltlabs is a premier Social Media Marketing &amp; Web Development
          agency. We scale brands through immersive web experiences and
          data-driven social strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-6 pointer-events-auto"
        >
          <button
            onClick={() => scrollToId("#services")}
            className="group relative inline-flex items-center gap-3 bg-[#9D4CDD] text-white rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#B26CE8] transition-colors duration-300 shadow-[0_0_40px_rgba(157,76,221,0.35)] hover:shadow-[0_0_60px_rgba(157,76,221,0.55)]"
            data-testid="hero-cta-explore"
          >
            Explore Our Universe
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToId("#contact")}
            className="text-sm text-zinc-400 hover:text-white uppercase tracking-wider transition-colors underline underline-offset-8 decoration-zinc-700 hover:decoration-[#9D4CDD]"
            data-testid="hero-cta-contact"
          >
            Start a Project
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#9D4CDD]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
