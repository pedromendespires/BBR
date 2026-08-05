import React from 'react';
import { Currency } from '../types';
import { formatCurrency } from '../utils/formatters';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ShieldCheck, PiggyBank, Landmark } from 'lucide-react';

interface CapitalStructureSectionProps {
  currency: Currency;
  onOpenNda: () => void;
}

export const CapitalStructureSection: React.FC<CapitalStructureSectionProps> = ({ currency }) => {
  const capitalData = [
    { name: 'Capital Próprio (Equity)', value: 886000, color: '#0C2340' },
    { name: 'Dívida Bancária Assumida (Novo Banco)', value: 314002, color: '#00A8B5' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-slate-200">
      <div className="max-w-3xl mb-12">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">01. Análise da Estrutura</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight">
          Estrutura de Capital <span className="font-normal text-[#00A8B5]">& Vantagens Transacionais</span>
        </h2>
        <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
          A aquisição por Share Deal otimiza a eficiência do capital investido, minimizando o desembolso inicial e garantindo isenção total de IMT.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left Card: Recharts Donut Chart */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A8B5]" />
              Estrutura de Capital (Equity vs. Dívida)
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-normal">
              Enterprise Value de {formatCurrency(1200000, currency)} com otimização do Return on Equity (ROE).
            </p>

            <div className="relative h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={capitalData}
                    cx="50%"
                    cy="45%"
                    innerRadius={62}
                    outerRadius={92}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="#ffffff"
                    strokeWidth={2}
                  >
                    {capitalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: any) => [formatCurrency(Number(val), currency), 'Valor']}
                    contentStyle={{
                      backgroundColor: '#0C2340',
                      borderColor: '#00A8B5',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px',
                      padding: '8px 12px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    }}
                    itemStyle={{ color: '#00A8B5', fontWeight: 'bold' }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value, entry: any) => {
                      const item = entry?.payload;
                      const valStr = item ? formatCurrency(item.value, currency) : '';
                      return (
                        <span className="text-xs font-bold text-[#0C2340] inline-flex items-center gap-1.5 ml-1 mr-3">
                          <span>{value}:</span>
                          <span className="text-[#00A8B5] font-black">{valStr}</span>
                        </span>
                      );
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Centered Donut Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-9">
                <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Total (EV)</span>
                <span className="text-lg font-black text-[#0C2340] leading-none my-0.5">
                  {formatCurrency(1200000, currency)}
                </span>
                <span className="text-[10px] font-extrabold text-[#00A8B5] bg-[#E6F7F8] px-2 py-0.5 rounded-full border border-[#00A8B5]/20">
                  100%
                </span>
              </div>
            </div>

            {/* Explicit Value Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0C2340]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Capital Próprio (Equity)</span>
                </div>
                <p className="text-base font-black text-[#0C2340]">
                  {formatCurrency(886000, currency)} <span className="text-xs font-semibold text-slate-400">(73,8%)</span>
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8B5]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Dívida Bancária</span>
                </div>
                <p className="text-base font-black text-[#00A8B5]">
                  {formatCurrency(314000, currency)} <span className="text-xs font-semibold text-slate-400">(26,2%)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#E6F7F8] rounded-xl border border-[#00A8B5]/20 text-xs text-slate-700 leading-relaxed font-normal">
            O investidor aporta apenas 886.000 € de capital próprio, assumindo o financiamento bancário com excelentes condições contratadas até 2037 junto do Novo Banco.
          </div>
        </div>

        {/* Right Column: 3 Strategic Advantage Cards */}
        <div className="space-y-6 flex flex-col justify-between">
          {/* Card 1: Margem de Segurança Imobiliária */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E6F7F8] text-[#00A8B5] rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base text-[#0C2340] mb-1 font-bold">
                  Margem de Segurança Imobiliária
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  As avaliações imobiliárias oficiais da JLL (980.000 € em out/2025) e da Exit Casa Aveiro (1.050.000 € em jul/2026), ajustadas à valorização no centro histórico de Aveiro, situam o imóvel no patamar de 1 M€ em 2026. O prémio da operação comercial é de apenas 200.000 €, oferecendo uma margem de segurança de 87,5% sobre o capital investido.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Eficiência Transacional (Share Deal) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FFF4EC] text-[#FF8C42] rounded-xl shrink-0">
                <PiggyBank className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base text-[#0C2340] mb-1 font-bold">
                  Eficiência Transacional (Share Deal)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  A aquisição direta das quotas da sociedade "Vetores & Hipotenusas, Lda." permite uma poupança imediata de {formatCurrency(75000, currency)} em impostos (IMT e Imposto do Selo), alavancando a rentabilidade líquida efetiva.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Amortização Acelerada */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00A8B5] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E6F7F8] text-[#00A8B5] rounded-xl shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base text-[#0C2340] mb-1 font-bold">
                  Amortização Acelerada de Dívida
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Cerca de 64% do serviço de dívida mensal é destinado à redução direta do capital em dívida (~{formatCurrency(23000, currency)}/ano), transferindo valor de dívida para equity líquido do investidor de forma contínua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

