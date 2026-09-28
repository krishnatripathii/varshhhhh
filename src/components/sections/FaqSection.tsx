import React, { useState } from 'react';
import { SITE_CONTENT } from '../../data/content';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpidermanMaskDoodle, ArrowDoodle } from '../ui/Doodles';
import { Paperclip, Tape } from '../ui/Stationery';


export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-paper-surface">
      <div className="absolute top-[5%] right-[5%] w-48 h-48 text-pencil-light/10 rotate-12 pointer-events-none hidden md:block">
        <SpidermanMaskDoodle />
      </div>
      <div className="absolute bottom-[10%] left-[5%] w-32 h-32 text-pencil-light/10 -rotate-12 pointer-events-none hidden md:block">
        <ArrowDoodle />
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <Paperclip className="top-[5%] left-[5%] w-16 h-16 -rotate-12" />
        <AnimatedSection className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-pencil-dark font-bold/70 mb-4 font-bold flex items-center gap-3">
            <span className="w-6 h-px bg-marker-yellow/40" />
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-pencil-dark">
            Common Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col border-t border-pencil-medium/20">
          {SITE_CONTENT.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="border-b border-pencil-medium/20 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  >
                    <span className={`font-bold text-base md:text-lg transition-colors ${
                      isOpen ? 'text-pencil-dark font-bold' : 'text-pencil-dark group-hover:text-pencil-dark font-bold'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 transition-colors ${
                      isOpen ? 'text-pencil-dark font-bold' : 'text-pencil-medium/30 group-hover:text-pencil-dark font-bold'
                    }`}>
                      {isOpen ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <div className="pb-6 md:pb-8 text-pencil-medium text-base leading-relaxed max-w-3xl pr-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
