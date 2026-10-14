import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProofBar } from "./components/SocialProofBar";
import { VideoSimulator } from "./components/VideoSimulator";
import { Features } from "./components/Features";
import { CastShowcase } from "./components/CastShowcase";
import { Formula } from "./components/Formula";
import { Platforms } from "./components/Platforms";
import { Calculator } from "./components/Calculator";
import { Testimonials } from "./components/Testimonials";
import { ComparisonTable } from "./components/ComparisonTable";
import { Bonus } from "./components/Bonus";
import { Steps } from "./components/Steps";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { ScrollAnimate } from "./components/ScrollAnimate";
import { RecentSalesNotification } from "./components/RecentSalesNotification";

export default function App() {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a061d] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* Live Sales Notification Popup */}
      <RecentSalesNotification />

      {/* Navigation Header */}
      <Header />

      {/* Hero Banner Section with top hero.png image */}
      <ScrollAnimate>
        <Hero onOpenPreview={() => setIsPreviewModalOpen(true)} />
      </ScrollAnimate>

      {/* DYNAMIC SOCIAL PROOF COUNTER BAR - RIGHT BELOW HERO */}
      <ScrollAnimate delay={50}>
        <SocialProofBar />
      </ScrollAnimate>

      {/* Interactive Video Simulator Modal */}
      <VideoSimulator
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />

      {/* Main Features: O que é & Sem Aparecer/Editar */}
      <ScrollAnimate delay={100}>
        <Features />
      </ScrollAnimate>

      {/* The Fruit Cast Showcase with fruta1-4 */}
      <ScrollAnimate delay={100}>
        <CastShowcase />
      </ScrollAnimate>

      {/* Embedded Video Player Demo with Imagemgerada_1791571261369.png */}
      <ScrollAnimate delay={100}>
        <VideoSimulator />
      </ScrollAnimate>

      {/* Novelinha Formula & Visual Style with Gemini_Generated_Image_is17wzis17wzis17.jfif */}
      <ScrollAnimate delay={100}>
        <Formula />
      </ScrollAnimate>

      {/* Platforms & 2.000+ Videos with Official Brand Logos */}
      <ScrollAnimate delay={100}>
        <Platforms />
      </ScrollAnimate>

      {/* Revenue Potential Calculator */}
      <ScrollAnimate delay={100}>
        <Calculator />
      </ScrollAnimate>

      {/* Comparison Table: Pack Viral vs Criar do Zero */}
      <ScrollAnimate delay={100}>
        <ComparisonTable />
      </ScrollAnimate>

      {/* Real Viralization Proof & Testimonials with Gemini_Generated_Image_3uw8w43uw8w43uw8.jfif */}
      <ScrollAnimate delay={100}>
        <Testimonials />
      </ScrollAnimate>

      {/* Exclusive Free Bonuses Section */}
      <ScrollAnimate delay={100}>
        <Bonus />
      </ScrollAnimate>

      {/* 3 Step Process */}
      <ScrollAnimate delay={100}>
        <Steps />
      </ScrollAnimate>

      {/* Pricing & Checkout Offer Card (R$ 10,00) */}
      <ScrollAnimate delay={100}>
        <Pricing />
      </ScrollAnimate>

      {/* FAQ Accordion */}
      <ScrollAnimate delay={100}>
        <FAQ />
      </ScrollAnimate>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom CTA */}
      <FloatingCTA />
    </div>
  );
}
