"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.details.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message received! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", details: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden" data-testid="contact-section">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#9D4CDD]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B26CE8] font-medium mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-bold">
            Let's build your <span className="text-gradient">dimension</span>
          </h2>
          <p className="mt-6 text-zinc-400 font-light leading-relaxed max-w-md">
            Tell us about your project and we'll get back within 24 hours with a plan to launch your brand further.
          </p>

          <div className="mt-12 space-y-5">
            <a href="mailto:boltlabs1@gmail.com" className="flex items-center gap-4 group w-fit" data-testid="contact-email-link">
              <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#9D4CDD] group-hover:shadow-[0_0_20px_rgba(157,76,221,0.3)] transition-all">
                <Mail className="w-4 h-4 text-[#B26CE8]" />
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">boltlabs1@gmail.com</span>
            </a>
            <a href="tel:+919971210492" className="flex items-center gap-4 group w-fit" data-testid="contact-phone-link">
              <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#9D4CDD] group-hover:shadow-[0_0_20px_rgba(157,76,221,0.3)] transition-all">
                <Phone className="w-4 h-4 text-[#B26CE8]" />
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">+91 9971210492</span>
            </a>
            <a href="https://instagram.com/boltlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit" data-testid="contact-instagram-link">
              <span className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#9D4CDD] group-hover:shadow-[0_0_20px_rgba(157,76,221,0.3)] transition-all">
                <Instagram className="w-4 h-4 text-[#B26CE8]" />
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">@boltlabs</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 h-fit"
          data-testid="contact-form"
        >
          <div className="space-y-8">
            <div>
              <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-zinc-500">Name</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="bg-transparent border-b border-white/20 focus:border-[#9D4CDD] py-4 w-full outline-none transition-colors text-white placeholder:text-zinc-600 rounded-none"
                data-testid="contact-input-name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.2em] text-zinc-500">Email</label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="bg-transparent border-b border-white/20 focus:border-[#9D4CDD] py-4 w-full outline-none transition-colors text-white placeholder:text-zinc-600 rounded-none"
                data-testid="contact-input-email"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.2em] text-zinc-500">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="bg-transparent border-b border-white/20 focus:border-[#9D4CDD] py-4 w-full outline-none transition-colors text-white placeholder:text-zinc-600 rounded-none"
                data-testid="contact-input-phone"
              />
            </div>
            <div>
              <label htmlFor="contact-details" className="text-xs uppercase tracking-[0.2em] text-zinc-500">Project Details</label>
              <textarea
                id="contact-details"
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Tell us about your project, goals and timeline..."
                className="bg-transparent border-b border-white/20 focus:border-[#9D4CDD] py-4 w-full outline-none transition-colors text-white placeholder:text-zinc-600 rounded-none resize-none"
                data-testid="contact-input-details"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-[#9D4CDD] hover:text-white transition-all duration-300 disabled:opacity-60"
            data-testid="contact-submit-button"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
