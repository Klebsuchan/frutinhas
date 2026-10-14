import React from "react";
import { Play, Sparkles, CheckCircle2, ArrowRight, Video, ShieldCheck, Flame } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";
import heroImg from "./hero.png";
import { PlatformBadges } from "./SocialLogos";

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 bg-[#0a061d] text-white">
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-yellow-500/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-500/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 relative z-10 text-center space-y-8">
        
        {/* 1. HERO IMAGE BANNER - POSITIONED RIGHT ON TOP ABOVE "PACK VIRAL" */}
        <div className="relative w-full max-w-5xl mx-auto group">
          {/* Glowing Aura Ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-[32px] blur-2xl opacity-85 group-hover:opacity-100 transition duration-700 animate-pulse" />

          {/* Main Hero Image Container */}
          <div className="relative bg-[#12082e] border-4 border-yellow-400 rounded-[28px] overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.25)] p-2 sm:p-3">
            
            {/* Top Live Badge */}
            <div className="flex items-center justify-between text-xs font-black px-3 py-1.5 bg-black/80 rounded-t-2xl border-b border-yellow-400/30">
              <span className="inline-flex items-center gap-1.5 text-yellow-300 uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                PACK VIRAL DE FRUTINHAS #1
              </span>
              <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-400/30 font-bold">
                🔥 +2.000 VÍDEOS EM HD
              </span>
            </div>

            {/* Image Tag */}
            <div className="relative w-full overflow-hidden rounded-2xl">
              <img
                src={heroImg}
                alt="Pack Viral Novelinhas de Frutinhas - Hero"
                referrerPolicy="no-referrer"
                className="w-full max-h-[420px] sm:max-h-[480px] object-cover object-center rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />

              {/* Top Right Floating Badge */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-yellow-400/60 text-yellow-300 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>SEM APARECER / SEM EDITAR</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. TOP PILL BADGE */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/40 text-yellow-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-purple-900/30">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '6s' }} />
            COPIOU. POSTOU.
          </span>
        </div>

        {/* 3. MAIN TITLE: PACK VIRAL NOVELINHAS DE FRUTINHAS */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.05]">
          <span className="block text-yellow-400 drop-shadow-[0_4px_25px_rgba(250,204,21,0.5)]">
            PACK VIRAL
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300">
            NOVELINHAS DE FRUTINHAS
          </span>
        </h1>

        {/* 4. SUBTITLE */}
        <p className="text-lg sm:text-xl text-purple-200/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Monetize seu <strong className="text-white font-bold">TikTok</strong>, <strong className="text-white font-bold">YouTube Shorts</strong> e <strong className="text-white font-bold">Instagram Reels</strong> apenas copiando e colando.
        </p>

        {/* 5. FEATURE PILLS & OFFICIAL PLATFORM LOGOS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-yellow-500/10 border border-yellow-500/40 text-yellow-300 font-extrabold text-sm sm:text-base shadow-lg shadow-yellow-500/10">
            <Video className="w-5 h-5 text-yellow-400" />
            2.000+ VÍDEOS PRONTOS
          </span>

          <PlatformBadges />
        </div>

        {/* 6. BENEFITS CHECKLIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto pt-2 text-sm text-purple-100 font-medium">
          <div className="flex items-center gap-2 bg-purple-900/20 p-2.5 rounded-xl border border-purple-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Sem precisar mostrar o rosto</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-900/20 p-2.5 rounded-xl border border-purple-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Vídeos finalizados em HD/4K</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-900/20 p-2.5 rounded-xl border border-purple-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Dublagem e áudio em Português</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-900/20 p-2.5 rounded-xl border border-purple-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Roteiros em episódios virais</span>
          </div>
        </div>

        {/* 7. ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-300 text-black font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-yellow-200"
          >
            <span>QUERO ACESSAR OS 2.000 VÍDEOS</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenPreview}
            className="w-full sm:w-auto bg-purple-900/50 hover:bg-purple-800/60 text-yellow-300 font-bold px-6 py-4 rounded-2xl border border-purple-500/40 hover:border-yellow-400/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base backdrop-blur-md"
          >
            <Play className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>VER SIMULADOR INTERATIVO</span>
          </button>
        </div>

        {/* Guarantee note */}
        <p className="text-xs text-purple-300/80 flex items-center justify-center gap-1.5 pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Acesso imediato • 7 dias de garantia incondicional • Pagamento 100% Seguro</span>
        </p>

      </div>
    </section>
  );
};
