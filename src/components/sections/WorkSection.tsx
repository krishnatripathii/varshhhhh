import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SpiderWebDoodle, NotebookSquiggle, RobotDoodle } from '../ui/Doodles';
import { Staple } from '../ui/Stationery';


const creativeWords = ['WEB', 'DESIGN', 'MOTION', 'AI', 'AUTOMATION', 'GROWTH'];

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-pastel-blush relative overflow-hidden">
      <div className="absolute top-[10%] left-[2%] w-24 h-24 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[5%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-pencil-dark font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            CREATIVE SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-pencil-dark">
            SMART TOOLS + GREAT DESIGN
          </h2>
        </AnimatedSection>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {creativeWords.map((word, i) => (
            <AnimatedSection key={word} delay={i * 80}>
              <div className="group cursor-default">
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-pencil-dark/40 group-hover:text-pencil-dark transition-colors duration-500 tracking-tighter">
                  {word}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-16">
          <p className="text-lg text-pencil-medium max-w-xl leading-relaxed">
            We don't just write code. We bring together smart tools and great design so your business looks professional and runs automatically.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
