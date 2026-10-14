import React, { useState, useEffect } from "react";
import { Sparkles, ShoppingBag, Flame, Clock } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => (val < 10 ? `0${val}` : val);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a061d]/90 backdrop-blur-md border-b border-purple-500/20 text-white">
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-red-600 text-black py-1.5 px-4 text-xs md:text-sm font-black text-center flex items-center justify-center gap-2 shadow-lg">
        <span className="bg-black text-yellow-400 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1 font-extrabold animate-pulse">
          <Flame className="w-3 h-3 fill-yellow-400" /> PROMOÇÃO R$ 10,00
        </span>
        <span className="hidden sm:inline">🔥 PACK VIRAL COM 2.000+ VÍDEOS DE FRUTINHAS POR APENAS R$ 10,00</span>
        <span className="sm:hidden font-bold">Pack Completo por apenas R$ 10,00!</span>
        <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded font-mono font-bold text-black text-xs ml-1">
          <Clock className="w-3 h-3" />
          <span>{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-yellow-400 via-amber-500 to-purple-600 p-0.5 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#120a2e] rounded-[14px] flex items-center justify-center text-xl">
              🍌
            </div>
          </div>
          <div>
            <span className="font-black text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-purple-400 block leading-none">
              PACK VIRAL
            </span>
            <span className="text-[10px] text-purple-300 font-semibold tracking-wider block uppercase">
              Novelinhas de Frutinhas
            </span>
          </div>
        </a>

        {/* Navigation links for desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-purple-200">
          <a href="#o-que-e" className="hover:text-yellow-400 transition-colors">O que é</a>
          <a href="#sem-aparecer" className="hover:text-yellow-400 transition-colors">Sem Aparecer</a>
          <a href="#elenco" className="hover:text-yellow-400 transition-colors">Elenco</a>
          <a href="#formato" className="hover:text-yellow-400 transition-colors">Formato</a>
          <a href="#plataformas" className="hover:text-yellow-400 transition-colors">Plataformas</a>
          <a href="#passos" className="hover:text-yellow-400 transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
        </nav>

        {/* Action Button */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold px-4 md:px-5 py-2.5 rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 transition-all text-xs md:text-sm flex items-center gap-2 border border-yellow-300/50"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>BAIXAR PACK</span>
        </a>
      </div>
    </header>
  );
};
