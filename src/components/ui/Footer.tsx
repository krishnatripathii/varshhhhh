import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper-bg border-t border-pencil-medium/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 pr-8">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="AI-VARSH Logo" className="w-10 h-10 rounded-full" />
              <span className="font-display font-bold text-xl tracking-tight text-pencil-dark">AI-VARSH</span>
            </div>
            <p className="text-sm text-pencil-dark/40 leading-relaxed max-w-xs mb-4 font-medium">
              Intelligence. Creativity. Growth.
            </p>
            <p className="text-sm text-pencil-medium/60 leading-relaxed max-w-sm">
              Modern digital solutions combining technology, creativity and AI to help businesses grow.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs tracking-[0.2em] uppercase text-pencil-medium/40 mb-6 font-bold">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" onClick={scrollTo('#services')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Services</a></li>
              <li><a href="#solutions" onClick={scrollTo('#solutions')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Solutions</a></li>
              <li><a href="#process" onClick={scrollTo('#process')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Process</a></li>
              <li><a href="#about" onClick={scrollTo('#about')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">About</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-pencil-medium/40 mb-6 font-bold">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-pencil-medium font-medium">AI & Automation</li>
              <li className="text-sm text-pencil-medium font-medium">Web & Apps</li>
              <li className="text-sm text-pencil-medium font-medium">SEO & Growth</li>
              <li className="text-sm text-pencil-medium font-medium">Design & Creative</li>
              <li className="text-sm text-pencil-medium font-medium">Computer Vision</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-pencil-medium/40 mb-6 font-bold">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="https://wa.me/917804877448" target="_blank" rel="noopener noreferrer" className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/ai.varsh/" target="_blank" rel="noopener noreferrer" className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Instagram</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')} className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">LinkedIn</a></li>
              <li><a href="mailto:contact@ai-varsh.com" className="text-sm text-pencil-medium hover:text-pencil-dark font-bold transition-colors font-medium">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pencil-medium/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pencil-medium/40 font-medium">
            © {currentYear} AI-VARSH. All rights reserved.
          </p>
          <p className="text-xs text-pencil-medium/30 font-medium">
            Designed & built by AI-VARSH
          </p>
        </div>
      </div>
    </footer>
  );
};
