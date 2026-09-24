import React from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS } from '../data/properties';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';

interface FloatingInterestBarProps {
  activeRegion: RegionId;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const FloatingInterestBar: React.FC<FloatingInterestBarProps> = ({
  activeRegion,
  onOpenInterestModal
}) => {
  const current = DEVELOPMENTS[activeRegion];

  return (
    <aside 
      aria-label="Ação rápida de interesse"
      className="fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 text-white py-2.5 px-4 sm:px-6 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Region Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-amber-400" />
          </div>
          <div className="min-w-0 truncate">
            <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
              <span>{current.regionName}</span>
              <span className="hidden sm:inline text-stone-400 font-normal">· {current.projectName}</span>
            </div>
            <div className="text-[11px] text-amber-300 font-mono hidden xs:block">
              A partir de {current.priceFrom}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={current.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 underline font-medium mr-1"
          >
            <span>Link do Formulário</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={() => onOpenInterestModal(activeRegion)}
            className="px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Tenho Interesse</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
