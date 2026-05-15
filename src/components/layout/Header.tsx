import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? "top-3 left-3 right-3"
            : "top-0 left-0 right-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Pill wrapper */}
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-primary/90 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/25"
              : ""
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "px-5 py-3"
                : "container mx-auto px-4 sm:px-6 lg:px-8 py-5"
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/logo.png"
                alt="Wobrexx"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-8" : "h-10"
                }`}
              />
              <span
                className={`font-semibold text-white tracking-tight font-display transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                Wob<span className="text-secondary">rexx</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 text-sm transition-colors rounded-lg ${
                    location.pathname === link.href
                      ? "text-secondary"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className={`hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary-light font-medium rounded-lg transition-all duration-300 ${
                  isScrolled ? "h-8 px-4 text-xs" : "h-9 px-5 text-sm"
                }`}
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>

              <button
                className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu — only shown when isOpen */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-2 bg-primary/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/25 overflow-hidden ${
                isScrolled ? "rounded-2xl" : "rounded-2xl"
              }`}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-3 px-4 rounded-xl text-sm transition-colors ${
                      location.pathname === link.href
                        ? "bg-secondary/10 text-secondary"
                        : "text-white/65 hover:text-white hover:bg-white/[0.04]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 pb-1">
                  <Button
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-light font-medium rounded-xl h-11 text-sm"
                    asChild
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
