"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const scrollToId = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 backdrop-blur-2xl border-b transition-colors duration-500 ${
        scrolled ? "bg-black/60 border-white/10" : "bg-black/20 border-white/5"
      }`}
      data-testid="main-navbar"
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
          data-testid="navbar-logo"
        >
          <Zap className="w-5 h-5 text-[#9D4CDD] group-hover:rotate-12 transition-transform" fill="#9D4CDD" />
          <span className="font-heading font-bold text-lg tracking-tight">
            BOLT<span className="text-[#9D4CDD]">LABS</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-sm text-zinc-400 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#9D4CDD] hover:after:w-full after:transition-all after:duration-300"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={(e) => handleNav(e, "#contact")}
            className="hidden md:block bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:scale-105 hover:bg-[#9D4CDD] hover:text-white transition-all duration-300"
            data-testid="navbar-cta-start-project"
          >
            Start a Project
          </button>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="navbar-mobile-menu-toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/10"
            data-testid="mobile-menu"
          >
            <ul className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="block text-lg text-zinc-300 hover:text-[#9D4CDD] transition-colors"
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={(e) => handleNav(e, "#contact")}
                  className="w-full bg-white text-black rounded-full px-6 py-3 text-sm font-semibold"
                  data-testid="mobile-cta-start-project"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;