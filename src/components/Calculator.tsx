import React, { useState } from "react";
import { Calculator as CalcIcon, TrendingUp, DollarSign, Eye, Users, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Calculator: React.FC = () => {
  const [videosPerDay, setVideosPerDay] = useState<number>(2);
  const [avgViews, setAvgViews] = useState<number>(50000); // 50k views avg

  // Calculations
  const monthlyVideos = videosPerDay * 30;
  const monthlyViews = monthlyVideos * avgViews;
  // Estimated RPM across TikTok/Shorts/Reels (~R$ 0.15 to R$ 0.40 per 1000 views)
  const estimatedRpm = 0.25;
  const estimatedMonthlyEarnings = (monthlyViews / 1000) * estimatedRpm;
  const estimatedFollowers = Math.round(monthlyViews * 0.002);

  return (
    <section className="bg-[#080419] text-white py-16 md:py-24 border-y border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black text-xs uppercase tracking-wider">
            POTENCIAL DE GANHOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Calculadora de <span className="text-yellow-400">Projeção Viral</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
            Simule o alcance e faturamento mensal estimado ao publicar os vídeos do Pack Frutinhas.
          </p>
        </div>

        <div className="bg-[#130b32] border-2 border-purple-500/30 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Control 1: Videos per day */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-extrabold">
                  <span className="text-purple-200">Vídeos publicados por dia:</span>
                  <span className="text-yellow-400 font-mono text-base">{videosPerDay} vídeo(s) / dia</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={videosPerDay}
                  onChange={(e) => setVideosPerDay(Number(e.target.value))}
                  className="w-full h-3 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="flex justify-between text-[10px] text-purple-300 font-mono">
                  <span>1 vídeo (Tranquilo)</span>
                  <span>3 vídeos (Ideal)</span>
                  <span>5 vídeos (Aceleração)</span>
                </div>
              </div>

              {/* Control 2: Average Views per video */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-extrabold">
                  <span className="text-purple-200">Média estimada de views por vídeo:</span>
                  <span className="text-yellow-400 font-mono text-base">{(avgViews / 1000).toFixed(0)}k views</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={10000}
                  value={avgViews}
                  onChange={(e) => setAvgViews(Number(e.target.value))}
                  className="w-full h-3 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="flex justify-between text-[10px] text-purple-300 font-mono">
                  <span>10k (Iniciante)</span>
                  <span>100k (Em alta)</span>
                  <span>250k (Viral)</span>
                </div>
              </div>

              <div className="bg-purple-950/60 p-4 rounded-2xl border border-purple-500/20 text-xs text-purple-200 space-y-1">
                <p className="font-bold text-yellow-300">💡 Por que a retenção é tão alta?</p>
                <p>Com 2.000 vídeos em episódios sequenciais, quando um vídeo viraliza, as pessoas assistem dezenas de capítulos no seu canal de uma só vez.</p>
              </div>

            </div>

            {/* Right Output Box */}
            <div className="md:col-span-6 bg-gradient-to-b from-[#1c0e48] to-[#120731] border-2 border-yellow-400/40 rounded-2xl p-6 text-center space-y-6 shadow-xl">
              
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase text-purple-300 tracking-wider">
                  Faturamento Estimado / Mês
                </span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono drop-shadow-[0_4px_15px_rgba(52,211,153,0.3)]">
                  R$ {estimatedMonthlyEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <span className="text-[10px] text-purple-300 block">
                  *Projeção baseada em RPM médio das plataformas sociais.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-500/20 text-left">
                <div className="bg-black/40 p-3 rounded-xl border border-purple-500/20">
                  <div className="flex items-center gap-1.5 text-purple-300 text-xs font-bold">
                    <Eye className="w-4 h-4 text-yellow-400" />
                    <span>Views Mês:</span>
                  </div>
                  <p className="text-lg font-black text-yellow-400 font-mono mt-1">
                    {(monthlyViews / 1000000).toFixed(2)}M
                  </p>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-purple-500/20">
                  <div className="flex items-center gap-1.5 text-purple-300 text-xs font-bold">
                    <Users className="w-4 h-4 text-pink-400" />
                    <span>Seguidores:</span>
                  </div>
                  <p className="text-lg font-black text-pink-300 font-mono mt-1">
                    +{estimatedFollowers.toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-transform hover:scale-105 active:scale-95"
              >
                <span>ACESSAR PACK E COMECAR HOJE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
