import React, { useState, useMemo } from 'react';
import { Currency, Language } from '../types';
import { formatCurrency, formatPercent } from '../utils/formatters';
import { Calculator, RotateCcw, Sliders, CheckCircle2 } from 'lucide-react';

interface InvestmentSimulatorProps {
  currency: Currency;
  language?: Language;
  id?: string;
}

export const InvestmentSimulator: React.FC<InvestmentSimulatorProps> = ({ currency, language = 'PT' as Language, id }) => {
  const isEn = language === 'EN';

  // Input parameters state
  const [enterpriseValue, setEnterpriseValue] = useState<number>(1200000);
  const [equityPercent, setEquityPercent] = useState<number>(73.8); // ~886k€ out of 1.2M€
  const [interestRate, setInterestRate] = useState<number>(4.2); // Euribor + Spread
  const [loanTermYears, setLoanTermYears] = useState<number>(12); // Until 2037
  const [academicMonthlyRev, setAcademicMonthlyRev] = useState<number>(8400); // 8.4k€ / mo
  const [summerTotalRev, setSummerTotalRev] = useState<number>(32000); // 32k€ summer total
  const [annualOpex, setAnnualOpex] = useState<number>(58000); // OPEX

  // Preset Handlers
  const setBaseCase = () => {
    setEnterpriseValue(1200000);
    setEquityPercent(73.8);
    setInterestRate(4.2);
    setLoanTermYears(12);
    setAcademicMonthlyRev(8400);
    setSummerTotalRev(32000);
    setAnnualOpex(58000);
  };

  const setConservativeCase = () => {
    setEnterpriseValue(1200000);
    setEquityPercent(73.8);
    setInterestRate(5.5);
    setLoanTermYears(12);
    setAcademicMonthlyRev(7200);
    setSummerTotalRev(25000);
    setAnnualOpex(62000);
  };

  const setOptimisticCase = () => {
    setEnterpriseValue(1200000);
    setEquityPercent(73.8);
    setInterestRate(3.5);
    setLoanTermYears(12);
    setAcademicMonthlyRev(9200);
    setSummerTotalRev(38000);
    setAnnualOpex(55000);
  };

  // Derived Financial Calculations
  const calculated = useMemo(() => {
    const requiredEquity = Math.round((enterpriseValue * equityPercent) / 100);
    const bankLoanAmount = Math.max(0, enterpriseValue - requiredEquity);

    // Gross Revenue
    const academicSeasonTotal = academicMonthlyRev * 10;
    const totalGrossRevenue = academicSeasonTotal + summerTotalRev;

    // EBITDA
    const ebitda = totalGrossRevenue - annualOpex;

    // Net Yield (EBITDA / EV)
    const netYield = enterpriseValue > 0 ? (ebitda / enterpriseValue) * 100 : 0;

    // Annual Debt Payment (PMT)
    let annualDebtService = 0;
    let annualInterest = 0;
    let annualAmortization = 0;

    if (bankLoanAmount > 0 && interestRate > 0 && loanTermYears > 0) {
      const monthlyRate = interestRate / 100 / 12;
      const totalMonths = loanTermYears * 12;
      const monthlyPayment =
        (bankLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      annualDebtService = monthlyPayment * 12;
      annualInterest = bankLoanAmount * (interestRate / 100);
      annualAmortization = Math.max(0, annualDebtService - annualInterest);
    }

    // Net Annual Cash Flow
    const netAnnualCashFlow = ebitda - annualDebtService;

    // Cash-on-Cash Return (ROE)
    const cashOnCashROE = requiredEquity > 0 ? (netAnnualCashFlow / requiredEquity) * 100 : 0;

    // Total Wealth Creation (Cash Flow + Principal Amortization)
    const totalEquityCreation = netAnnualCashFlow + annualAmortization;
    const totalROE = requiredEquity > 0 ? (totalEquityCreation / requiredEquity) * 100 : 0;

    return {
      requiredEquity,
      bankLoanAmount,
      totalGrossRevenue,
      academicSeasonTotal,
      ebitda,
      netYield,
      annualDebtService,
      annualInterest,
      annualAmortization,
      netAnnualCashFlow,
      cashOnCashROE,
      totalEquityCreation,
      totalROE,
    };
  }, [
    enterpriseValue,
    equityPercent,
    interestRate,
    loanTermYears,
    academicMonthlyRev,
    summerTotalRev,
    annualOpex,
  ]);

  return (
    <section id={id} className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12 sm:py-16 border-t border-slate-200 scroll-mt-20">
      <div className="bg-[#0C2340] text-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">
              {isEn ? '02. Financial Model' : '02. Modelo Financeiro'}
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {isEn ? 'Yield & Return' : 'Simulador de Rentabilidade'}{' '}
              <span className="font-normal text-[#00A8B5]">
                {isEn ? 'Simulator' : '& Retorno'}
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 font-normal">
              {isEn
                ? 'Adjust acquisition, leverage, and occupancy variables to analyze cash flows and ROE in real time.'
                : 'Ajuste as variáveis de aquisição, financiamento e ocupação para calcular o fluxo e ROE em tempo real.'}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={setBaseCase}
              className="px-3.5 py-2 bg-[#00A8B5] hover:bg-[#008893] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-md min-h-[38px]"
            >
              {isEn ? 'Base Case' : 'Cenário Base'}
            </button>
            <button
              onClick={setConservativeCase}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-700 transition-all cursor-pointer min-h-[38px]"
            >
              {isEn ? 'Conservative' : 'Conservador'}
            </button>
            <button
              onClick={setOptimisticCase}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-700 transition-all cursor-pointer min-h-[38px]"
            >
              {isEn ? 'Optimistic' : 'Otimista'}
            </button>
          </div>
        </div>

        {/* Grid: Inputs vs Real-Time Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mt-6 sm:mt-8">
          {/* Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8B5] flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#00A8B5]" />
              <span>{isEn ? 'Model Inputs' : 'Parâmetros do Modelo'}</span>
            </h3>

            {/* Slider 1: Enterprise Value */}
            <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
              <div className="flex flex-wrap justify-between items-center mb-2 gap-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                  {isEn ? 'Enterprise Value (Deal Price)' : 'Enterprise Value (Preço da Operação)'}
                </label>
                <span className="text-sm sm:text-base font-extrabold text-white">
                  {formatCurrency(enterpriseValue, currency)}
                </span>
              </div>
              <input
                type="range"
                min={1000000}
                max={1500000}
                step={10000}
                value={enterpriseValue}
                onChange={(e) => setEnterpriseValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A8B5]"
              />
              <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                <span>1,000,000 €</span>
                <span>1,200,000 € ({isEn ? 'Baseline' : 'Dossiê'})</span>
                <span>1,500,000 €</span>
              </div>
            </div>

            {/* Slider 2: Equity % / Debt % */}
            <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
              <div className="flex flex-wrap justify-between items-center mb-2 gap-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                  {isEn ? 'Equity Percentage' : 'Percentagem de Capital Próprio (Equity)'}
                </label>
                <span className="text-sm sm:text-base font-extrabold text-[#00A8B5]">
                  {equityPercent.toFixed(1)}% ({formatCurrency(calculated.requiredEquity, currency)})
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={100}
                step={0.5}
                value={equityPercent}
                onChange={(e) => setEquityPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A8B5]"
              />
              <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                <span>50% Equity (600k€)</span>
                <span>73.8% ({isEn ? '886k€ Baseline' : '886k€ Dossiê'})</span>
                <span>100% Equity (1.2M€)</span>
              </div>
            </div>

            {/* Grid 2-col for Bank Rate & Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {isEn ? 'Interest Rate %' : 'Taxa do Empréstimo %'}
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-[#00A8B5]">
                    {interestRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={7.5}
                  step={0.1}
                  value={interestRate}
                  disabled={equityPercent === 100}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A8B5] disabled:opacity-30"
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">
                  {isEn ? 'Euribor 12M + Novo Banco Spread' : 'Euribor 12M + Spread Novo Banco'}
                </p>
              </div>

              <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {isEn ? 'Remaining Loan Term' : 'Prazo Restante da Dívida'}
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-[#00A8B5]">
                    {loanTermYears} {isEn ? 'Years' : 'Anos'}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={20}
                  step={1}
                  value={loanTermYears}
                  disabled={equityPercent === 100}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00A8B5] disabled:opacity-30"
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">
                  {isEn ? 'Existing financing until June 2037' : 'Financiamento existente até 2037'}
                </p>
              </div>
            </div>

            {/* Slider 3: Revenue Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {isEn ? 'Academic Monthly Rent' : 'Faturação Média Letiva'}
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-400">
                    {formatCurrency(academicMonthlyRev, currency)}/{isEn ? 'mo' : 'mês'}
                  </span>
                </div>
                <input
                  type="range"
                  min={6000}
                  max={12000}
                  step={200}
                  value={academicMonthlyRev}
                  onChange={(e) => setAcademicMonthlyRev(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">
                  {isEn
                    ? `Academic Total (10 mos): ${formatCurrency(calculated.academicSeasonTotal, currency)}`
                    : `Total Letivo (10 meses): ${formatCurrency(calculated.academicSeasonTotal, currency)}`}
                </p>
              </div>

              <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {isEn ? 'Summer Tourist Revenue' : 'Faturação Verão AL (Jul-Ago)'}
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-400">
                    {formatCurrency(summerTotalRev, currency)}
                  </span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={45000}
                  step={1000}
                  value={summerTotalRev}
                  onChange={(e) => setSummerTotalRev(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">
                  {isEn ? 'Peak summer season (2 months)' : 'Época alta turística (2 meses)'}
                </p>
              </div>
            </div>

            {/* Slider 4: Annual OPEX */}
            <div className="bg-[#071629] p-4 sm:p-5 rounded-2xl border border-slate-700/60">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wide">
                  {isEn ? 'Annual Operating Expenses (OPEX)' : 'Custos Operacionais Anuais (OPEX)'}
                </label>
                <span className="text-sm sm:text-base font-extrabold text-rose-400">
                  {formatCurrency(annualOpex, currency)}
                </span>
              </div>
              <input
                type="range"
                min={40000}
                max={75000}
                step={1000}
                value={annualOpex}
                onChange={(e) => setAnnualOpex(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">
                {isEn ? 'Includes utilities, insurance, maintenance, and management fees.' : 'Inclui consumos, seguros, manutenção e taxa de gestão.'}
              </p>
            </div>
          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#071629] p-5 sm:p-8 rounded-2xl border border-[#00A8B5]/40 space-y-6 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A8B5] flex items-center justify-between border-b border-white/10 pb-4">
                <span>{isEn ? 'Model Results' : 'Resultados do Modelo'}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  {isEn ? 'Real-Time Calculation' : 'Cálculo Dinâmico'}
                </span>
              </h3>

              {/* Main Net Yield Badge */}
              <div className="bg-[#0C2340] p-4 sm:p-5 rounded-xl border border-slate-700 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    {isEn ? 'Operational Net Yield' : 'Net Yield Operacional'}
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-[#FF8C42]">
                    {formatPercent(calculated.netYield, language)}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    {isEn ? 'Annual EBITDA' : 'EBITDA Anual'}
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-white">
                    {formatCurrency(calculated.ebitda, currency)}
                  </p>
                </div>
              </div>

              {/* Cash-on-Cash ROE & Total ROE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#0C2340] p-4 rounded-xl border border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Cash-on-Cash ROE</p>
                  <p className="text-lg sm:text-xl font-black text-white mt-1">
                    {formatPercent(calculated.cashOnCashROE, language)}
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5 italic">
                    {isEn ? 'Net Cash Flow / Equity' : 'Fluxo Líquido / Equity'}
                  </p>
                </div>

                <div className="bg-[#0C2340] p-4 rounded-xl border border-slate-700">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {isEn ? 'Total ROE (inc. Amort.)' : 'ROE Total (c/ Amort.)'}
                  </p>
                  <p className="text-lg sm:text-xl font-black text-emerald-400 mt-1">
                    {formatPercent(calculated.totalROE, language)}
                  </p>
                  <p className="text-[9px] text-slate-400 mt-0.5 italic">
                    {isEn ? 'Cash Flow + Amortization' : 'Cash Flow + Amortização'}
                  </p>
                </div>
              </div>

              {/* Detailed Breakdown Rows */}
              <div className="space-y-3 text-xs divide-y divide-white/10 pt-2 font-normal">
                <div className="flex justify-between pt-3">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">
                    {isEn ? 'Total Gross Revenue' : 'Receita Bruta Total'}
                  </span>
                  <span className="text-white font-bold">
                    {formatCurrency(calculated.totalGrossRevenue, currency)}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">
                    {isEn ? 'Operational EBITDA' : 'EBITDA Operacional'}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {formatCurrency(calculated.ebitda, currency)}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">
                    {isEn ? 'Annual Debt Service' : 'Serviço de Dívida Anual'}
                  </span>
                  <span className="text-rose-400 font-bold">
                    -{formatCurrency(calculated.annualDebtService, currency)}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">
                    {isEn ? 'Capital Amortization (Equity)' : 'Amortização de Capital (Equity)'}
                  </span>
                  <span className="text-[#00A8B5] font-bold">
                    +{formatCurrency(calculated.annualAmortization, currency)}
                  </span>
                </div>

                <div className="flex justify-between pt-3 text-sm">
                  <span className="text-slate-200 uppercase tracking-wider text-[11px] font-bold">
                    {isEn ? 'Annual Free Cash Flow' : 'Fluxo de Caixa Livre Anual'}
                  </span>
                  <span className="text-[#FF8C42] font-black text-base">
                    {formatCurrency(calculated.netAnnualCashFlow, currency)}
                  </span>
                </div>
              </div>

              {/* Wealth Creation Summary Box */}
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30 text-xs text-emerald-200 space-y-1">
                <p className="font-bold text-emerald-300 text-xs sm:text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isEn ? 'Annual Wealth Creation:' : 'Criação de Valor Anual:'} {formatCurrency(calculated.totalEquityCreation, currency)}
                  </span>
                </p>
                <p className="text-[11px] text-emerald-200/80 leading-relaxed font-normal">
                  {isEn
                    ? `Sum of free cash flow (${formatCurrency(calculated.netAnnualCashFlow, currency)}) plus equity build-up from debt amortization (${formatCurrency(calculated.annualAmortization, currency)}).`
                    : `Soma do caixa livre gerado (${formatCurrency(calculated.netAnnualCashFlow, currency)}) com a criação de património por amortização de dívida (${formatCurrency(calculated.annualAmortization, currency)}).`}
                </p>
              </div>
            </div>

            <button
              onClick={setBaseCase}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-700 transition-all cursor-pointer min-h-[44px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isEn ? 'Reset to Baseline Parameters' : 'Restaurar Parâmetros do Dossiê'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

