import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#message" },
  { label: "Background", href: "#background" },
  { label: "Speaking", href: "#speaking" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/80 border-b border-[#0D1321]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          data-testid="header-logo"
          className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold text-[#0D1321] tracking-tight hover:text-[#C8553D] transition-colors"
        >
          Shivani Verma
        </a>

        {/* Desktop nav */}
        <nav data-testid="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3E5C76] hover:text-[#C8553D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-book-call"
            className="bg-[#C8553D] text-[#FDFBF7] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#A64430]"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-[#0D1321]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          data-testid="mobile-nav"
          className="lg:hidden bg-[#FDFBF7] border-t border-[#D9D2C5] px-6 py-6 space-y-4 animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#3E5C76] hover:text-[#C8553D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-[#C8553D] text-[#FDFBF7] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-center transition-all hover:bg-[#A64430]"
          >
            Book a Call
          </a>
        </nav>
      )}
    </header>
  );
}
