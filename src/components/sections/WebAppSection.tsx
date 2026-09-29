import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Paperclip } from '../ui/Stationery';


const technologies = [
  'AI', 'Python', 'Computer Vision', 'Automation',
  'React', 'Node.js', 'Cloud', 'APIs', 'Analytics',
  'TypeScript', 'Next.js', 'Firebase',
];

export const WebAppSection = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-[-25px] right-32 w-14 h-14 rotate-[20deg] text-white/70/60" />
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            TECHNOLOGY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Tools we actually use.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100} className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:border-pencil-dark hover:text-white transition-all duration-300 cursor-default bg-transparent/50"
            >
              {tech}
            </span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
