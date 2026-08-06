import React from 'react';
import { Currency, Language } from '../types';
import { formatCurrency } from '../utils/formatters';
import { ShieldCheck, PiggyBank, Landmark, Cpu } from 'lucide-react';

interface KeyMetricsGridProps {
  currency: Currency;
  language?: Language;
  onOpenNda: () => void;
}

export const KeyMetricsGrid: React.FC<KeyMetricsGridProps> = ({ currency, language = 'PT' }) => {
  const isEn = language === 'EN';

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
              {isEn ? 'Transfer Tax & Stamp Duty Exemption' : 'Isenção IMT + Imposto de Selo'}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {isEn ? 'Share Deal Tax Savings' : 'Poupança Fiscal Share Deal'}
          </p>
          <p className="text-lg sm:text-xl font-extrabold text-[#0C2340] mt-1">
            {currency === 'EUR'
              ? isEn ? '€75,000 to €90,000' : '75 000 € a 90 000 €'
              : isEn ? `${formatCurrency(75000, currency)} to ${formatCurrency(90000, currency)}` : `${formatCurrency(75000, currency)} a ${formatCurrency(90000, currency)}`}
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            {isEn
              ? 'The sale involves the acquisition of corporate shares, guaranteeing full exemption from Property Transfer Tax (IMT) and Stamp Duty, generating immediate transactional savings in the range of €75,000 to €90,000.'
              : 'A venda incide sobre as quotas da sociedade, garantindo isenção total de IMT e Imposto do Selo, o que gera uma poupança transacional imediata na ordem dos 75 000 € a 90 000€.'}
          </p>
        </div>

        {/* Metric 2: Capital Amortization */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#E6F7F8] text-[#00A8B5] flex items-center justify-center font-bold">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
              {isEn ? 'Passive Equity' : 'Equity Passivo'}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {isEn ? 'Capital Amortization' : 'Amortização de Capital'}
          </p>
          <p className="text-lg sm:text-xl font-extrabold text-[#0C2340] mt-1">
            64% <span className="text-xs sm:text-sm font-medium text-slate-500">{isEn ? 'of monthly debt' : 'da prestação'}</span>
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            {isEn
              ? `Approximately ${formatCurrency(23000, currency)}/yr of equity build-up fully funded by operational cash flows.`
              : `Aproximadamente ${formatCurrency(23000, currency)}/ano de criação contínua de património líquido pagas pelo fluxo operacional.`}
          </p>
        </div>

        {/* Metric 3: Real Estate Appraisal & Safety Margin */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4EC] text-[#FF8C42] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FFF4EC] text-[#FF8C42] border border-[#FF8C42]/30">
              {isEn ? '87.5% Asset Coverage' : '87.5% Cobertura'}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {isEn ? 'Property Appraisal' : 'Avaliação do Imóvel'}
          </p>
          <p className="text-lg sm:text-xl font-extrabold text-[#0C2340] mt-1">
            ~{formatCurrency(1000000, currency)}
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            {isEn
              ? `Business premium of only ${formatCurrency(200000, currency)} over the prime historic center real estate valuation.`
              : `Prémio operacional de apenas ${formatCurrency(200000, currency)} sobre o valor tangível do imóvel no centro histórico.`}
          </p>
        </div>

        {/* Metric 4: Automated Operations */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#E6F7F8] text-[#00A8B5] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
              {isEn ? 'Autonomous Operation' : 'Operação Autónoma'}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {isEn ? 'Payroll Costs' : 'Custos de Pessoal'}
          </p>
          <p className="text-lg sm:text-xl font-extrabold text-[#0C2340] mt-1">
            0 € <span className="text-xs sm:text-sm font-medium text-slate-500">{isEn ? '/ Month' : '/ Mês'}</span>
          </p>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            {isEn
              ? `Average EBITDA of ${formatCurrency(36668, currency)}/yr with professional management.`
              : `EBITDA médio de ${formatCurrency(36668, currency)}/ano com gestão profissionalizada.`}
          </p>
        </div>
      </div>
    </section>
  );
};

