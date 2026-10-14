import React, { useState } from "react";
import { Flame, Play, Sparkles } from "lucide-react";
import heroImg from "./hero.png";

interface GlamourStageProps {
  onOpenPreview?: () => void;
}

export const GlamourStage: React.FC<GlamourStageProps> = ({ onOpenPreview }) => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      
      {/* Outer Glowing Neon Aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-[36px] blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 animate-pulse" />

      {/* Main Card Container */}
      <div className="relative bg-[#11082c] border-2 border-yellow-400/60 rounded-[32px] overflow-hidden shadow-2xl p-3 sm:p-5 text-center space-y-4">
        
        {/* Top Live Badge */}
        <div className="flex items-center justify-between text-xs font-black px-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            PACK VIRAL EM ALTA
          </span>
          <span className="text-emerald-400 font-mono text-[11px] bg-black/60 px-2.5 py-0.5 rounded-full border border-emerald-400/30 font-bold">
            ⚡ +2.000 VÍDEOS PRONTOS
          </span>
        </div>

        {/* Hero Image Container referencing hero.png */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 border-yellow-400/50 shadow-2xl bg-gradient-to-b from-purple-950 to-black">
          
          {/* Main Hero Image */}
          <img
            src={heroImg}
            alt="Pack Viral Novelinhas de Frutinhas"
            referrerPolicy="no-referrer"
            onError={() => setImgLoaded(false)}
            className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Neon Badge overlay over image */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-yellow-400/60 text-yellow-300 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>QUALIDADE HD/4K</span>
          </div>

          {/* Overlay gradient at bottom of image for legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end justify-center p-3">
            <p className="text-xs sm:text-sm font-black text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] uppercase">
              🍌 Moranguete, Banana Boss, Uvinha & Melancia
            </p>
          </div>

        </div>

        {/* Interactive Play Button trigger */}
        {onOpenPreview && (
          <button
            onClick={onOpenPreview}
            className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-300 text-black font-extrabold py-3.5 px-4 rounded-xl shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2 text-xs sm:text-sm transition-transform active:scale-95 border border-yellow-200"
          >
            <div className="w-6 h-6 rounded-full bg-black text-yellow-400 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-yellow-400 ml-0.5" />
            </div>
            <span>TESTAR VÍDEO INTERATIVO DAS FRUTINHAS</span>
          </button>
        )}

      </div>
    </div>
  );
};
