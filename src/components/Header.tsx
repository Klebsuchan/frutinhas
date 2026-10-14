import React, { useState, useEffect } from "react";
import { ShoppingBag, Flame, Clock, Menu, X, Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full bg-[#0a061d]/95 backdrop-blur-md border-b border-purple-500/20 text-white">
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-red-600 text-black py-1 px-2 sm:px-4 text-[11px] sm:text-xs md:text-sm font-black text-center flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg leading-tight">
        <span className="bg-black text-yellow-400 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider flex items-center gap-1 font-extrabold shrink-0 animate-pulse">
          <Flame className="w-3 h-3 fill-yellow-400" /> R$ 10,00
        </span>
        <span className="hidden sm:inline">🔥 PACK VIRAL COM 2.000+ VÍDEOS DE FRUTINHAS POR APENAS R$ 10,00</span>
        <span className="sm:hidden font-bold">Pack 2.000+ Vídeos por R$ 10,00!</span>
        <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded font-mono font-bold text-black text-[11px] shrink-0">
          <Clock className="w-3 h-3" />
          <span>{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-yellow-400 via-amber-500 to-purple-600 p-0.5 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#120a2e] rounded-[14px] flex items-center justify-center text-lg sm:text-xl">
              🍌
            </div>
          </div>
          <div>
            <span className="font-black text-base sm:text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-purple-400 block leading-none">
              PACK VIRAL
            </span>
            <span className="text-[9px] sm:text-[10px] text-purple-300 font-semibold tracking-wider block uppercase">
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
          <a href="#depoimentos" className="hover:text-yellow-400 transition-colors">Depoimentos</a>
          <a href="#passos" className="hover:text-yellow-400 transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-yellow-500/30 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 border border-yellow-300/50"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>COMPRAR (R$ 10)</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-purple-900/40 text-yellow-300 border border-purple-500/30 hover:bg-purple-800/50"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0626] border-b border-purple-500/30 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 text-sm font-extrabold text-purple-200">
            <a
              href="#o-que-e"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              1. O que é o Pack Viral
            </a>
            <a
              href="#sem-aparecer"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              2. Sem Aparecer & Sem Editar
            </a>
            <a
              href="#elenco"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              3. Conheça as Frutinhas
            </a>
            <a
              href="#formato"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              4. Formato das Novelinhas
            </a>
            <a
              href="#plataformas"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              5. TikTok, Shorts & Reels
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              6. Prova Social & Depoimentos
            </a>
            <a
              href="#passos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              7. Como Funciona (3 Passos)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:text-yellow-400 hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              8. Perguntas Frequentes (FAQ)
            </a>
          </nav>

          <div className="pt-2 border-t border-purple-800/50">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              <span>ACESSAR CHECKOUT HOTMART (R$ 10,00)</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
