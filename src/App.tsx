import React, { useState } from 'react';
import { RegionId } from './types/property';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RegionExplorer } from './components/RegionExplorer';
import { DevelopmentDetails } from './components/DevelopmentDetails';
import { ComparisonTable } from './components/ComparisonTable';
import { FinancingSimulator } from './components/FinancingSimulator';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import { FloatingInterestBar } from './components/FloatingInterestBar';

export default function App() {
  const [activeRegion, setActiveRegion] = useState<RegionId>('tatuape');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalRegion, setModalRegion] = useState<RegionId>('tatuape');

  const handleSelectRegion = (region: RegionId) => {
    setActiveRegion(region);
  };

  const handleOpenInterestModal = (region?: RegionId) => {
    const target = region || activeRegion;
    setModalRegion(target);
    setActiveRegion(target);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-500 selection:text-white pb-14">
      {/* Navigation */}
      <Navbar
        activeRegion={activeRegion}
        onSelectRegion={handleSelectRegion}
        onOpenInterestModal={handleOpenInterestModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Region Switcher & High-Impact Visual */}
        <Hero
          activeRegion={activeRegion}
          onSelectRegion={handleSelectRegion}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Detailed Region & Neighborhood Explorer (Mooca / Tatuapé / Vila Ema) */}
        <RegionExplorer
          activeRegion={activeRegion}
          onSelectRegion={handleSelectRegion}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Development Floor Plans, Typologies & Amenities */}
        <DevelopmentDetails
          activeRegion={activeRegion}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Side-by-side Comparison between Mooca, Tatuapé and Vila Ema */}
        <ComparisonTable
          activeRegion={activeRegion}
          onSelectRegion={handleSelectRegion}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Financial Flow and Entry Simulator */}
        <FinancingSimulator
          activeRegion={activeRegion}
          onSelectRegion={handleSelectRegion}
          onOpenInterestModal={handleOpenInterestModal}
        />

        {/* Dedicated Embedded Google Form Section for the Chosen Unit */}
        <FormSection
          activeRegion={activeRegion}
          onSelectRegion={handleSelectRegion}
        />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Persistent Floating Interest Action Bar */}
      <FloatingInterestBar
        activeRegion={activeRegion}
        onOpenInterestModal={handleOpenInterestModal}
      />

      {/* Interactive Modal Form Dialog */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialRegion={modalRegion}
        onSelectRegion={handleSelectRegion}
      />
    </div>
  );
}
