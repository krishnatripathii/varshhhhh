import React from 'react';
import { INDUSTRIES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Paperclip } from '../ui/Stationery';


export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-[-25px] right-16 w-14 h-14 rotate-[15deg] text-white/70/60" />
        <AnimatedSection className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-white">
            Different businesses. Different challenges.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.title} delay={index * 50}>
              <div className="group border-b border-white/10 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative cursor-pointer">
                <div className="flex items-center gap-6 md:gap-12 md:w-1/3 shrink-0">
                  <span className="text-sm font-bold text-white/70/30">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-white font-bold transition-colors duration-300">
                    {industry.title}
                  </h3>
                </div>
                <div className="md:w-2/3 flex flex-wrap gap-2 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                  {industry.items.slice(0, 4).map((item) => (
                    <span key={item} className="px-4 py-2 bg-transparent rounded-full text-xs font-bold text-white/70/60 border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-marker-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
