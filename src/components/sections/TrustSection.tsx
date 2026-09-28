import React from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Tape } from '../ui/Stationery';


export const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 bg-paper-surface border-y border-pencil-medium/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <Tape className="top-[-10px] left-[5%] rotate-2" />
        <Tape className="bottom-[-10px] right-[5%] -rotate-2" />
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SITE_CONTENT.trust.principles.map((principle, index) => (
            <div key={principle.title} className="flex items-start gap-4 group">
              <div className="w-px h-12 bg-marker-yellow/30 shrink-0 group-hover:bg-marker-yellow transition-colors" />
              <div>
                <h3 className="text-base font-bold text-pencil-dark mb-1 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-pencil-medium leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
