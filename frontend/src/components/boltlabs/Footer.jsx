import { Instagram, Mail, Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/boltlabs" },
  { icon: Mail, label: "Email", href: "mailto:boltlabs1@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919971210492" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030303]" data-testid="footer-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#9D4CDD]" fill="#9D4CDD" />
              <span className="font-heading font-bold text-xl tracking-tight">
                BOLT<span className="text-[#9D4CDD]">LABS</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              Boltlabs Agency | Founder: Rajat Adhikari | Headquarters: Delhi, India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#9D4CDD] hover:bg-[#9D4CDD]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(157,76,221,0.35)] transition-all duration-300"
                data-testid={`footer-social-${s.label.toLowerCase()}`}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Boltlabs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#B26CE8] transition-colors" data-testid="footer-privacy-link">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#B26CE8] transition-colors" data-testid="footer-terms-link">
              Terms &amp; Conditions
            </Link>
            <p>We Build Digital Dimensions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
