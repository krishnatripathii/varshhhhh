import React from 'react';
import { motion } from 'framer-motion';
import { HeroGeometry } from '../ui/HeroGeometry';
import { SpiderWebDoodle, RobotDoodle, SpidermanMaskDoodle, NotebookSquiggle, ArrowDoodle, AIDoodle } from '../ui/Doodles';


export const Hero = () => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-28 pb-20 overflow-hidden bg-paper-bg">
      <HeroGeometry />
      
      <div className="absolute top-[10%] right-[5%] w-64 h-64 text-pencil-light/20 rotate-12 animate-float-slow pointer-events-none hidden lg:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute top-[35%] right-[20%] w-32 h-32 text-red-500/20 -rotate-12 animate-float-delayed pointer-events-none hidden lg:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-40 h-40 text-pencil-dark/20 rotate-6 animate-float-slow pointer-events-none hidden lg:block">
        <RobotDoodle />
      </div>
      <div className="absolute top-[5%] left-[5%] w-24 h-24 text-marker-yellow/40 -rotate-12 pointer-events-none hidden lg:block">
        <AIDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[10%] w-32 h-10 text-pencil-light/30 pointer-events-none hidden lg:block">
        <NotebookSquiggle />
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
