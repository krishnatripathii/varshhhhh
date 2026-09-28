import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SpiderWebDoodle, RobotDoodle } from '../ui/Doodles';
import { Tape } from '../ui/Stationery';


export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-paper-bg relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-marker-yellow/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-[30%] left-[3%] w-24 h-24 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[3%] w-32 h-32 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Tape className="top-10 right-20 -rotate-3" />
        <AnimatedSection className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-pencil-dark font-bold/70 mb-4 font-bold">
            HOW WE WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-pencil-dark">
            Our Process
          </h2>
        </AnimatedSection>

        {/* Desktop: Horizontal layout */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-pencil-light/10 z-0" />
          <div className="hidden lg:block absolute top-5 left-0 w-1/2 h-px bg-gradient-to-r from-marker-yellow/80 to-marker-yellow/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {SITE_CONTENT.process.steps.map((step, index) => (
              <AnimatedSection key={step.num} delay={index * 100}>
                <div className="relative group">
                  {/* Mobile vertical line */}
                  {index < SITE_CONTENT.process.steps.length - 1 && (
                    <div className="lg:hidden absolute left-[5px] top-12 bottom-[-32px] w-px bg-pencil-light/10 z-0" />
                  )}

                  {/* Dot */}
                  <div
                    className={`w-3 h-3 rounded-full mb-6 transition-colors duration-300 relative z-10 ring-4 ring-paper-bg ${
                      index < 3
                        ? 'bg-marker-yellow'
                        : 'bg-pencil-medium/20 group-hover:bg-marker-yellow'
                    }`}
                  />

                  <span
                    className={`text-xs font-bold block mb-2 transition-colors font-mono ${
                      index < 3
                        ? 'text-pencil-dark font-bold'
                        : 'text-pencil-medium/40 group-hover:text-pencil-dark font-bold'
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-pencil-dark tracking-tight">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-pencil-medium/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
