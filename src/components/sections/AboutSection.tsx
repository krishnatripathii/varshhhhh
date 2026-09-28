import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SpiderWebDoodle, AIDoodle } from '../ui/Doodles';
import { Staple } from '../ui/Stationery';


export const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-board-green relative overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-marker-yellow/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-[20%] left-[10%] w-32 h-32 text-chalk-yellow/30/10 -rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 text-chalk-blue/30/20 rotate-45 pointer-events-none hidden md:block">
        <AIDoodle />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-8 text-white text-balance leading-[1.15]">
            We believe good technology should feel simple.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            AI-VARSH brings together AI, automation, development, design, video and digital growth to help businesses build better digital experiences.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
