import React from 'react';
import { Currency, Language } from '../types';
import { formatCurrency, TRANSLATIONS } from '../utils/formatters';
import { Calculator, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  onOpenNda: () => void;
  onScrollToSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  setCurrency,
  language,
  setLanguage,
  onOpenNda,
  onScrollToSimulator,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="bg-white text-slate-900 border-b border-slate-200">
      {/* Besmart Official Top Bar */}
      <nav className="bg-[#0C2340] text-white flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-12 2xl:px-16 3xl:px-20 py-3 text-xs uppercase tracking-wider font-bold gap-2">
        <div className="flex items-center gap-3">
          <span className="text-slate-200 text-xs font-bold tracking-wider">Boutique Residence Aveiro</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Currency Selector */}
          <div className="inline-flex rounded bg-[#061528] p-0.5 border border-slate-700 text-[10px] font-bold">
            {(['EUR', 'USD', 'GBP'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-2 py-1 sm:py-0.5 rounded transition-all cursor-pointer ${
                  currency === c
                    ? 'bg-[#00A8B5] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="inline-flex rounded bg-[#061528] p-0.5 border border-slate-700 text-[10px] font-bold">
            {(['PT', 'EN'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`px-2 py-1 sm:py-0.5 rounded transition-all cursor-pointer ${
                  language === l
                    ? 'bg-[#FF8C42] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Besmart Hero Grid */}
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1792px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 3xl:px-20 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6 sm:space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F7F8] text-[#008893] text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold border border-[#00A8B5]/20">
                <span className="w-2 h-2 rounded-full bg-[#00A8B5] animate-pulse" />
                <span>
                  {language === 'EN'
                    ? 'Investment or M&A Opportunity • Aveiro, Portugal'
                    : 'Oportunidade de investimento ou M&A • Aveiro, Portugal'}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tight text-[#0C2340]">
              Besmart <br />
              <span className="font-normal text-[#00A8B5]">Boutique Residence</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed mt-4 sm:mt-6 max-w-2xl">
              {t.subtitle}
            </p>

            {/* Image of Aveiro */}
            <div className="mt-5 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-900 group relative">
              <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                <img
                  src="https://besmart.pt/wp-content/uploads/2026/03/passeio-de-moliceiro.webp"
                  alt="Canais de Aveiro - Passeio de Moliceiro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between text-white gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#00A8B5] px-2 sm:px-2.5 py-1 bg-[#0C2340]/90 rounded-md border border-[#00A8B5]/30">
                      {language === 'EN' ? 'Experience Aveiro' : 'Viver Aveiro'}
                    </span>
                    <span className="text-xs font-semibold text-slate-100">
                      {language === 'EN' ? 'Canals & Historic Center' : 'Canais & Centro Histórico'}
                    </span>
                  </div>
                  <a
                    href="https://besmart.pt/viver-aveiro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-[11px] font-medium text-slate-200 hover:text-white underline underline-offset-2"
                  >
                    besmart.pt/viver-aveiro
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
            <button
              onClick={onScrollToSimulator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0C2340] hover:bg-[#061528] text-white font-bold py-3.5 px-7 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#0C2340]/20 min-h-[44px]"
            >
              <Calculator className="w-4 h-4 text-[#FF8C42]" />
              <span>{language === 'EN' ? 'Simulate Return' : 'Simular Retorno'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Key KPI Card */}
        <div className="lg:col-span-4 bg-[#0C2340] text-white rounded-3xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl">
          {/* Asset Featured Photo Banner */}
          <div className="relative h-44 sm:h-52 w-full bg-slate-900 overflow-hidden">
            <img
              src="https://besmart.pt/wp-content/uploads/2026/03/besmart_exterior_1_1-1280x853.webp"
              alt="Besmart Boutique Residence Aveiro"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between">
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] px-2 sm:px-2.5 py-0.5 bg-[#0C2340]/90 rounded border border-[#00A8B5]/30">
                  {language === 'EN' ? 'Actual Photo' : 'Fotografia Real'}
                </span>
                <p className="text-xs font-bold text-white mt-1">
                  {language === 'EN' ? 'Besmart Residence Facade' : 'Fachada Besmart Residence'}
                </p>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                {language === 'EN' ? 'Historic Center' : 'Centro Histórico'}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-8 space-y-6">
            <div className="border-b border-slate-700/80 pb-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#00A8B5]">
                {language === 'EN' ? 'Transactional Summary' : 'Resumo Transacional'}
              </h3>
              <span className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Share Deal 2026</span>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {t.enterpriseValue}
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-white">
                  {formatCurrency(1200000, currency)}
                </div>
                <div className="text-[11px] text-[#00A8B5] italic mt-0.5 font-medium">
                  {language === 'EN' ? 'Real Estate Asset + Total Business' : 'Ativo Imobiliário + Operação Total'}
                </div>
              </div>

              <div className="border-t border-slate-700/80 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {language === 'EN' ? 'Conservative Net Yield' : 'Net Yield Conservador'}
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  ~6.08%
                </div>
                <div className="text-[11px] text-slate-300 italic mt-0.5">
                  {language === 'EN' ? 'Conservative scenario (€102k/yr)' : 'Cenário conservador (102k €/ano)'}
                </div>
              </div>

              <div className="border-t border-slate-700/80 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {t.equityRequired}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {formatCurrency(886000, currency)}
                </div>
                <div className="text-[11px] text-slate-300 italic mt-0.5">
                  {language === 'EN' ? 'Assumption of bank financing with Novo Banco' : 'Assunção de Financiamento bancário junto do Novo Banco'}
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </header>
  );
};

