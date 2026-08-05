import React, { useState } from 'react';
import { Currency, Language } from '../types';
import { getPropertyGallery } from '../data/dossierData';
import { CheckCircle2, MapPin, X, Camera, Eye } from 'lucide-react';

interface AssetOverviewProps {
  currency: Currency;
  language?: Language;
  onOpenNda: () => void;
}

export const AssetOverview: React.FC<AssetOverviewProps> = ({ language = 'PT' as Language, onOpenNda }) => {
  const isEn = language === 'EN';
  const gallery = getPropertyGallery(language);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<typeof gallery[0] | null>(null);

  const filteredGallery = gallery;

  return (
    <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12 sm:py-16 border-t border-slate-200">
      {/* Section Header */}
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] mb-2">
          {isEn ? '04. Unit Portfolio' : '04. Portfólio de Unidades'}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight">
          {isEn ? 'Asset Photos' : 'Fotografias do Ativo'}{' '}
          <span className="font-normal text-[#00A8B5]">
            {isEn ? '& Unit Portfolio' : '& Portfólio de Unidades'}
          </span>
        </h2>
        <p className="text-slate-600 text-sm mt-3 font-normal leading-relaxed">
          {isEn
            ? 'Fully rehabilitated building in Aveiro historic city center. Explore real photos of facilities and detailed specifications for all 10 suites and studios.'
            : 'Edifício reabilitado no centro histórico de Aveiro. Explore as fotografias reais das instalações e as especificações das 10 suítes e estúdios.'}
        </p>
      </div>

      {/* Building Architecture & Floor Distribution Specs (PDF Section 2) */}
      <div className="mb-8 sm:mb-12 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5]">
              {isEn ? 'Building Structure' : 'Estrutura do Edifício'}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0C2340]">
              {isEn
                ? '420.91 m² Total Gross Area • 3 Floors • 10 Suites (21 Beds)'
                : '420,91 m² Área Bruta Total • 3 Pisos • 10 Suites (21 Camas)'}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl w-max">
            <span>{isEn ? 'Year Built: 1992 (Refurbished 2020)' : 'Ano Construção: 1992 (Remodelado 2020)'}</span>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-black border border-amber-200">
              {isEn ? 'Class D' : 'Classe D'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-600">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>{isEn ? 'Ground Floor' : 'Rés do Chão'}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">
                {isEn ? '2 Suites' : '2 Suites'}
              </span>
            </h4>
            <p className="leading-relaxed">
              {isEn
                ? '2 suites, 1 guest bathroom, fully equipped kitchen, living lounge, study room, and private patio with outdoor garden.'
                : '2 suites, 1 casa de banho de apoio, cozinha equipada, sala de estar, lounge, sala de estudo e logradouro privado com jardim exterior.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>{isEn ? '1st Floor' : '1.º Andar'}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">
                {isEn ? '4 Suites' : '4 Suites'}
              </span>
            </h4>
            <p className="leading-relaxed">
              {isEn
                ? '4 suites and 1 support bathroom. Spacious bedrooms with natural light and dedicated study workspaces.'
                : '4 suites e 1 casa de banho de apoio. Quartos amplos com luz natural e zonas de trabalho.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-extrabold text-[#0C2340] text-sm flex items-center justify-between">
              <span>{isEn ? '2nd Floor' : '2.º Andar'}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E6F7F8] text-[#00A8B5] rounded-full">
                {isEn ? '4 Suites' : '4 Suites'}
              </span>
            </h4>
            <p className="leading-relaxed">
              {isEn
                ? '4 premium suites. Total building capacity of 21 beds (1 single bedroom, 7 double bedrooms, and 2 triple bedrooms).'
                : '4 suites exclusivas. Configuração de 21 camas no total do edifício (1 quarto individual, 7 duplos e 2 triplos).'}
            </p>
          </div>
        </div>
      </div>

      {/* Official Asset Photo Gallery */}
      <div className="mb-12 sm:mb-16 bg-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A8B5]">
              <Camera className="w-4 h-4" />
              <span>{isEn ? 'Official Gallery - Besmart Boutique Residence' : 'Galeria Oficial Besmart Boutique Residence'}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {isEn
                ? 'Real photos of exterior façade, common spaces, suites, and private inner patio in Aveiro.'
                : 'Imagens reais da fachada, áreas comuns, suítes e pátio interior em Aveiro.'}
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedGalleryPhoto(photo)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-[#00A8B5] transition-all bg-slate-950"
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
              <div className="absolute top-3 right-3 p-2 bg-slate-950/80 text-white rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Highlights Interactive Section */}
      <div className="mt-12 sm:mt-16 bg-[#0C2340] text-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A8B5] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00A8B5]" />
              <span>{isEn ? 'Strategic Location in Aveiro' : 'Localização Estratégica em Aveiro'}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isEn ? 'Heart of Historic Center' : 'No Coração do Centro Histórico'}{' '}
              <span className="font-normal text-[#00A8B5]">
                {isEn ? '& University Hub' : '& Hub Universitário'}
              </span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              {isEn
                ? 'Strategically located in downtown Aveiro, benefiting from continuous year-round demand with zero seasonality risk.'
                : 'Situado estrategicamente no centro de Aveiro, o imóvel beneficia de uma procura constante durante todo o ano, sem dependência de sazonalidade.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">{isEn ? '800 Meters' : '800 Metros'}</span>
                <p className="text-slate-300 font-normal mt-0.5">{isEn ? 'University of Aveiro (UA Campus)' : 'Universidade de Aveiro (Campus UA)'}</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">{isEn ? '300 Meters' : '300 Metros'}</span>
                <p className="text-slate-300 font-normal mt-0.5">{isEn ? 'Central Canal & Beira-Mar District' : 'Canal Central dos Moliceiros & Beira-Mar'}</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">1.2 km</span>
                <p className="text-slate-300 font-normal mt-0.5">{isEn ? 'Aveiro Central Train Station' : 'Estação de Comboios CP de Aveiro'}</p>
              </div>
              <div className="p-4 bg-[#071629] rounded-2xl border border-slate-700/60">
                <span className="font-extrabold text-[#00A8B5] text-base">{isEn ? '10 Minutes' : '10 Minutos'}</span>
                <p className="text-slate-300 font-normal mt-0.5">{isEn ? 'Barra & Costa Nova Beaches' : 'Praia da Barra & Costa Nova'}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#071629] p-5 sm:p-6 rounded-2xl border border-slate-700/60 space-y-4 text-xs">
            <h4 className="font-extrabold text-base text-white">{isEn ? 'Key Location Advantages:' : 'Razões de Atratividade:'}</h4>
            <ul className="space-y-3 text-slate-300 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'Chronic shortage of premium ensuite student rooms near the University of Aveiro campus.'
                    : 'Escassez crónica de quartos de qualidade com casa de banho privativa perto do campus da UA.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'Vibrant dining ecosystem, traditional commerce, and high pedestrian mobility.'
                    : 'Excelente ecossistema de restauração, comércio tradicional e mobilidade pedonal.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'Surging demand from tech companies and research centers in Aveiro.'
                    : 'Procura crescente de quadros altamente qualificados de empresas tecnológicas em Aveiro.'}
                </span>
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Gallery Photo Lightbox Modal */}
      {selectedGalleryPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0C2340] max-w-3xl w-full rounded-2xl sm:rounded-3xl relative border border-slate-700 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedGalleryPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 bg-slate-900/80 text-white hover:bg-slate-800 rounded-full transition-all cursor-pointer border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-72 sm:h-96 lg:h-[450px] w-full bg-slate-950 relative">
              <img
                src={selectedGalleryPhoto.url}
                alt={selectedGalleryPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-6 text-white space-y-2 bg-[#0C2340] border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] px-3 py-1 bg-[#071629] rounded-lg border border-[#00A8B5]/30">
                  {selectedGalleryPhoto.category}
                </span>
                <span className="text-xs text-slate-400">{isEn ? 'Official Photo Besmart' : 'Fotografia Oficial Besmart'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{selectedGalleryPhoto.title}</h3>
              <p className="text-xs text-slate-300 font-normal">{selectedGalleryPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

