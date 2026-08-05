import React, { useState } from 'react';
import { Currency, DataRoomDoc, Language } from '../types';
import { getDataRoomDocs } from '../data/dossierData';
import { Lock, Unlock, FileText, Download, Eye, X } from 'lucide-react';

interface DataRoomProps {
  currency: Currency;
  language?: Language;
  onOpenNda: () => void;
  id?: string;
}

export const DataRoom: React.FC<DataRoomProps> = ({ currency, language = 'PT' as Language, onOpenNda, id }) => {
  const isEn = language === 'EN';
  const dataRoomDocs = getDataRoomDocs(language);
  const [selectedDoc, setSelectedDoc] = useState<DataRoomDoc | null>(null);

  return (
    <section id={id} className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12 sm:py-16 border-t border-slate-200 scroll-mt-20">
      <div className="bg-[#0C2340] text-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5]">
                {isEn ? '06. VDR Documentation' : '06. Documentação VDR'}
              </div>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Virtual Data Room <span className="font-normal text-[#00A8B5]">(VDR)</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 font-normal">
              {isEn
                ? 'Review official legal, financial, and technical transaction documents for Vetores & Hipotenusas, Lda.'
                : 'Consulte a documentação legal, contabilística e técnica da transação Vetores & Hipotenusas, Lda.'}
            </p>
          </div>

          <button
            onClick={onOpenNda}
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-[#00A8B5] hover:bg-[#008893] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shrink-0 shadow-md min-h-[44px]"
          >
            <Lock className="w-4 h-4 text-white" />
            <span>{isEn ? 'Request VDR Access (NDA)' : 'Solicitar Acesso VDR (NDA)'}</span>
          </button>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {dataRoomDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#071629] p-5 sm:p-6 rounded-2xl border border-slate-700/60 hover:border-[#00A8B5] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category Badge & Protection */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-[#0C2340] text-[#00A8B5] rounded-lg border border-[#00A8B5]/30">
                    {doc.category}
                  </span>
                  {doc.isProtected ? (
                    <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-400">
                      <Lock className="w-3 h-3" /> {isEn ? 'Requires NDA' : 'Requer NDA'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                      <Unlock className="w-3 h-3" /> {isEn ? 'Public' : 'Livre'}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 bg-[#0C2340] text-[#00A8B5] rounded-xl shrink-0 border border-slate-700">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00A8B5] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {doc.format} • {doc.fileSize}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 my-3 leading-relaxed font-normal">
                  {doc.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between mt-4">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="flex items-center gap-1 text-xs text-slate-300 hover:text-white font-medium cursor-pointer p-1 min-h-[36px]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Summary' : 'Resumo'}</span>
                </button>

                <button
                  onClick={onOpenNda}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-[#00A8B5] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer border border-slate-700 min-h-[38px]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Get' : 'Obter'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Document Preview Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0C2340] max-w-lg w-full p-6 sm:p-8 text-white rounded-2xl sm:rounded-3xl border border-slate-700 relative space-y-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5]">{selectedDoc.category}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{selectedDoc.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 bg-slate-800 text-slate-300 hover:text-white rounded-full cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700 text-xs text-slate-300 leading-relaxed space-y-2 font-normal">
                <p className="font-bold text-white">{isEn ? 'Content Summary:' : 'Resumo do Conteúdo:'}</p>
                <p>{selectedDoc.description}</p>
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer min-h-[40px]"
                >
                  {isEn ? 'Close' : 'Fechar'}
                </button>
                <button
                  onClick={() => {
                    setSelectedDoc(null);
                    onOpenNda();
                  }}
                  className="px-5 py-2.5 bg-[#00A8B5] hover:bg-[#008893] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md min-h-[40px]"
                >
                  {isEn ? 'Request Full Access' : 'Solicitar Acesso Completo'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

