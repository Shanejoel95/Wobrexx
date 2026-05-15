import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  services: [
    { label: "Process Automation", href: "/services#process-automation" },
    { label: "Custom SaaS", href: "/services#custom-saas" },
    { label: "Web Development", href: "/services#websites" },
    { label: "Software Maintenance", href: "/services#software-maintenance" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Wobrexx" className="h-10 w-auto" />
            </Link>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
              Design, build, and automate the systems that grow your business —
              faster, leaner, and built to scale.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white/50 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/35 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/50 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/35 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/50 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@wobrexx.com"
                  className="flex items-center gap-3 text-sm text-white/35 hover:text-white transition-colors"
                >
                  <Mail size={13} className="flex-shrink-0" />
                  hello@wobrexx.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/35">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>
                  Remote-First Company
                  <br />
                  Serving Businesses Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Wobrexx. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-white/20 hover:text-white/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
