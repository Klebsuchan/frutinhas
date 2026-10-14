import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-2xl mx-auto animate-bounce-short">
      <div className="bg-[#120a2e]/95 border-2 border-yellow-400 rounded-2xl p-3 sm:p-4 shadow-[0_10px_30px_rgba(250,204,21,0.3)] backdrop-blur-lg flex items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black font-black text-xl flex items-center justify-center shrink-0">
            🍌
          </div>
          <div>
            <p className="font-black text-xs sm:text-sm text-yellow-300 uppercase leading-none">
              Pack Viral Frutinhas
            </p>
            <p className="text-[10px] sm:text-xs text-purple-200 font-semibold mt-0.5">
              2.000+ Vídeos Prontos por apenas <strong className="text-emerald-400 font-bold">R$ 10,00</strong>
            </p>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-300 text-black font-black px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shrink-0 shadow-lg shadow-yellow-500/20 active:scale-95 transition-transform"
        >
          <span>BAIXAR AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
