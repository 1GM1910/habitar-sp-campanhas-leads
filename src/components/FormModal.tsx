import React, { useEffect, useState } from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, REGIONS_LIST } from '../data/properties';
import { X, ExternalLink, ShieldCheck, MapPin, RefreshCw, Sparkles } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  initialRegion,
  onSelectRegion
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionId>(initialRegion);
  const [iframeKey, setIframeKey] = useState<number>(0);

  useEffect(() => {
    setSelectedRegion(initialRegion);
  }, [initialRegion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = DEVELOPMENTS[selectedRegion];

  const handleRegionChange = (reg: RegionId) => {
    setSelectedRegion(reg);
    onSelectRegion(reg);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-white">
              Tenho Interesse · {current.projectName} ({current.regionName})
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={current.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all shadow-sm"
            >
              <span>Abrir Formulário Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Region Switcher Inside Modal */}
        <div className="px-4 py-2.5 bg-stone-900/50 border-b border-stone-800/80 flex items-center justify-between shrink-0 overflow-x-auto gap-2">
          <span className="text-xs text-stone-400 font-medium whitespace-nowrap">
            Trocar Região:
          </span>
          <div className="flex items-center gap-1.5">
            {REGIONS_LIST.map((dev) => {
              const isSelected = dev.id === selectedRegion;
              return (
                <button
                  key={dev.id}
                  type="button"
                  onClick={() => handleRegionChange(dev.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {dev.regionName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Unit Quick Info Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-stone-900 border-b border-stone-800 text-xs text-stone-300 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-stone-400">{current.address}</span>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <span className="text-amber-300 font-bold">{current.priceFrom}</span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-400">{current.status}</span>
          </div>
        </div>

        {/* Modal Body: Embedded Form with Refresh Fallback */}
        <div className="flex-1 bg-white overflow-hidden relative min-h-[500px]">
          <iframe
            key={`${selectedRegion}-${iframeKey}`}
            src={current.formUrl}
            title={`Formulário de Interesse ${current.projectName}`}
            className="w-full h-full min-h-[500px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Footer with direct action and fallback message */}
        <div className="p-3 sm:p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Link direto oficial:</span>
            <a
              href={current.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-mono"
            >
              {current.formUrl}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIframeKey((k) => k + 1)}
              className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer text-xs"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Recarregar tela</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
