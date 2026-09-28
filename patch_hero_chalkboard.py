import os

filepath = 'src/components/sections/Hero.tsx'
content = """import React from 'react';
import { motion } from 'framer-motion';
import { PineappleDoodle, SpiderWebDoodle, RobotDoodle, SpidermanMaskDoodle, NotebookSquiggle, ArrowDoodle, AIDoodle } from '../ui/Doodles';

export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#1c2e24]">
      
      {/* Chalkboard Blurred Doodles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 blur-[3px]">
        {/* Lots of random doodles scattered across the board */}
        <div className="absolute top-[5%] left-[5%] w-48 h-48 text-white/40 rotate-12">
          <SpiderWebDoodle />
        </div>
        <div className="absolute top-[15%] right-[8%] w-32 h-32 text-white/30 -rotate-12">
          <RobotDoodle />
        </div>
        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 text-white/40 rotate-45">
          <SpidermanMaskDoodle />
        </div>
        <div className="absolute top-[40%] left-[2%] w-24 h-24 text-white/30 -rotate-6">
          <AIDoodle />
        </div>
        <div className="absolute bottom-[10%] right-[15%] w-56 h-56 text-white/20 -rotate-45">
          <SpiderWebDoodle />
        </div>
        <div className="absolute top-[50%] right-[5%] w-24 h-24 text-white/50 rotate-90">
          <ArrowDoodle />
        </div>
        <div className="absolute top-[20%] left-[40%] w-32 h-10 text-white/30 rotate-3">
          <NotebookSquiggle />
        </div>
        <div className="absolute bottom-[30%] right-[40%] w-32 h-10 text-white/30 -rotate-3">
          <NotebookSquiggle />
        </div>
        <div className="absolute bottom-[5%] left-[40%] w-20 h-20 text-white/40 rotate-180">
          <RobotDoodle />
        </div>
      </div>

      {/* Signature Pineapple (Not blurred, or slightly less blurred) */}
      <div className="absolute top-[18%] left-[20%] w-24 h-24 text-marker-yellow/80 rotate-12 pointer-events-none z-0 hidden lg:block animate-float-slow">
        <PineappleDoodle />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Glassmorphism Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle reflection inside glass */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold mb-8 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-px bg-marker-yellow" />
            SMART TOOLS • AUTOMATION • DESIGN
            <span className="w-6 h-px bg-marker-yellow" />
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-8 tracking-tight text-white flex flex-col items-center"
          >
            <span>BUILD.</span>
            <span>AUTOMATE.</span>
            <span className="text-marker-yellow">GROW.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-xl mx-auto"
          >
            AI-VARSH builds simple tools that help your business run smoothly, save time, and grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="bg-marker-yellow text-pencil-dark px-8 py-4 font-bold text-sm tracking-wide hover:bg-marker-yellow/90 transition-all duration-300 flex items-center justify-center gap-3 group rounded-full w-full sm:w-auto"
            >
              Contact Us
              <span className="w-1.5 h-1.5 rounded-full bg-pencil-dark/20 group-hover:scale-150 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={scrollTo('#services')}
              className="border border-white/30 text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 rounded-full w-full sm:w-auto"
            >
              EXPLORE SOLUTIONS
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
"""

with open(filepath, 'w') as f:
    f.write(content)

