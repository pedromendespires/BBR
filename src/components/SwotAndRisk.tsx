import React from 'react';
import { SWOT_DATA } from '../data/dossierData';
import { ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

export const SwotAndRisk: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-slate-200">
      {/* Part 1: SWOT Analysis */}
      <div>
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">05. Matriz Estratégica</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight">
            Análise SWOT <span className="font-normal text-[#00A8B5]">& Posicionamento</span>
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
            Avaliação rigorosa do posicionamento interno e externo do investimento na Besmart Boutique Residence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Strengths */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A8B5]" />
                <h3 className="text-[#0C2340] font-bold text-xs uppercase tracking-wider">
                  FORÇAS (Strengths)
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 font-normal leading-relaxed">
                {SWOT_DATA[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Opportunities */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C2340]" />
                <h3 className="text-[#0C2340] font-bold text-xs uppercase tracking-wider">
                  OPORTUNIDADES (Opps)
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 font-normal leading-relaxed">
                {SWOT_DATA[1].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C42]" />
                <h3 className="text-[#0C2340] font-bold text-xs uppercase tracking-wider">
                  FRAQUEZAS (Weaknesses)
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 font-normal leading-relaxed">
                {SWOT_DATA[2].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#FF8C42] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Threats */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <h3 className="text-[#0C2340] font-bold text-xs uppercase tracking-wider">
                  AMEAÇAS (Threats)
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 font-normal leading-relaxed">
                {SWOT_DATA[3].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

