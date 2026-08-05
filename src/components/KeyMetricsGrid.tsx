import React from 'react';
import { Currency } from '../types';
import { formatCurrency } from '../utils/formatters';
import { ShieldCheck, PiggyBank, Landmark, Cpu } from 'lucide-react';

interface KeyMetricsGridProps {
  currency: Currency;
  onOpenNda: () => void;
}

export const KeyMetricsGrid: React.FC<KeyMetricsGridProps> = ({ currency }) => {
  return (
    <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 my-8 sm:my-12 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
        {/* Metric 1: Share Deal Fiscal Benefit */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#E6F7F8] text-[#00A8B5] flex items-center justify-center font-bold">
              <PiggyBank className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Isenção IMT
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Poupança Fiscal Share Deal</p>
          <p className="text-2xl sm:text-3xl font-black text-[#0C2340] mt-1">
            {formatCurrency(75000, currency)}
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            Aquisição direta de 100% das quotas societárias com isenção total de IMT e Imposto do Selo.
          </p>
        </div>

        {/* Metric 2: Capital Amortization */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#E6F7F8] text-[#00A8B5] flex items-center justify-center font-bold">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
              Equity Passivo
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Amortização de Capital</p>
          <p className="text-2xl sm:text-3xl font-black text-[#0C2340] mt-1">
            64% <span className="text-sm sm:text-base font-medium text-slate-500">da prestação</span>
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            Aproximadamente {formatCurrency(23000, currency)}/ano de criação contínua de património líquido pagas pelo fluxo operacional.
          </p>
        </div>

        {/* Metric 3: Real Estate Appraisal & Safety Margin */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4EC] text-[#FF8C42] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FFF4EC] text-[#FF8C42] border border-[#FF8C42]/30">
              87.5% Cobertura
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Avaliação do Imóvel</p>
          <p className="text-2xl sm:text-3xl font-black text-[#0C2340] mt-1">
            ~{formatCurrency(1000000, currency)}
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            Prémio operacional de apenas {formatCurrency(200000, currency)} sobre o valor tangível do imóvel no centro histórico.
          </p>
        </div>

        {/* Metric 4: Automated Operations */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#E6F7F8] text-[#00A8B5] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
              Operação Autónoma
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Custos de Pessoal</p>
          <p className="text-2xl sm:text-3xl font-black text-[#0C2340] mt-1">
            0 € <span className="text-sm sm:text-base font-medium text-slate-500">/ Mês</span>
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            EBITDA médio de {formatCurrency(36668, currency)}/ano com gestão remota e automação por domótica e fechaduras digitais.
          </p>
        </div>
      </div>
    </section>
  );
};

