import React from 'react';
import { Currency, Language } from '../types';
import { Building2, FileText, Printer, Sparkles } from 'lucide-react';

interface FooterProps {
  currency: Currency;
  language: Language;
  onOpenNda: () => void;
  onOpenAi: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currency, language, onOpenNda, onOpenAi }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-[#0C2340] text-slate-300 py-16 border-t border-slate-800 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Top Footer Callout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Besmart Boutique Residence</h3>
              <p className="text-xs text-slate-400 font-normal">
                Vetores & Hipotenusas, Lda. • Centro Histórico de Aveiro, Portugal
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#071629] hover:bg-slate-800 text-slate-200 font-bold uppercase tracking-wider text-[10px] cursor-pointer transition-all border border-slate-700/60 rounded-xl"
            >
              <Printer className="w-3.5 h-3.5 text-[#00A8B5]" />
              <span>Exportar PDF</span>
            </button>

            <button
              onClick={onOpenAi}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#00A8B5] hover:bg-[#008893] text-white font-bold uppercase tracking-wider text-[10px] cursor-pointer transition-all rounded-xl shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Assistente IA</span>
            </button>
          </div>
        </div>

        {/* Disclaimer & Legal Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 leading-relaxed text-slate-300">
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Aviso de Confidencialidade</h4>
            <p>
              Este Dossiê de Investimento destina-se exclusivamente ao uso do destinatário autorizado e contém informações proprietárias e confidenciais relativas à sociedade Vetores & Hipotenusas, Lda.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Estrutura de Fecho 2025</h4>
            <p>
              Os dados de EBITDA e receitas apresentados têm por base o fecho contabilístico auditado de 2025. Projeções e rendimentos futuros estão sujeitos às condições de mercado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Desk de Investimento</h4>
            <p>Email: <a href="mailto:comercial@besmart.pt" className="hover:text-[#00A8B5] transition-colors">comercial@besmart.pt</a></p>
            <p>Localização: Centro Histórico, Aveiro, Portugal</p>
            <p className="text-[#00A8B5] font-bold mt-1">Status: Disponível para Transação Direta</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-xs">
          Dossiê de Investimento Besmart Boutique Residence © 2026 Vetores & Hipotenusas, Lda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

