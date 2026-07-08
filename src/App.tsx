/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import WhyNagare from './components/WhyNagare';
import Services from './components/Services';
import Scenarios from './components/Scenarios';
import SolutionsCenter from './components/SolutionsCenter';
import Commitment from './components/Commitment';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset to account for navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-nagare-black min-h-screen font-sans selection:bg-nagare-cyan/20 selection:text-nagare-cyan relative text-nagare-white">
      {/* Floating Interactive Geometric Light Accents */}
      <div className="absolute top-[15%] left-1/4 w-[50vw] h-[50vw] bg-nagare-navy/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[45%] right-10 w-[40vw] h-[40vw] bg-nagare-petrol/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[75%] left-5 w-[60vw] h-[60vw] bg-nagare-navy/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Navigation */}
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)} 
        scrollToSection={scrollToSection} 
      />

      {/* Main Sections */}
      <main>
        {/* Full-screen Hero Splash with ripple interaction */}
        <Hero 
          onOpenContact={() => setIsContactOpen(true)} 
          scrollToSection={scrollToSection} 
        />

        {/* Brand Philosophy - Silent statement */}
        <Philosophy />

        {/* Why NAGARE - Principles and engineering beliefs */}
        <WhyNagare />

        {/* Systems Solutions - Interactive bento detail catalog */}
        <Services />

        {/* Context Scenarios - Conceptual architectural references */}
        <Scenarios />

        {/* Granular technical Solutions Center explorer */}
        <SolutionsCenter />

        {/* Quality commitment column blocks */}
        <Commitment />
      </main>

      {/* Final interactive contact card & Footer directory */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Futuristic Blueprint custom system configurator Modal Overlay */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
