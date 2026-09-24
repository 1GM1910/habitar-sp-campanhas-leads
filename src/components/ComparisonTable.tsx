import React from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, REGIONS_LIST } from '../data/properties';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';

interface ComparisonTableProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  activeRegion,
  onSelectRegion,
  onOpenInterestModal
}) => {
  return (
    <section id="comparativo" className="py-20 sm:py-28 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-700 mb-2">
            Comparativo de Oportunidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Qual região combina mais com você?
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Compare o perfil de moradia, transporte, valores e escolha a unidade perfeita para a sua família.
          </p>
        </div>

        {/* Comparison Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGIONS_LIST.map((dev) => {
            const isSelected = dev.id === activeRegion;
            return (
              <div
                key={dev.id}
                className={`bg-white rounded-3xl border transition-all flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'border-stone-900 shadow-2xl ring-2 ring-amber-400'
                    : 'border-stone-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Top Banner */}
                <div className={`p-6 border-b ${isSelected ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-900'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                      {dev.campaignLabel}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                        Ativo
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">
                    {dev.regionName}
                  </h3>
                  <div className={`text-xs mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {dev.projectName}
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4 text-xs sm:text-sm flex-1">
                  <div>
                    <span className="text-stone-400 uppercase text-[11px] font-bold block mb-0.5">
                      Investimento a partir de
                    </span>
                    <span className="text-xl font-bold font-mono text-stone-900">
                      {dev.priceFrom}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-stone-400 uppercase text-[11px] font-bold block mb-0.5">
                      Parcelas estimadas
                    </span>
                    <span className="text-sm font-semibold text-amber-800 font-mono">
                      {dev.installmentFrom}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-stone-400 uppercase text-[11px] font-bold block mb-0.5">
                      Metragens & Tipologias
                    </span>
                    <span className="text-stone-700">
                      {dev.typologies.map((t) => t.size).join(' · ')}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-stone-400 uppercase text-[11px] font-bold block mb-0.5">
                      Mobilidade Principal
                    </span>
                    <span className="text-stone-700 font-medium">
                      {dev.pointsOfInterest.find((p) => p.category === 'Mobilidade')?.name}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-stone-400 uppercase text-[11px] font-bold block mb-0.5">
                      Perfil do Bairro
                    </span>
                    <p className="text-stone-600 line-clamp-3 leading-relaxed">
                      {dev.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectRegion(dev.id);
                      onOpenInterestModal(dev.id);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <span>Tenho Interesse · {dev.regionName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={dev.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-center text-xs text-stone-500 hover:text-stone-900 font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Abrir Google Form Direto</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
