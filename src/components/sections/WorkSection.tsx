import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Staple } from '../ui/Stationery';


const creativeWords = ['WEB', 'DESIGN', 'MOTION', 'AI', 'AUTOMATION', 'GROWTH'];

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            CREATIVE SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
            SMART TOOLS + GREAT DESIGN
          </h2>
        </AnimatedSection>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {creativeWords.map((word, i) => (
            <AnimatedSection key={word} delay={i * 80}>
              <div className="group cursor-default">
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white/10 group-hover:text-white/30 transition-colors duration-500 tracking-tighter">
                  {word}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-16">
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            We don't just write code. We bring together smart tools and great design so your business looks professional and runs automatically.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
