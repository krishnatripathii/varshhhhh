import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 flex items-center justify-between ${
          isScrolled
            ? 'py-3 bg-paper-bg/80 backdrop-blur-xl border-b border-pencil-medium/20'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
        role="navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 z-50 relative group"
          aria-label="AI-VARSH Home"
        >
          <img src="/logo.png" alt="AI-VARSH Logo" className="w-10 h-10 rounded-full" />
          <span className={`font-display font-bold text-lg tracking-tight transition-colors ${!isScrolled && !isMobileOpen ? "text-white" : "text-pencil-dark"}`}>
            AI-VARSH
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:font-bold transition-colors duration-300 tracking-wide ${!isScrolled ? "text-white/80 hover:text-white" : "text-pencil-medium hover:text-pencil-dark"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-6 z-50 relative">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 text-sm font-bold text-pencil-dark bg-marker-yellow px-5 py-2.5 rounded-full hover:bg-marker-yellow/90 transition-all duration-300 group"
          >
            Contact Us
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <button
            className={`lg:hidden p-2 -mr-2 font-bold transition-colors ${!isScrolled && !isMobileOpen ? "text-white" : "text-pencil-dark"}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-paper-bg" onClick={() => setIsMobileOpen(false)} />

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-8 transition-transform duration-700 ease-out ${
            isMobileOpen ? 'translate-y-0' : '-translate-y-12'
          }`}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-display font-bold text-pencil-dark hover:text-pencil-dark font-bold transition-colors"
              style={{ transitionDelay: isMobileOpen ? `${i * 75}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-4 flex items-center gap-2 bg-marker-yellow text-pencil-dark px-8 py-4 text-lg font-bold rounded-full hover:bg-marker-yellow/90 transition-colors"
          >
            Contact Us <span>→</span>
          </a>
        </div>
      </div>
    </>
  );
};
