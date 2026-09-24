import React, { useState } from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, INTERIOR_IMAGE } from '../data/properties';
import { Maximize2, BedDouble, Bath, Car, Check, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

interface DevelopmentDetailsProps {
  activeRegion: RegionId;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const DevelopmentDetails: React.FC<DevelopmentDetailsProps> = ({
  activeRegion,
  onOpenInterestModal
}) => {
  const current = DEVELOPMENTS[activeRegion];
  const [selectedTypologyIdx, setSelectedTypologyIdx] = useState<number>(0);

  // Fallback if index exceeds
  const activePlan = current.typologies[selectedTypologyIdx] || current.typologies[0];

  return (
    <section id="plantas" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-700 mb-2">
              Plantas & Áreas Comuns
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              Projetado para o seu bem-estar em {current.regionName}
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Conheça as metragens, distribuição dos dormitórios e o complexo de lazer completo do <strong className="text-stone-900">{current.projectName}</strong>.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenInterestModal(activeRegion)}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Solicitar Tabela de Plantas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Typologies Selector & Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Typology Selection & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap gap-2">
              {current.typologies.map((plan, idx) => {
                const isActive = idx === selectedTypologyIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTypologyIdx(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {plan.size} · {plan.bedrooms}
                  </button>
                );
              })}
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-700">
                  Opção Selecionada
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  {activePlan.title}
                </h3>
              </div>

              {/* Specs Pills (unboxed clean metrics) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-stone-200">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Área Privativa</span>
                  </div>
                  <div className="text-base font-bold text-stone-900 font-mono tabular-nums">
                    {activePlan.size}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <BedDouble className="w-3.5 h-3.5 text-amber-600" />
                    <span>Dormitórios</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    {activePlan.bedrooms}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Bath className="w-3.5 h-3.5 text-amber-600" />
                    <span>Banheiros</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    {activePlan.bathrooms}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Car className="w-3.5 h-3.5 text-amber-600" />
                    <span>Garagem</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    {activePlan.parking}
                  </div>
                </div>
              </div>

              {/* Key Features of this Unit */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Diferenciais desta Configuração:
                </h4>
                <div className="space-y-2">
                  {activePlan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber-800" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenInterestModal(activeRegion)}
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer text-center"
                >
                  Tenho Interesse nesta Planta
                </button>
                <a
                  href="#formulario"
                  className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-200 rounded-xl transition-colors text-center"
                >
                  Carregar no Formulário
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interior & Gourmet Balcony Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg group aspect-[16/10] mb-4">
              <img
                src={INTERIOR_IMAGE}
                alt="Apartamento decorado com varanda gourmet integrada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-300 block mb-1">
                  Living Integrado & Varanda Gourmet
                </span>
                <p className="text-xs sm:text-sm text-stone-200">
                  Conceito aberto conectando cozinha, sala de jantar e churrasqueira para celebrar momentos memoráveis com amigos e família.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs sm:text-sm text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Condição Comercial Especial: {current.status}</span>
              </div>
              <p className="text-amber-900 leading-relaxed">
                Tabela de lançamento com parcelamento direto do período de obras e possibilidade de uso do FGTS na entrada.
              </p>
            </div>
          </div>

        </div>

        {/* Amenities Grid */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-700 mb-2">
            Lazer Estilo Resort
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-6">
            Infraestrutura Completa de Lazer & Comodidades
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {current.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 hover:bg-stone-50/80 transition-all flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
