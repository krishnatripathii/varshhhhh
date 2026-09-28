import React from 'react';
import { motion } from 'framer-motion';
import { HeroGeometry } from '../ui/HeroGeometry';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-28 pb-20 overflow-hidden bg-paper-bg">
      <HeroGeometry />
      <div className="absolute top-[20%] right-[10%] opacity-30 animate-float-slow hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pencil-light">
          <path d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z" />
          <path d="M50 10 L50 50" />
          <path d="M20 30 L50 50 L80 30" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-[20%] left-[5%] opacity-30 animate-float-delayed hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pencil-light">
          <path d="M20 80 Q 50 20 80 80" />
          <circle cx="80" cy="80" r="10" />
          <path d="M30 60 L70 60" />
          <path d="M45 40 L55 40" />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs tracking-[0.3em] uppercase text-pencil-dark font-bold/80 mb-8 font-bold flex items-center gap-3"
          >
            <span className="w-6 h-px bg-marker-yellow/40" />
            SMART TOOLS • AUTOMATION • DESIGN
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-8 tracking-tight text-pencil-dark"
          >
            BUILD.
            <br />
            AUTOMATE.
            <br />
            <span className="text-pencil-dark font-bold">GROW.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl text-pencil-medium leading-relaxed mb-12 max-w-xl"
          >
            AI-VARSH builds simple tools that help your business run smoothly, save time, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-marker-yellow text-pencil-dark px-8 py-4 font-bold text-sm tracking-wide hover:bg-marker-yellow/90 transition-all duration-300 flex items-center gap-3 group rounded-full"
            >
              Contact Us
              <span className="w-1.5 h-1.5 rounded-full bg-pencil-dark/20 group-hover:scale-150 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="border border-pencil-medium/20 text-pencil-dark px-8 py-4 font-bold text-sm tracking-wide hover:border-pencil-dark/40 hover:text-pencil-dark font-bold transition-all duration-300 rounded-full"
            >
              EXPLORE SOLUTIONS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
