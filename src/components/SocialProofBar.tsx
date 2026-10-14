import React, { useState, useEffect } from "react";
import { Users, Video, Star, ShieldCheck, Flame, TrendingUp } from "lucide-react";

export const SocialProofBar: React.FC = () => {
  const [creatorsCount, setCreatorsCount] = useState(4820);
  const [videosDownloaded, setVideosDownloaded] = useState(2410850);

  // Subtle live increment effect to simulate real-time downloads
  useEffect(() => {
    const interval = setInterval(() => {
      setCreatorsCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setVideosDownloaded((prev) => prev + Math.floor(Math.random() * 5) + 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#130733] via-[#1a0a40] to-[#12062f] py-8 border-y-2 border-yellow-400/40 text-white relative overflow-hidden shadow-2xl">
      {/* Background glow line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_#facc15]" />

      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          {/* Stat 1: Criadores Ativos */}
          <div className="bg-[#12082e]/80 border border-yellow-400/30 p-4 rounded-2xl backdrop-blur-md space-y-1 shadow-lg hover:border-yellow-400/60 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-yellow-400 text-xs font-black uppercase">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>Criadores Ativos</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-yellow-300 drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)]">
              +{creatorsCount.toLocaleString("pt-BR")}
            </div>
            <p className="text-[10px] sm:text-xs text-purple-200">
              Usuários postando hoje
            </p>
          </div>

          {/* Stat 2: Vídeos Baixados */}
          <div className="bg-[#12082e]/80 border border-purple-500/30 p-4 rounded-2xl backdrop-blur-md space-y-1 shadow-lg hover:border-purple-400 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-black uppercase">
              <Video className="w-4 h-4 text-cyan-400" />
              <span>Vídeos Baixados</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">
              {(videosDownloaded / 1000000).toFixed(2)}M+
            </div>
            <p className="text-[10px] sm:text-xs text-purple-200">
              Downloads no acervo
            </p>
          </div>

          {/* Stat 3: Avaliação Média */}
          <div className="bg-[#12082e]/80 border border-purple-500/30 p-4 rounded-2xl backdrop-blur-md space-y-1 shadow-lg hover:border-purple-400 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-pink-400 text-xs font-black uppercase">
              <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
              <span>Satisfação</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-pink-300 flex items-center justify-center gap-1">
              <span>4.9</span>
              <span className="text-xs text-yellow-400 font-sans">/ 5.0</span>
            </div>
            <p className="text-[10px] sm:text-xs text-purple-200">
              Avaliação de quem comprou
            </p>
          </div>

          {/* Stat 4: Preço Promocional */}
          <div className="bg-[#12082e]/80 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-md space-y-1 shadow-lg hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-black uppercase">
              <Flame className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Preço Especial</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
              R$ 10,00
            </div>
            <p className="text-[10px] sm:text-xs text-purple-200">
              Acesso vitalício hoje
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
