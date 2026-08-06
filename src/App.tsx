import React, { useState, useEffect } from 'react';
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
import { ArrowUp, Calculator, Building, PieChart, Camera, ShieldAlert, Layers } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [language, setLanguage] = useState<Language>('PT');
  const [isNdaOpen, setIsNdaOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const isEn = language === 'EN';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'metrics-section', label: isEn ? 'Highlights' : 'Resumo', icon: Layers },
    { id: 'capital-section', label: isEn ? 'Capital' : 'Capital', icon: Building },
    { id: 'simulator-section', label: isEn ? 'Simulator' : 'Simulador', icon: Calculator },
    { id: 'performance-section', label: isEn ? 'Financials' : 'Financeiro', icon: PieChart },
    { id: 'asset-section', label: isEn ? 'Asset & Suites' : 'Ativo & Suites', icon: Camera },
    { id: 'risk-section', label: isEn ? 'SWOT' : 'Análise SWOT', icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Top Header */}
      <Header
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
        onOpenNda={() => setIsNdaOpen(true)}
        onScrollToSimulator={() => scrollToSection('simulator-section')}
      />

      {/* Sticky Quick Nav Bar */}
      <div className="sticky top-0 z-40 bg-[#0C2340]/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md transition-all">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-2.5 overflow-x-auto no-scrollbar flex items-center justify-between gap-2 sm:gap-4 text-xs font-bold">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/80 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px] font-semibold whitespace-nowrap min-h-[32px]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00A8B5]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Quick Stats Cards */}
      <div id="metrics-section" className="scroll-mt-16">
        <KeyMetricsGrid currency={currency} language={language} onOpenNda={() => setIsNdaOpen(true)} />
      </div>

      {/* Capital Structure & Transaction Benefits */}
      <div id="capital-section" className="scroll-mt-16">
        <CapitalStructureSection currency={currency} language={language} onOpenNda={() => setIsNdaOpen(true)} />
      </div>

      {/* Interactive Financial Simulator */}
      <div id="simulator-section" className="scroll-mt-16">
        <InvestmentSimulator currency={currency} language={language} />
      </div>

      {/* EBITDA & Revenue Seasonality Performance */}
      <div id="performance-section" className="scroll-mt-16">
        <FinancialPerformance currency={currency} language={language} />
      </div>

      {/* Building Asset Explorer & 10 Suite Units */}
      <div id="asset-section" className="scroll-mt-16">
        <AssetOverview currency={currency} language={language} onOpenNda={() => setIsNdaOpen(true)} />
      </div>

      {/* Strategic SWOT & Risk Matrix */}
      <div id="risk-section" className="scroll-mt-16">
        <SwotAndRisk language={language} />
      </div>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label={isEn ? 'Scroll to top' : 'Voltar ao topo'}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#0C2340] hover:bg-[#00A8B5] text-white rounded-full shadow-2xl border border-slate-700 transition-all cursor-pointer flex items-center justify-center min-h-[48px] min-w-[48px]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals */}
      <NdaModal isOpen={isNdaOpen} language={language} onClose={() => setIsNdaOpen(false)} />
    </div>
  );
}

