import React from "react";
import { Gift, Music, Hash, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Bonus: React.FC = () => {
  return (
    <section className="bg-[#080419] text-white py-16 md:py-24 border-y border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-black text-xs uppercase tracking-wider">
            <Gift className="w-4 h-4 text-yellow-400" />
            BÔNUS EXCLUSIVOS INCLUSOS GRATUITAMENTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            LEVE MAIS <span className="text-yellow-400">3 BÔNUS ESPECIAIS</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Além dos +2.000 vídeos virais de frutinhas, você recebe estes 3 materiais complementares sem pagar nada a mais.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bonus 1 */}
          <div className="bg-[#130b32] border-2 border-yellow-400/40 rounded-3xl p-8 space-y-6 hover:border-yellow-400 transition-all hover:-translate-y-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-yellow-400 text-black font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
              BÔNUS #1
            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <Music className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-xl font-black text-yellow-300 uppercase">
                Acervo de Áudios Virais
              </h3>
              <p className="text-xs text-emerald-400 font-bold mt-1">
                De R$ 47,00 por GRÁTIS
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Lista atualizada das melhores trilhas, efeitos sonoros de barraco, risadas e músicas virais do momento para turbinar seus vídeos.
            </p>
          </div>

          {/* Bonus 2 */}
          <div className="bg-[#130b32] border-2 border-purple-500/40 rounded-3xl p-8 space-y-6 hover:border-purple-400 transition-all hover:-translate-y-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-purple-500 text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
              BÔNUS #2
            </div>

            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Hash className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-xl font-black text-yellow-300 uppercase">
                Guia de Hashtags & Horários
              </h3>
              <p className="text-xs text-emerald-400 font-bold mt-1">
                De R$ 37,00 por GRÁTIS
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Tabela prática com as melhores hashtags por plataforma (TikTok, Shorts e Reels) e os horários de pico para postar e viralizar.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-[#130b32] border-2 border-pink-500/40 rounded-3xl p-8 space-y-6 hover:border-pink-400 transition-all hover:-translate-y-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-pink-500 text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
              BÔNUS #3
            </div>

            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <FileText className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-xl font-black text-yellow-300 uppercase">
                Templates de Títulos Magnéticos
              </h3>
              <p className="text-xs text-emerald-400 font-bold mt-1">
                De R$ 29,00 por GRÁTIS
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Modelos de legendas e títulos prontos de alta retenção para colar no topo das suas publicações e dobrar seus comentários.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
