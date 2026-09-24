import React from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, HERO_IMAGE, REGIONS_LIST } from '../data/properties';
import { ArrowRight, MapPin, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeRegion,
  onSelectRegion,
  onOpenInterestModal
}) => {
  const current = DEVELOPMENTS[activeRegion];

  return (
    <section id="top" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-stone-950 text-white overflow-hidden">
      {/* Background Image with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Edifício residencial moderno em São Paulo"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Region Segmented Tabs - prominent interactive switcher */}
        <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-900/90 border border-stone-800 rounded-xl mb-8 backdrop-blur-md shadow-lg">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-medium px-3 py-1 hidden sm:inline-block">
            Escolha sua Região:
          </span>
          {REGIONS_LIST.map((dev) => {
            const isSelected = dev.id === activeRegion;
            return (
              <button
                key={dev.id}
                type="button"
                onClick={() => onSelectRegion(dev.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 shadow-md scale-[1.02]'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/70'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{dev.regionName}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950 ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <span>{current.campaignLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{current.status}</span>
              <span aria-hidden="true">·</span>
              <span>{current.accentBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] text-balance">
              Seu novo apartamento em <span className="text-amber-300 underline decoration-amber-400/40 underline-offset-8">{current.regionName}</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              {current.tagline}. {current.shortDesc}
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-stone-800/80 py-4 max-w-2xl">
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">A partir de</div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">{current.priceFrom}</div>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">Parcelas a partir de</div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tabular-nums">{current.installmentFrom}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs text-stone-400 uppercase tracking-wider">Previsão Entrega</div>
                <div className="text-base sm:text-lg font-semibold text-stone-200">{current.deliveryDate}</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenInterestModal(activeRegion)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Tenho Interesse no {current.regionName}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800 border border-stone-700 rounded-xl transition-all whitespace-nowrap"
              >
                <span>Ver Formulário desta Unidade</span>
              </a>
            </div>

            {/* Direct Google Forms Link indicator */}
            <div className="text-xs text-stone-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Link oficial direto:</span>
              <a
                href={current.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 underline font-mono truncate max-w-xs sm:max-w-md"
              >
                {current.formUrl}
              </a>
            </div>
          </div>

          {/* Side Spotlight Card of the Selected Development */}
          <div className="lg:col-span-4">
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-stone-800">
                <img
                  src={current.heroImage}
                  alt={current.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md border border-stone-700/60 px-2.5 py-1 rounded text-xs font-semibold text-amber-300">
                  {current.regionName}
                </div>
              </div>

              <h3 className="text-lg font-serif font-bold text-white mb-1">
                {current.projectName}
              </h3>
              <p className="text-xs text-stone-400 mb-3 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{current.address}</span>
              </p>

              <div className="space-y-2 border-t border-stone-800 pt-3 text-xs text-stone-300">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Tipologia:</span>
                  <span className="font-medium text-stone-200">2 e 3 Dorms c/ Suíte</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Varanda Gourmet:</span>
                  <span className="font-medium text-emerald-400">Inclusa com churrasqueira</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Condições:</span>
                  <span className="font-medium text-amber-300">Entrada Facilitada</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => onOpenInterestModal(activeRegion)}
                  className="w-full py-2.5 text-center font-bold text-xs text-stone-950 bg-stone-100 hover:bg-amber-400 rounded-lg transition-colors cursor-pointer"
                >
                  Garantir Condição de Lançamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
