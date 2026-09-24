import React from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS } from '../data/properties';

interface NavbarProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRegion,
  onOpenInterestModal
}) => {
  const currentDev = DEVELOPMENTS[activeRegion];

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-xl sm:text-2xl font-serif tracking-tight font-semibold text-amber-100 hover:text-amber-200 transition-colors shrink-0"
        >
          HABITAR SÃO PAULO
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#empreendimentos" className="hover:text-amber-300 transition-colors">
            Empreendimentos
          </a>
          <a href="#regioes" className="hover:text-amber-300 transition-colors">
            As Regiões
          </a>
          <a href="#plantas" className="hover:text-amber-300 transition-colors">
            Plantas & Lazer
          </a>
          <a href="#simulador" className="hover:text-amber-300 transition-colors">
            Financiamento
          </a>
          <a href="#formulario" className="hover:text-amber-300 transition-colors">
            Formulário Oficial
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenInterestModal(activeRegion)}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Tenho Interesse · {currentDev.regionName}
          </button>
        </div>
      </div>
    </header>
  );
};
