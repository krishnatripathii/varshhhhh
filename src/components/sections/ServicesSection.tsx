import React from 'react';
import { RobotDoodle, NotebookSquiggle } from '../ui/Doodles';
import { SERVICES } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-board-plum relative overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-marker-yellow/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-[10%] left-[2%] w-20 h-20 text-chalk-yellow/30/20 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="absolute bottom-[5%] right-[5%] w-32 h-10 text-white/40/20 rotate-6 pointer-events-none hidden md:block">
        <NotebookSquiggle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            How we can help
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Simple solutions designed around what your business <span className="marker-highlight text-white px-1">actually</span> needs.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 60}>
              <div className="group bg-board-green sketch-border p-6 md:p-8 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-sketch transition-all duration-400 cursor-default relative overflow-hidden">
                {/* Saffron indicator on hover */}
                <div className="absolute top-2 left-2 w-0 h-2 bg-marker-yellow/50 group-hover:w-10 transition-all duration-500 rounded-full" />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-white font-bold/60 font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-white/70/30 group-hover:text-white font-bold group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-3 tracking-tight group-hover:text-white font-bold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70/70 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
