import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SpidermanMaskDoodle, AIDoodle } from '../ui/Doodles';
import { Tape } from '../ui/Stationery';


export const LocalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-paper-surface">
      <div className="absolute top-[20%] right-[5%] w-32 h-32 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-20 h-20 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <AIDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Tape className="top-0 left-[20%] rotate-6" />
        <Tape className="bottom-0 right-[20%] -rotate-3" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 text-pencil-dark text-balance leading-tight">
                Starting here.<br />Thinking beyond.
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <AnimatedSection delay={100} className="flex flex-col gap-8 text-lg md:text-xl text-pencil-medium leading-relaxed font-medium">
              <p>
                AI-VARSH is building its foundation in <span className="text-pencil-dark font-bold font-bold">Chhattisgarh</span>, working with businesses across Raipur, Bhilai, Durg and surrounding regions.
              </p>
              <p>
                Our goal is to make modern technology, AI, creative services and digital growth accessible to businesses that want to move forward.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
