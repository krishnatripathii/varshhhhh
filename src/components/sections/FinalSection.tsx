import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GeometricBackground } from '../ui/GeometricBackground';
import { SpiderWebDoodle, NotebookSquiggle, RobotDoodle } from '../ui/Doodles';
import { Staple } from '../ui/Stationery';


export const FinalSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* CTA Block */}
      <div className="py-24 md:py-32 bg-board-green relative">
        <GeometricBackground variant="dense" />

        <div className="absolute top-[10%] left-[10%] w-48 h-48 text-chalk-pink/30/10 -rotate-12 pointer-events-none hidden md:block">
        <SpiderWebDoodle />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 text-chalk-blue/30/20 rotate-45 pointer-events-none hidden md:block">
        <RobotDoodle />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-6 font-bold">
              READY?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-white leading-[1.1] mb-8">
              READY TO BUILD
              <br />
              <span className="text-white font-bold">WHAT'S NEXT?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us what you're trying to build, automate or grow.
            </p>
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 bg-marker-yellow text-white px-10 py-4 font-bold text-sm tracking-wide rounded-full hover:bg-marker-yellow/90 transition-all duration-300 group"
            >
              START A CONVERSATION
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Form Block */}
      <div id="contact-form" className="py-24 md:py-32 bg-board-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            {/* Left */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
              <AnimatedSection>
                <p className="text-xs tracking-[0.3em] uppercase text-white font-bold/70 mb-4 font-bold flex items-center gap-3">
                  <span className="w-6 h-px bg-marker-yellow/40" />
                  GET IN TOUCH
                </p>
                <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-white leading-tight">
                  Let's talk about what you're building.
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-md">
                  You don't need a perfect brief. Tell us what you have in mind, and we'll figure out the next step together.
                </p>
                <p className="text-sm text-white/70/40">No pressure. Just a conversation.</p>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <AnimatedSection delay={200}>
                <div className="bg-board-green sketch-border rounded-2xl p-8 md:p-10 shadow-sketch relative">
                  <Staple className="top-4 left-4 rotate-45" />
                  <Staple className="top-6 left-2 rotate-45" />
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
