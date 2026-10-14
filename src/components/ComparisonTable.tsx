import React from "react";
import { Check, X, Sparkles, Clock, DollarSign, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const ComparisonTable: React.FC = () => {
  const COMPARISONS = [
    {
      feature: "Custo para ter 2.000 Vídeos",
      pack: "Apenas R$ 10,00 (Pagamento Único)",
      manual: "Mais de R$ 3.500,00 com editores",
      packGood: true,
    },
    {
      feature: "Tempo gasto para publicar",
      pack: "Menos de 30 segundos (Copiou, Postou)",
      manual: "De 2 a 4 horas por cada vídeo",
      packGood: true,
    },
    {
      feature: "Animação 3D & Personagens",
      pack: "Frutinhas Prontas em Alta Resolução",
      manual: "Software pesado ou contratação 3D",
      packGood: true,
    },
    {
      feature: "Dublagem & Trilha Sonora",
      pack: "Sincronizada em Português inclusa",
      manual: "Pagar locutor ou ferramentas de IA",
      packGood: true,
    },
    {
      feature: "Roteiro & Ganchos Virais",
      pack: "2.000 Capítulos Sequenciais Prontos",
      manual: "Ter que inventar histórias do zero",
      packGood: true,
    },
    {
      feature: "Precisa mostrar o rosto?",
      pack: "Não (100% Anônimo / Canal Dark)",
      manual: "Se não animar, precisa aparecer",
      packGood: true,
    },
    {
      feature: "Começar a Postar",
      pack: "Hoje mesmo (Acesso Imediato)",
      manual: "Semanas de aprendizado e edição",
      packGood: true,
    },
  ];

  return (
    <section className="bg-[#0a061d] text-white py-16 md:py-24 border-y border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/40 text-yellow-300 font-black text-xs uppercase tracking-wider">
            ECONOMIA EXTREMA DE TEMPO E DINHEIRO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            POR QUE ESCOLHER O <span className="text-yellow-400">PACK VIRAL?</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Compare o esforço e custo de produzir vídeos do zero contra a facilidade de usar o Pack de Frutinhas.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-[#130b32] border-2 border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-[#1b0e44] border-b border-purple-500/30 p-4 sm:p-6 text-xs sm:text-sm font-black uppercase text-center items-center">
            <div className="col-span-4 text-left text-purple-200">RECURSO / CRITÉRIO</div>
            <div className="col-span-4 bg-yellow-400 text-black py-2.5 px-2 rounded-2xl shadow-lg flex items-center justify-center gap-1.5 font-extrabold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 fill-black hidden sm:inline" />
              <span>PACK VIRAL (R$ 10,00)</span>
            </div>
            <div className="col-span-4 text-red-400">CRIANDO DO ZERO / MANUAL</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-purple-500/20">
            {COMPARISONS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center text-center hover:bg-purple-950/30 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 text-left font-bold text-purple-100 flex items-center gap-2">
                  <span className="hidden sm:inline text-yellow-400">•</span>
                  <span>{row.feature}</span>
                </div>

                {/* Pack Column (Green Highlight) */}
                <div className="col-span-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-extrabold p-2.5 sm:p-3 rounded-xl mx-1 sm:mx-2 flex items-center justify-center gap-1.5 shadow-sm text-center">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 font-black" />
                  <span>{row.pack}</span>
                </div>

                {/* Manual Column (Red Highlight) */}
                <div className="col-span-4 text-red-300 font-medium p-2.5 sm:p-3 rounded-xl flex items-center justify-center gap-1.5 text-center">
                  <X className="w-4 h-4 text-red-500 shrink-0 font-black" />
                  <span className="line-through text-red-300/80">{row.manual}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center pt-4">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 text-black font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/20 hover:scale-105 transition-all"
          >
            <span>ECONOMIZE TEMPO E GARANTA POR R$ 10,00</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
