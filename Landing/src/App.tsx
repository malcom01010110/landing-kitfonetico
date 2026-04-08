import React from 'react';
import { StickyAlertBar } from './components/StickyAlertBar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { RootCauseSection } from './components/RootCauseSection';
import { ProductPresentation } from './components/ProductPresentation';
import { WhyItWorks } from './components/WhyItWorks';
import { ExpectedResults } from './components/ExpectedResults';
import { WhatsIncluded } from './components/WhatsIncluded';
import { BonusSection } from './components/BonusSection';
import { PricingOffer } from './components/PricingOffer';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen font-body text-body bg-cream selection:bg-accent/30">
      <StickyAlertBar />

      <main>
        <HeroSection />
        <ProblemSection />
        <RootCauseSection />
        <ProductPresentation />
        <WhyItWorks />
        <ExpectedResults />
        <WhatsIncluded />
        <BonusSection />
        <PricingOffer />
        <GuaranteeSection />
        <Testimonials />
        <FAQSection />
      </main>

      <Footer />
    </div>);

}