import React from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, REGIONS_LIST } from '../data/properties';
import { MapPin, Navigation, Compass, CheckCircle2, ArrowRight, ExternalLink, Utensils, Train, Sparkles, Building2 } from 'lucide-react';

interface RegionExplorerProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const RegionExplorer: React.FC<RegionExplorerProps> = ({
  activeRegion,
  onSelectRegion,
  onOpenInterestModal
}) => {
  const current = DEVELOPMENTS[activeRegion];

  return (
    <section id="regioes" className="py-20 sm:py-28 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-700 mb-2">
            Localização & Qualidade de Vida
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Descubra as particularidades de cada região
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Clique na região desejada para conferir os diferenciais do bairro, pontos de interesse, mobilidade e carregar o formulário específico.
          </p>
        </div>

        {/* 3 Large Interactive Region Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {REGIONS_LIST.map((dev) => {
            const isSelected = dev.id === activeRegion;
            return (
              <button
                key={dev.id}
                type="button"
                onClick={() => onSelectRegion(dev.id)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xl ring-2 ring-amber-400/60 scale-[1.01]'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                    {dev.campaignLabel}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
                    {dev.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold tracking-tight mb-1">
                  {dev.regionName}
                </h3>
                <p className={`text-xs line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                  {dev.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-200/20 flex items-center justify-between text-xs">
                  <span className={`font-semibold ${isSelected ? 'text-amber-300' : 'text-amber-800'}`}>
                    A partir de {dev.priceFrom}
                  </span>
                  <span className={`flex items-center gap-1 font-medium ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {isSelected ? 'Região Selecionada' : 'Clique para Explorar'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic In-Depth Presentation of Selected Region */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Visual Asset & Project Highlight */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
              <img
                src={current.heroImage}
                alt={`${current.projectName} em ${current.regionName}`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-block bg-amber-400 text-stone-950 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {current.regionName} · {current.projectName}
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {current.projectName}
                </h4>
                <p className="text-xs text-stone-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{current.address}</span>
                </p>
                
                <div className="pt-2 flex items-center gap-4 text-xs font-medium text-amber-200">
                  <span>Previsão: {current.deliveryDate}</span>
                  <span>·</span>
                  <span>{current.status}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deep Neighborhood Editorial Description & Points of Interest */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div>
                {/* Location Lead-in */}
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Sobre o Bairro {current.regionName}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-4">
                  Por que morar ou investir na região de {current.regionName}?
                </h3>

                <p className="text-stone-700 text-base leading-relaxed mb-6">
                  {current.fullLocationDesc}
                </p>

                {/* Lifestyle Bullets */}
                <div className="mb-6 space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Destaques de Estilo de Vida & Valorização:
                  </h5>
                  {current.lifestyleHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Points of Interest (Mobility, Dining, Parks, Shopping) */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                    Mobilidade & Entorno Imediato:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.pointsOfInterest.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs"
                      >
                        <div className="flex items-center gap-2 pr-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                          <span className="font-medium text-stone-800 truncate" title={item.name}>
                            {item.name}
                          </span>
                        </div>
                        <span className="font-mono font-semibold text-amber-800 shrink-0 bg-amber-100/70 px-2 py-0.5 rounded">
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions for Selected Region */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-stone-500">Investimento Estimado</div>
                  <div className="text-xl font-bold font-mono text-stone-900">
                    A partir de {current.priceFrom}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#formulario"
                    className="px-5 py-3 text-xs sm:text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl text-center transition-colors"
                  >
                    Carregar Formulário no Site
                  </a>
                  
                  <button
                    type="button"
                    onClick={() => onOpenInterestModal(activeRegion)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Tenho Interesse no {current.regionName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
