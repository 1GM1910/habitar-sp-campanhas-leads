import React, { useState } from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, REGIONS_LIST } from '../data/properties';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface FinancingSimulatorProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
  onOpenInterestModal: (region?: RegionId) => void;
}

export const FinancingSimulator: React.FC<FinancingSimulatorProps> = ({
  activeRegion,
  onSelectRegion,
  onOpenInterestModal
}) => {
  const current = DEVELOPMENTS[activeRegion];

  // Base raw price estimates
  const basePrices: Record<RegionId, number> = {
    mooca: 549000,
    tatuape: 489000,
    'vila-ema': 329000
  };

  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termYears, setTermYears] = useState<number>(30);
  const [useFgts, setUseFgts] = useState<boolean>(true);
  const [fgtsAmount, setFgtsAmount] = useState<number>(40000);

  const totalPrice = basePrices[activeRegion];
  const downPaymentTotal = (totalPrice * downPaymentPercent) / 100;
  const effectiveDownPayment = Math.max(0, downPaymentTotal - (useFgts ? fgtsAmount : 0));
  
  // Installments during construction (36 months)
  const monthlyConstruction = Math.round(effectiveDownPayment / 36);

  // Financed amount
  const financedAmount = totalPrice - downPaymentTotal;
  // Estimated monthly bank amortization (approx 9.5% annual interest)
  const monthlyRate = 0.095 / 12;
  const totalMonths = termYears * 12;
  const estimatedBankInstallment = Math.round(
    (financedAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths))
  );

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-amber-700 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Planejamento Financeiro Personalizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Simulador de Financiamento & Entrada
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Descubra como o fluxo de pagamento do seu apartamento se adapta ao seu orçamento mensal.
          </p>
        </div>

        {/* Region Quick Select */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200">
            {REGIONS_LIST.map((dev) => (
              <button
                key={dev.id}
                type="button"
                onClick={() => onSelectRegion(dev.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  dev.id === activeRegion
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {dev.regionName}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders and Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                  <span>Valor Estimado do Imóvel ({current.regionName})</span>
                  <span className="font-mono text-amber-800 text-base font-bold">
                    R$ {totalPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-stone-700 mb-1.5">
                  <span>Entrada Total:</span>
                  <span className="font-mono font-bold text-stone-900">
                    {downPaymentPercent}% (R$ {downPaymentTotal.toLocaleString('pt-BR')})
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>15%</span>
                  <span>20%</span>
                  <span>30%</span>
                  <span>40%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-stone-700 mb-1.5">
                  <span>Prazo de Financiamento Bancário:</span>
                  <span className="font-mono font-bold text-stone-900">
                    {termYears} anos ({termYears * 12} meses)
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="35"
                  step="5"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                <label className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-stone-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useFgts}
                    onChange={(e) => setUseFgts(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 accent-amber-500"
                  />
                  <span>Abater saldo de FGTS na entrada</span>
                </label>

                {useFgts && (
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500">Saldo estimado de FGTS:</span>
                    <div className="flex items-center gap-1 font-mono font-bold text-stone-900">
                      <span>R$</span>
                      <input
                        type="number"
                        step="5000"
                        min="0"
                        max="200000"
                        value={fgtsAmount}
                        onChange={(e) => setFgtsAmount(Number(e.target.value))}
                        className="w-24 px-2 py-1 rounded border border-stone-200 text-right text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-1">
                  Fluxo Estimado · {current.regionName}
                </span>
                <div className="text-xs text-stone-400">
                  {current.projectName}
                </div>
              </div>

              <div className="space-y-3 border-y border-stone-800 py-4">
                <div>
                  <div className="text-xs text-stone-400">Mensal no período de obras (36x)</div>
                  <div className="text-2xl font-bold font-mono text-amber-400">
                    R$ {monthlyConstruction.toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-400">Parcela de Financiamento Após as Chaves</div>
                  <div className="text-xl font-bold font-mono text-white">
                    R$ {estimatedBankInstallment.toLocaleString('pt-BR')}/mês
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-stone-400 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Aprovação de crédito em até 24 horas</span>
                </div>
                <div>*Valores estimados sujeitos à análise de perfil de renda e crédito bancário.</div>
              </div>

              <button
                type="button"
                onClick={() => onOpenInterestModal(activeRegion)}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Validar Simulação no Formulário</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
