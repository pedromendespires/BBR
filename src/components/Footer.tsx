import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language?: Language;
}

export const Footer: React.FC<FooterProps> = ({ language = 'PT' }) => {
  const isEn = language === 'EN';

  return (
    <footer className="bg-[#0C2340] text-slate-300 py-12 sm:py-16 border-t border-slate-800 text-xs font-normal">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 space-y-8 sm:space-y-12">
        {/* Top Footer Callout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 sm:pb-12 border-b border-white/10 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Besmart Boutique Residence</h3>
              <p className="text-xs text-slate-400 font-normal">
                Vetores & Hipotenusas, Lda. • {isEn ? 'Historic Center, Aveiro, Portugal' : 'Centro Histórico de Aveiro, Portugal'}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 leading-relaxed text-slate-300">
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              {isEn ? 'Confidentiality Notice' : 'Aviso de Confidencialidade'}
            </h4>
            <p>
              {isEn
                ? 'This Investment Dossier is strictly intended for the authorized recipient and contains proprietary and confidential information regarding Vetores & Hipotenusas, Lda.'
                : 'Este Dossiê de Investimento destina-se exclusivamente ao uso do destinatário autorizado e contém informações proprietárias e confidenciais relativas à sociedade Vetores & Hipotenusas, Lda.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              {isEn ? '2025 Closing Structure' : 'Estrutura de Fecho 2025'}
            </h4>
            <p>
              {isEn
                ? 'EBITDA and revenue figures are based on the audited financial closing of FY2025. Projections and future yields are subject to market conditions.'
                : 'Os dados de EBITDA e receitas apresentados têm por base o fecho contabilístico auditado de 2025. Projeções e rendimentos futuros estão sujeitos às condições de mercado.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              {isEn ? 'Investment Desk' : 'Desk de Investimento'}
            </h4>
            <p>Email: <a href="mailto:comercial@besmart.pt" className="hover:text-[#00A8B5] transition-colors">comercial@besmart.pt</a></p>
            <p>{isEn ? 'Location: Historic Center, Aveiro, Portugal' : 'Localização: Centro Histórico, Aveiro, Portugal'}</p>
            <p className="text-[#00A8B5] font-bold mt-1">
              {isEn ? 'Status: Available for Direct Transaction' : 'Status: Disponível para Transação Direta'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800 text-center text-slate-400 text-xs">
          {isEn
            ? 'Besmart Boutique Residence Investment Memorandum © 2026 Vetores & Hipotenusas, Lda. All rights reserved.'
            : 'Dossiê de Investimento Besmart Boutique Residence © 2026 Vetores & Hipotenusas, Lda. Todos os direitos reservados.'}
        </div>
      </div>
    </footer>
  );
};

