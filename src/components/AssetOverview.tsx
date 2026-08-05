import React, { useState } from 'react';
import { Currency } from '../types';
import { PROPERTY_GALLERY } from '../data/dossierData';
import { CheckCircle2, MapPin, X, Camera, Eye } from 'lucide-react';

interface AssetOverviewProps {
  currency: Currency;
  onOpenNda: () => void;
}

export const AssetOverview: React.FC<AssetOverviewProps> = ({ onOpenNda }) => {
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<typeof PROPERTY_GALLERY[0] | null>(null);

  const filteredGallery = PROPERTY_GALLERY;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-slate-200">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">04. Portfólio de Unidades</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight">
          Fotografias do Ativo <span className="font-normal text-[#00A8B5]">& Portfólio de Unidades</span>
        </h2>
        <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
          Edifício reabilitado no centro histórico de Aveiro. Explore as fotografias reais das instalações e as especificações das 10 suítes e estúdios.
        </p>
      </div>

      {/* Building Architecture & Floor Distribution Specs (PDF Section 2) */}
      <div className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5]">Estrutura do Edifício</span>
            <h3 className="text-xl font-extrabold text-[#0C2340]">420,91 m² Área Bruta Total • 3 Pisos • 10 Suites (21 Camas)</h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
            <span>Ano Construção: 1992 (Remodelado 2020)</span>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-black border border-amber-200">Classe D</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>Rés do Chão</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">2 Suites</span>
            </h4>
            <p className="leading-relaxed">
              2 suites, 1 casa de banho de apoio, cozinha equipada, sala de estar, lounge, sala de estudo e logradouro privado com jardim exterior.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>1.º Andar</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">4 Suites</span>
            </h4>
            <p className="leading-relaxed">
              4 suites e 1 casa de banho de apoio. Quartos amplos com luz natural e zonas de trabalho.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>2.º Andar</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">4 Suites</span>
            </h4>
            <p className="leading-relaxed">
              4 suites exclusivas. Configuração de 21 camas no total do edifício (1 quarto individual, 7 duplos e 2 triplos).
            </p>
          </div>
        </div>
      </div>

      {/* Official Asset Photo Gallery */}
      <div className="mb-16 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              <Camera className="w-4 h-4" />
              <span>Galeria Oficial Besmart Boutique Residence</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Imagens reais da fachada, áreas comuns, suítes e pátio interior em Aveiro.</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedGalleryPhoto(photo)}
              className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-[#00A8B5] transition-all bg-slate-950"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#00A8B5] bg-slate-950/80 px-2 py-0.5 rounded w-max mb-1 border border-[#00A8B5]/30">
                  {photo.category}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#00A8B5] transition-colors">
                  {photo.title}
                </h4>
              </div>
              <div className="absolute top-3 right-3 p-2 bg-slate-950/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Location Highlights Interactive Section */}
      <div className="mt-16 bg-[#0C2340] text-white p-8 lg:p-12 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00A8B5]" />
              <span>Localização Estratégica em Aveiro</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              No Coração do Centro Histórico <span className="font-normal text-[#00A8B5]">& Hub Universitário</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              Situado estrategicamente no centro de Aveiro, o imóvel beneficia de uma procura constante durante todo o ano, sem dependência de sazonalidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">800 Metros</span>
                <p className="text-slate-300 font-normal mt-0.5">Universidade de Aveiro (Campus UA)</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">300 Metros</span>
                <p className="text-slate-300 font-normal mt-0.5">Canal Central dos Moliceiros & Beira-Mar</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">1.2 km</span>
                <p className="text-slate-300 font-normal mt-0.5">Estação de Comboios CP de Aveiro</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">10 Minutos</span>
                <p className="text-slate-300 font-normal mt-0.5">Praia da Barra & Costa Nova</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#071629] p-6 rounded-2xl border border-slate-700/60 space-y-4 text-xs">
            <h4 className="font-extrabold text-base text-white">Razões de Atratividade:</h4>
            <ul className="space-y-3 text-slate-300 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>Escassez crónica de quartos de qualidade com casa de banho privativa perto do campus da UA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>Excelente ecossistema de restauração, comércio tradicional e mobilidade pedonal.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>Procura crescente de quadros altamente qualificados de empresas tecnológicas em Aveiro.</span>
              </li>
            </ul>

            <button
              onClick={onOpenNda}
              className="w-full mt-4 py-3.5 bg-[#00A8B5] hover:bg-[#008893] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              Agendar Visita ao Imóvel
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Photo Lightbox Modal */}
      {selectedGalleryPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0C2340] max-w-3xl w-full rounded-3xl relative border border-slate-700 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedGalleryPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-slate-900/80 text-white hover:bg-slate-800 rounded-full transition-all cursor-pointer border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-96 sm:h-[450px] w-full bg-slate-950 relative">
              <img
                src={selectedGalleryPhoto.url}
                alt={selectedGalleryPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 text-white space-y-2 bg-[#0C2340] border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] px-3 py-1 bg-[#071629] rounded-lg border border-[#00A8B5]/30">
                  {selectedGalleryPhoto.category}
                </span>
                <span className="text-xs text-slate-400">Fotografia Oficial Besmart</span>
              </div>
              <h3 className="text-xl font-bold text-white">{selectedGalleryPhoto.title}</h3>
              <p className="text-xs text-slate-300 font-normal">{selectedGalleryPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

