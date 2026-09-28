import React from 'react';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { StorySection } from './components/sections/StorySection';
import { WebAppSection } from './components/sections/WebAppSection';
import { WorkSection } from './components/sections/WorkSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { FaqSection } from './components/sections/FaqSection';
import { FinalSection } from './components/sections/FinalSection';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="relative w-full text-pencil-dark bg-paper-bg">
        <Navbar />

        <main className="relative w-full z-0 flex flex-col">
          <Hero />
          <TrustSection />
          <ServicesSection />
          <BeforeAfterSection />
          <SolutionsSection />
          <ProcessSection />
          <StorySection />
          <WebAppSection />
          <WorkSection />
          <AboutSection />
          <FaqSection />
          <FinalSection />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
