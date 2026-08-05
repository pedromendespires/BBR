import React, { useState } from 'react';
import { Currency, Language } from './types';
import { Header } from './components/Header';
import { KeyMetricsGrid } from './components/KeyMetricsGrid';
import { CapitalStructureSection } from './components/CapitalStructureSection';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { FinancialPerformance } from './components/FinancialPerformance';
import { AssetOverview } from './components/AssetOverview';
import { SwotAndRisk } from './components/SwotAndRisk';
import { Footer } from './components/Footer';
import { NdaModal } from './components/NdaModal';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [language, setLanguage] = useState<Language>('PT');
  const [isNdaOpen, setIsNdaOpen] = useState<boolean>(false);

  const scrollToSimulator = () => {
    document.getElementById('simulator-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Top Header */}
      <Header
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
        onOpenNda={() => setIsNdaOpen(true)}
        onScrollToSimulator={scrollToSimulator}
      />

      {/* Floating Quick Stats Cards */}
      <KeyMetricsGrid currency={currency} onOpenNda={() => setIsNdaOpen(true)} />

      {/* Capital Structure & Transaction Benefits */}
      <CapitalStructureSection currency={currency} onOpenNda={() => setIsNdaOpen(true)} />

      {/* Interactive Financial Simulator */}
      <InvestmentSimulator currency={currency} id="simulator-section" />

      {/* EBITDA & Revenue Seasonality Performance */}
      <FinancialPerformance currency={currency} />

      {/* Building Asset Explorer & 10 Suite Units */}
      <AssetOverview currency={currency} onOpenNda={() => setIsNdaOpen(true)} />

      {/* Strategic SWOT & Risk Matrix */}
      <SwotAndRisk />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <NdaModal isOpen={isNdaOpen} onClose={() => setIsNdaOpen(false)} />
    </div>
  );
}
