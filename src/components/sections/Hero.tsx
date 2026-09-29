import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 overflow-hidden bg-transparent">
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Glassmorphism Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle reflection inside glass */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-sm tracking-[0.3em] uppercase text-white/80 font-bold mb-8 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-px bg-white/50" />
            SMART TOOLS • AUTOMATION • DESIGN
            <span className="w-8 h-px bg-white/50" />
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight glass-text flex flex-col items-center gap-2"
          >
            <span>BUILD.</span>
            <span>AUTOMATE.</span>
            <span className="text-glow">GROW.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-xl mx-auto font-light"
          >
            AI-VARSH builds simple tools that help your business run smoothly, save time, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-white text-black px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group rounded-full w-full sm:w-auto shadow-glass"
            >
              Contact Us
              <span className="w-1.5 h-1.5 rounded-full bg-black/40 group-hover:scale-150 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-full w-full sm:w-auto backdrop-blur-md"
            >
              EXPLORE SOLUTIONS
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
