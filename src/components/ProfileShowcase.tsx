import React from "react";
import { CheckCircle2, TrendingUp, Sparkles, ExternalLink, MessageCircle, UserCheck } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";
import fruta1 from "./fruta1.png";
import fruta2 from "./fruta2.png";
import fruta3 from "./fruta3.png";
import fruta4 from "./fruta4.png";

export const ProfileShowcase: React.FC = () => {
  return (
    <div className="bg-[#12082e] border-2 border-yellow-400/50 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-6 max-w-2xl mx-auto">
      
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between text-xs font-black">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          CANAL VIRAL DE FRUTINHAS
        </span>
        <span className="text-yellow-300 font-mono text-[11px] bg-black/60 px-2.5 py-0.5 rounded-full border border-yellow-400/30">
          PERFIL REAL DO INSTAGRAM
        </span>
      </div>

      {/* Instagram Header Section */}
      <div className="bg-black/80 border border-purple-500/30 rounded-2xl p-4 sm:p-6 space-y-5">
        
        {/* Profile Avatar & Stats Row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5 shadow-xl">
              <img
                src={fruta1}
                alt="Profile Avatar Novelinhas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-2 border-black"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-0.5 rounded-full text-[10px]">
              ✔️
            </div>
          </div>

          {/* DYNAMIC FOLLOWERS & STATS BAR - BEM VISÍVEL */}
          <div className="flex-1 grid grid-cols-3 gap-2 text-center">
            
            {/* Posts */}
            <div className="bg-purple-950/60 p-2 sm:p-3 rounded-xl border border-purple-500/20">
              <span className="block font-black text-sm sm:text-lg text-white font-mono">1.284</span>
              <span className="text-[10px] text-purple-300 font-semibold block uppercase">Posts</span>
            </div>

            {/* SEGUIDORES (HIGHLIGHTED & BEM VISÍVEL) */}
            <div className="bg-gradient-to-b from-yellow-500/30 to-amber-600/30 p-2 sm:p-3 rounded-xl border-2 border-yellow-400 shadow-lg shadow-yellow-500/20 scale-105">
              <span className="block font-black text-base sm:text-2xl text-yellow-300 font-mono tracking-tight drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]">
                185,4K
              </span>
              <span className="text-[10px] text-yellow-200 font-black block uppercase tracking-wider">
                SEGUIDORES
              </span>
            </div>

            {/* Following */}
            <div className="bg-purple-950/60 p-2 sm:p-3 rounded-xl border border-purple-500/20">
              <span className="block font-black text-sm sm:text-lg text-white font-mono">120</span>
              <span className="text-[10px] text-purple-300 font-semibold block uppercase">Seguindo</span>
            </div>

          </div>

        </div>

        {/* Bio Text */}
        <div className="text-left text-xs sm:text-sm space-y-1">
          <p className="font-black text-white text-sm sm:text-base flex items-center gap-1.5">
            <span>Novelinhas das Frutinhas</span>
            <span className="bg-yellow-400 text-black text-[10px] font-black px-1.5 py-0.2 rounded uppercase">
              Oficial
            </span>
          </p>
          <p className="text-purple-200">
            🍿 Adquira +2.000 vídeos virais de frutinhas no link abaixo!
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-extrabold hover:underline flex items-center gap-1 text-xs pt-0.5"
          >
            <span>Checkout Oficial Hotmart (R$ 10,00)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Profile Action Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-xs font-black">
          <button className="bg-purple-900/60 hover:bg-purple-800 text-purple-100 py-2 rounded-xl border border-purple-500/30 flex items-center justify-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Seguindo ∨</span>
          </button>
          <button className="bg-purple-900/60 hover:bg-purple-800 text-purple-100 py-2 rounded-xl border border-purple-500/30 flex items-center justify-center gap-1">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mensagem</span>
          </button>
          <button className="bg-purple-900/60 hover:bg-purple-800 text-purple-100 py-2 rounded-xl border border-purple-500/30 text-center">
            <span>Contato</span>
          </button>
        </div>

        {/* Highlights (Destaques) matching user screenshot */}
        <div className="pt-2 border-t border-purple-800/50">
          <p className="text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-2 text-left">
            Destaques do Perfil:
          </p>
          <div className="flex items-center justify-around text-center gap-2 overflow-x-auto pb-1">
            
            {/* Highlight 1 */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center text-xl shadow-md">
                💸
              </div>
              <span className="text-[10px] font-extrabold text-white">FATURE</span>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full bg-yellow-950 border-2 border-yellow-400 flex items-center justify-center text-xl shadow-md">
                📦
              </div>
              <span className="text-[10px] font-extrabold text-white">PACK 2K</span>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-950 border-2 border-red-500 flex items-center justify-center text-xl shadow-md">
                🍿
              </div>
              <span className="text-[10px] font-extrabold text-white">NOVELAS</span>
            </div>

            {/* Highlight 4 */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-950 border-2 border-orange-500 flex items-center justify-center text-xl shadow-md">
                🔥
              </div>
              <span className="text-[10px] font-extrabold text-white">PROVAS</span>
            </div>

            {/* Highlight 5 */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-950 border-2 border-purple-500 flex items-center justify-center text-xl shadow-md">
                🤖
              </div>
              <span className="text-[10px] font-extrabold text-white">IA GRÁTIS</span>
            </div>

          </div>
        </div>

        {/* Profile Grid Preview */}
        <div className="pt-2 border-t border-purple-800/50">
          <div className="grid grid-cols-3 gap-1.5 rounded-xl overflow-hidden">
            <div className="relative h-24 overflow-hidden group">
              <img src={fruta2} alt="Moranguete" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-1 right-1 bg-black/80 text-yellow-300 text-[9px] font-black px-1 rounded">▶ 1.2M</span>
            </div>
            <div className="relative h-24 overflow-hidden group">
              <img src={fruta1} alt="Banana Boss" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-1 right-1 bg-black/80 text-yellow-300 text-[9px] font-black px-1 rounded">▶ 2.4M</span>
            </div>
            <div className="relative h-24 overflow-hidden group">
              <img src={fruta4} alt="Melancia" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <span className="absolute bottom-1 right-1 bg-black/80 text-yellow-300 text-[9px] font-black px-1 rounded">▶ 890K</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
