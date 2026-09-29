import React from 'react';

import { AnimatedSection } from '../ui/AnimatedSection';


export const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden font-sans">
      
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            The <span className="marker-highlight text-white px-2">Difference</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Stop doing robot work. Let our AI agents handle the repetitive tasks so you can focus on growing your business.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          
          {/* Hand-drawn divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 -subtle"></div>
          
          {/* Before Sticky Note */}
          <AnimatedSection delay={100} className="relative">
            <div className="glass-panel p-8 md:p-10  rounded-bl-3xl rounded-tr-3xl rotate-1 transform hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-display font-bold text-chalk-pink mb-6 flex items-center gap-2">
                <span className="line-through text-white opacity-50 text-xl">x</span> Before AI-VARSH
              </h3>
              <ul className="space-y-4 text-white/80 font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-pink">✗</span>
                  <span>Manually replying to the same customer questions over and over.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-pink">✗</span>
                  <span>Losing leads because you couldn't reply instantly at 2 AM.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-pink">✗</span>
                  <span>Juggling 5 different spreadsheets to track simple things.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-pink">✗</span>
                  <span>Feeling overwhelmed, stressed, and stuck in the weeds.</span>
                </li>
              </ul>
              {/* Doodle */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chalk-pink">
                  <path d="M20,20 C30,10 70,10 80,20 C90,30 90,70 80,80 C70,90 30,90 20,80 C10,70 10,30 20,20 Z" />
                  <path d="M35,35 L65,65 M65,35 L35,65" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          {/* After Sticky Note */}
          <AnimatedSection delay={200} className="relative">
            <div className="glass-panel p-8 md:p-10  rounded-br-3xl rounded-tl-3xl -rotate-1 transform hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-display font-bold text-chalk-green mb-6 flex items-center gap-2">
                <span className="text-chalk-green text-xl">✓</span> After AI-VARSH
              </h3>
              <ul className="space-y-4 text-white/80 font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-green">✓</span>
                  <span>AI agents handle inquiries instantly, capturing every single lead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-green">✓</span>
                  <span>Your business runs smoothly 24/7, even while you sleep.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-green">✓</span>
                  <span>All your data is synced beautifully in one simple place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-chalk-green">✓</span>
                  <span>Peace of mind. More time for strategy, family, and growth.</span>
                </li>
              </ul>
              {/* Doodle */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chalk-green">
                  <path d="M50,10 C25,10 10,25 10,50 C10,75 25,90 50,90 C75,90 90,75 90,50 C90,25 75,10 50,10 Z" />
                  <path d="M30,50 L45,65 L70,35" />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
