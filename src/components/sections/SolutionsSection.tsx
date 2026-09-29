import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const solutions = [
  { title: 'Smart Automation', desc: 'Software that does the boring, repetitive work for you.' },
  { title: 'Business Websites', desc: 'Simple, fast websites that actually get you new customers.' },
  { title: 'Smart Cameras', desc: 'Cameras that can count people, spot issues, and keep things safe.' },
  { title: 'Custom Software', desc: 'Simple portals and tools built exactly the way you want them.' },
  { title: 'Smart Replies', desc: 'WhatsApp agents that answer customers instantly, day or night.' },
  { title: 'AI Helpers', desc: 'Simple AI tools that organize your files and give you smart suggestions.' },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Solutions that <span className="marker-highlight-green text-white px-1">actually make sense</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, index) => (
            <AnimatedSection key={sol.title} delay={index * 80}>
              <div className="group bg-transparent border border-white/10 p-7 h-full hover:-translate-y-1   transition-all duration-400 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-white font-bold transition-colors duration-300">
                    {sol.title}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-white/70/20 group-hover:text-white font-bold group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm text-white/70/60 leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
