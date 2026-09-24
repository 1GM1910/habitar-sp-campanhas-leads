import React from 'react';
import { REGIONS_LIST } from '../data/properties';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 pt-16 pb-24 sm:pb-20 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xl font-serif font-bold text-white tracking-tight">
              HABITAR SÃO PAULO
            </span>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Especialistas em empreendimentos residenciais de alto padrão e excelente custo-benefício nas regiões mais estratégicas da capital paulista: Mooca, Tatuapé e Vila Ema.
            </p>
            <div className="flex items-center gap-2 text-stone-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Intermediação Imobiliária Credenciada · CRECI SP 41.298-J</span>
            </div>
          </div>

          {/* Links for each project and Form */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white">
              Formulários Oficiais por Região
            </div>
            <ul className="space-y-2">
              {REGIONS_LIST.map((dev) => (
                <li key={dev.id}>
                  <a
                    href={dev.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{dev.campaignLabel} ({dev.projectName})</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Service */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white">
              Atendimento ao Comprador
            </div>
            <p className="text-stone-400 leading-relaxed">
              Plantão de Vendas Digital e Presencial em São Paulo, SP.<br />
              Segunda a Sábado, das 9h às 19h.<br />
              Domingos e Feriados, das 10h às 18h.
            </p>
          </div>

        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 border-t border-stone-800/80 space-y-3 text-[11px] text-stone-500 leading-relaxed">
          <p>
            *As imagens e perspectivas artísticas apresentadas são meramente ilustrativas e possuem caráter de sugestão de decoração. Os acabamentos, revestimentos, cores e vegetação serão entregues conforme o Memorial Descritivo de cada empreendimento devidamente registrado nos competentes Cartórios de Registro de Imóveis de São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div>
              © {new Date().getFullYear()} Habitar São Paulo Empreendimentos Imobiliários. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4 text-stone-400">
              <a href="#top" className="hover:text-amber-300 transition-colors">Voltar ao Topo</a>
              <span>·</span>
              <a href="#formulario" className="hover:text-amber-300 transition-colors">Formulário</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
