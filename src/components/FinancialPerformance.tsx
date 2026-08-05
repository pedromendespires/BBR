import React from 'react';
import { Currency } from '../types';
import { formatCurrency, formatPercent } from '../utils/formatters';
import { EBITDA_HISTORY, RISK_RETURN_BENCHMARKS } from '../data/dossierData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';
import { TrendingUp, Sun, GraduationCap } from 'lucide-react';

interface FinancialPerformanceProps {
  currency: Currency;
}

export const FinancialPerformance: React.FC<FinancialPerformanceProps> = ({ currency }) => {
  const ebitdaChartData = EBITDA_HISTORY.map((item) => ({
    year: item.year,
    EBITDA: item.ebitda,
    Receita: item.revenue,
    OPEX: item.opex,
  }));

  const revenueSeasonData = [
    {
      label: 'Época Letiva (10 M) - Mínimo',
      value: 70000,
      fill: '#0C2340',
    },
    {
      label: 'Época Letiva (10 M) - Máximo',
      value: 90000,
      fill: '#183B6B',
    },
    {
      label: 'Verão (2 M) - Conservador',
      value: 28800,
      fill: '#00A8B5',
    },
    {
      label: 'Verão (2 M) - Otimista',
      value: 36000,
      fill: '#FF8C42',
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 2xl:px-16 border-t border-slate-200 max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">03. Histórico e Projeções</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight">
            Desempenho Financeiro Histórico <span className="font-normal text-[#00A8B5]">& Modelo Híbrido</span>
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
            Consistência auditada nos últimos 3 anos com operação enxuta, alta ocupação e flexibilidade sazonal.
          </p>
        </div>

        {/* Grid 1: EBITDA Evolution & Risk vs Return */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: EBITDA Evolution Bar Chart */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0C2340] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8B5]" />
                  Evolução do EBITDA (2023-2025)
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 bg-[#0C2340] text-white rounded-lg">
                  Média: {formatCurrency(36668, currency)}/ano
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Dados auditados comprovando custos fixos reduzidos e operação autónoma sem encargos com pessoal.
              </p>

              <div className="h-56 sm:h-64 lg:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ebitdaChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <XAxis dataKey="year" stroke="#64748b" fontSize={11} />
                    <YAxis stroke="#64748b" fontSize={11} tickFormatter={(val) => `${val / 1000}k€`} />
                    <Tooltip
                      formatter={(val: any) => [formatCurrency(Number(val), currency), '']}
                      contentStyle={{
                        backgroundColor: '#0C2340',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '11px',
                      }}
                    />
                    <Bar dataKey="EBITDA" fill="#0C2340" radius={[6, 6, 0, 0]}>
                      {ebitdaChartData.map((_, index) => (
                        <Cell key={`ebitda-cell-${index}`} fill={index === 2 ? '#00A8B5' : '#0C2340'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-[#0C2340]">Destaques Auditados (2023-2025):</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 font-normal">
                <li>2023: 39.222 € (Pico de ocupação de Verão)</li>
                <li>2024: 35.295 € (Ajuste de eficiência e climatização)</li>
                <li>2025: 35.486 € (Consolidação de tarifários académicos)</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Risk vs Return positioning */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0C2340] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C42]" />
                  Perfil Risco vs. Retorno
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 bg-[#FF8C42] text-white rounded-lg">
                  Yield ~9,1%
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Comparativo de rendimento líquido em relação a outras classes de ativos imobiliários na Europa.
              </p>

              <div className="h-56 sm:h-64 lg:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
                    <XAxis
                      type="number"
                      dataKey="risk"
                      name="Risco Percebido"
                      stroke="#64748b"
                      fontSize={11}
                      domain={[0, 20]}
                      unit=" pts"
                    />
                    <YAxis
                      type="number"
                      dataKey="yield"
                      name="Net Yield"
                      stroke="#64748b"
                      fontSize={11}
                      unit="%"
                      domain={[0, 12]}
                    />
                    <ZAxis type="number" dataKey="size" range={[100, 500]} />
                    <Tooltip
                      cursor={{ strokeDasharray: '3 3' }}
                      content={({ payload }) => {
                        if (!payload || !payload.length) return null;
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#0C2340] text-white p-3 rounded-lg text-xs space-y-1 shadow-lg">
                            <p className="font-bold text-[#00A8B5]">{data.name}</p>
                            <p>Net Yield: {formatPercent(data.yield)}</p>
                            <p>Índice de Risco: {data.risk}/20</p>
                          </div>
                        );
                      }}
                    />
                    <Scatter name="Ativos" data={RISK_RETURN_BENCHMARKS}>
                      {RISK_RETURN_BENCHMARKS.map((entry, index) => (
                        <Cell key={`scatter-cell-${index}`} fill={entry.name.includes('Besmart') ? '#00A8B5' : '#0C2340'} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-normal">
              <strong className="font-bold text-[#0C2340]">Posicionamento Privilegiado:</strong> O projeto Besmart oferece um prémio de rentabilidade significativo (~9,1%) relativamente à habitação tradicional (5,2%) e fundos comerciais (5,8%), suportado pela escassez de alojamento académico no centro de Aveiro.
            </div>
          </div>
        </div>

        {/* Grid 2: Hybrid Business Model (Academic vs Summer) */}
        <div className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0C2340]">
              Modelo de Negócio Híbrido: <span className="font-normal text-[#00A8B5]">Estabilidade + Picos de Lucro</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-normal">
              Combinação otimizada entre alojamento universitário de média duração e exploração turística de alta margem no Verão.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chart Column (7 cols) */}
            <div className="lg:col-span-7 h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueSeasonData} layout="vertical" margin={{ left: 0, right: 10 }}>
                  <XAxis type="number" stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v / 1000}k€`} />
                  <YAxis dataKey="label" type="category" stroke="#475569" fontSize={10} width={150} />
                  <Tooltip
                    formatter={(val: any) => [formatCurrency(Number(val), currency), 'Faturação Total']}
                    contentStyle={{ backgroundColor: '#0C2340', color: '#fff', fontSize: '11px', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {revenueSeasonData.map((entry, index) => (
                      <Cell key={`rev-cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Explanation Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-[#E6F7F8] text-[#00A8B5] rounded-xl shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C2340] text-sm">Época Letiva (Setembro a Junho)</h4>
                    <p className="text-[10px] uppercase tracking-wider text-[#00A8B5] font-extrabold">10 Meses de Contrato Garantido</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Focado em estudantes internacionais e investigadores da Universidade de Aveiro. Faturação estável de <strong>7.000 € a 9.000 € / mês</strong>, cobrindo a totalidade do OPEX.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-[#FFF4EC] text-[#FF8C42] rounded-xl shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C2340] text-sm">Época Balnear (Julho e Agosto)</h4>
                    <p className="text-[10px] uppercase tracking-wider text-[#FF8C42] font-extrabold">2 Meses de Alta Rentabilidade AL</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Aproveitamento do turismo em Aveiro. Faturação total no Verão entre <strong>28.000 € e 36.000 €</strong>, impulsionando a margem líquida global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

