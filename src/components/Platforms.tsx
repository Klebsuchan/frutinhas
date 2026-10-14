import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";
import { TikTokLogo, YouTubeLogo, InstagramLogo } from "./SocialLogos";

export const Platforms: React.FC = () => {
  return (
    <div id="plataformas" className="bg-[#080419] text-white py-16 md:py-24 space-y-20">
      
      {/* SECTION 1: Uma pack, três plataformas (Page 8) */}
      <section className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/40 text-yellow-300 font-black text-xs uppercase tracking-wider">
            O MESMO PACK. MAIS POSSIBILIDADES.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Uma pack, <span className="text-yellow-400">três plataformas</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Publique o mesmo conteúdo nas três maiores redes de vídeos curtos do planeta e triplique seu alcance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* TikTok Card */}
          <div className="bg-[#130b32] border-2 border-cyan-500/40 rounded-3xl p-8 space-y-6 hover:border-cyan-400 transition-all hover:-translate-y-2 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-cyan-400 border border-cyan-400/40 shadow-lg">
                <TikTokLogo className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                9:16 VERTICAL
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                TikTok
              </h3>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mt-1">
                Alcance Rápido e Viral
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              O algoritmo do TikTok ama novelinhas em episódios. As pessoas assistem a série inteira no seu perfil e engajam nos comentários!
            </p>

            <div className="pt-4 border-t border-purple-500/20 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Pronto para Programa Criativo de Nicho</span>
            </div>
          </div>

          {/* YouTube Shorts Card */}
          <div className="bg-[#130b32] border-2 border-red-500/40 rounded-3xl p-8 space-y-6 hover:border-red-400 transition-all hover:-translate-y-2 shadow-xl shadow-red-500/10">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#ff0000] flex items-center justify-center text-white shadow-lg">
                <YouTubeLogo className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-400/40">
                YOUTUBE SHORTS
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                YouTube Shorts
              </h3>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider mt-1">
                Audiência que Monetiza
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Monetize no Programa de Parcerias do YouTube acumulando milhões de visualizações em poucas semanas com retenção contínua.
            </p>

            <div className="pt-4 border-t border-purple-500/20 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Pronto para Monetização via AdSense</span>
            </div>
          </div>

          {/* Instagram Reels Card */}
          <div className="bg-[#130b32] border-2 border-pink-500/40 rounded-3xl p-8 space-y-6 hover:border-pink-400 transition-all hover:-translate-y-2 shadow-xl shadow-pink-500/10">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <InstagramLogo className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-pink-950/80 text-pink-300 border border-pink-400/40">
                INSTAGRAM REELS
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                Instagram Reels
              </h3>
              <p className="text-xs font-bold text-pink-400 uppercase tracking-wider mt-1">
                Engajamento e Seguidores
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Transforme seguidores em uma comunidade engajada e fature com parcerias pagas, divulgação de produtos e links de afiliados.
            </p>

            <div className="pt-4 border-t border-purple-500/20 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Pronto para Links na Bio & Afiliados</span>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-purple-300/70 mt-8 italic">
          *Monetização depende dos critérios de cada plataforma e da elegibilidade do conteúdo e da conta.
        </p>
      </section>

      {/* SECTION 2: 2.000+ Vídeos Prontos (Page 9) */}
      <section className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-r from-[#170a3f] via-[#10072b] to-[#1a0a42] border-2 border-yellow-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left big counter display */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-extrabold uppercase border border-yellow-400/30">
                CONTEÚDO PARA MESES DE POSTAGEM
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-yellow-400 font-mono tracking-tight drop-shadow-[0_4px_20px_rgba(250,204,21,0.3)]">
                2.000+
              </div>
              <p className="text-xl font-black text-white uppercase tracking-wider">
                VÍDEOS PRONTOS
              </p>
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                O QUE POSTAR? <span className="text-yellow-400">JÁ ESTÁ NO PACK.</span>
              </h3>

              <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
                Novelinhas e stories com drama, romance, ciúmes e comédia. Conteúdo suficiente para meses de postagem diária sem você nunca mais ficar sem saber o que publicar.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider shadow-md">
                  BAIXE. ESCOLHA. PUBLIQUE.
                </span>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-yellow-300 hover:text-white underline underline-offset-4"
                >
                  <span>Ir para o Checkout Oficial Hotmart</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
