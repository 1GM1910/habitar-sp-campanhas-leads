import React, { useState } from 'react';
import { RegionId } from '../types/property';
import { DEVELOPMENTS, REGIONS_LIST } from '../data/properties';
import { ExternalLink, CheckCircle2, ShieldCheck, Send, Sparkles, AlertCircle, RefreshCw, MapPin } from 'lucide-react';

interface FormSectionProps {
  activeRegion: RegionId;
  onSelectRegion: (region: RegionId) => void;
}

export const FormSection: React.FC<FormSectionProps> = ({
  activeRegion,
  onSelectRegion
}) => {
  const current = DEVELOPMENTS[activeRegion];
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [quickFormSubmitted, setQuickFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    preferencia: '2 Dormitórios'
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickFormSubmitted(true);
  };

  const handleReloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="formulario" className="py-20 sm:py-28 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Formulário Oficial de Interesse</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Manifeste seu Interesse no {current.regionName}
          </h2>

          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            O formulário abaixo foi carregado especificamente para a <strong className="text-amber-300">{current.campaignLabel}</strong> ({current.projectName}).
            Preencha seus dados para receber o book digital e tabela de valores com condições promocionais.
          </p>
        </div>

        {/* Region Switcher Tabs right above the Form */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-950/80 border border-stone-800 rounded-2xl shadow-xl">
            {REGIONS_LIST.map((dev) => {
              const isSelected = dev.id === activeRegion;
              return (
                <button
                  key={dev.id}
                  type="button"
                  onClick={() => {
                    onSelectRegion(dev.id);
                    setQuickFormSubmitted(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-stone-950 shadow-md scale-[1.02]'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`} />
                  <span>Carregar {dev.regionName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Embedded Google Form Container + Quick Direct Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 cols): The Embedded Form Frame */}
          <div className="lg:col-span-8 bg-stone-950 border border-stone-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Top Bar inside the frame */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-stone-800 gap-3">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Unidade Selecionada: {current.regionName}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {current.projectName}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReloadIframe}
                  title="Recarregar formulário"
                  className="p-2 rounded-lg bg-stone-900 border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Recarregar</span>
                </button>

                <a
                  href={current.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Abrir em Nova Aba</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Iframe Container */}
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-inner min-h-[640px] relative">
              <iframe
                key={`${activeRegion}-${iframeKey}`}
                src={current.formUrl}
                title={`Formulário de Interesse - ${current.projectName}`}
                className="w-full h-[640px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Security and Fallback Notice */}
            <div className="mt-4 p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formulário oficial verificado e seguro. Seus dados serão mantidos sob sigilo.</span>
              </div>
              <a
                href={current.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 underline font-medium whitespace-nowrap"
              >
                Abrir link direto: {current.formUrl}
              </a>
            </div>
          </div>

          {/* Right Column (4 cols): Fast Pre-Registration & Unit Summary */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Inquiry Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 shadow-xl">
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                Contato Imediato por WhatsApp
              </h4>
              <p className="text-xs text-stone-400 mb-5 leading-relaxed">
                Prefere atendimento instantâneo com um consultor especialista na região de <strong>{current.regionName}</strong>?
              </p>

              {quickFormSubmitted ? (
                <div className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-emerald-300">
                    Interesse Registrado!
                  </h5>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Nossa equipe já recebeu sua preferência para o <strong>{current.projectName}</strong>. Você também pode acessar o formulário oficial a qualquer momento:
                  </p>
                  <a
                    href={current.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all"
                  >
                    <span>Acessar Google Form</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      E-mail para envio da Apresentação
                    </label>
                    <input
                      type="email"
                      placeholder="carlos@exemplo.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Preferencia de Planta ({current.regionName})
                    </label>
                    <select
                      value={formData.preferencia}
                      onChange={(e) => setFormData({ ...formData, preferencia: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      {current.typologies.map((t, i) => (
                        <option key={i} value={t.title} className="bg-stone-900 text-white">
                          {t.title} ({t.size})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Receber Apresentação</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Recap of Selected Project */}
            <div className="bg-stone-950/80 border border-stone-800 rounded-3xl p-5 text-xs space-y-3">
              <div className="text-amber-400 font-bold uppercase tracking-wider">
                Resumo da Unidade {current.regionName}
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-400">Empreendimento:</span>
                <span className="font-semibold text-white">{current.projectName}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-400">Preço Estimado:</span>
                <span className="font-bold text-amber-300 font-mono">{current.priceFrom}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800">
                <span className="text-stone-400">Entrega Prevista:</span>
                <span className="font-semibold text-white">{current.deliveryDate}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-stone-400">Link do Formulário:</span>
                <a
                  href={current.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-amber-400 hover:underline truncate max-w-[170px]"
                >
                  {current.formUrl}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
