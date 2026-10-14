import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, Flame, Zap, Lock, Sparkles, Clock, AlertTriangle } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Pricing: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState<number>(14);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 52 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 15m when expired
          return { hours: 0, minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Spots countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 3 ? prev - 1 : 3));
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section id="oferta" className="bg-[#0a061d] text-white py-16 md:py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[96%] xl:max-w-[1200px] mx-auto px-2 sm:px-4 relative z-10">
        
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 font-extrabold text-xs uppercase tracking-wider animate-pulse">
            <Flame className="w-4 h-4 fill-red-400" />
            DESCONTO DE LANÇAMENTO EXCLUSIVO (95% OFF)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            GARANTA SEU ACESSO POR APENAS <span className="text-yellow-400">R$ 10,00</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Adquira o Pack Viral de Novelinhas de Frutinhas hoje e receba acesso vitalício imediato antes que a promoção encerre.
          </p>
        </div>

        {/* Pricing Card Container */}
        <div className="bg-[#130b32] border-4 border-yellow-400 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.25)]">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black p-4 text-center font-black text-sm sm:text-base flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 fill-black" />
            <span>OFERTA ESPECIAL DE R$ 10,00 ({spotsLeft} VAGAS RESTANTES)</span>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* COUNTDOWN TIMER COMPONENT (Senso de Urgência) */}
            <div className="bg-gradient-to-b from-[#1c0836] to-[#120524] border-2 border-red-500/50 p-5 rounded-2xl text-center space-y-3 shadow-inner">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-red-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
                <span>O VALOR PROMOCIONAL DE R$ 10,00 EXPIRA EM:</span>
              </div>

              {/* Digital Clock Displays */}
              <div className="flex items-center justify-center gap-3 font-mono">
                
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="bg-black/90 text-yellow-400 border border-yellow-400/50 rounded-xl px-3 sm:px-4 py-2 text-2xl sm:text-4xl font-black shadow-lg">
                    {formatTwoDigits(timeLeft.hours)}
                  </div>
                  <span className="text-[10px] text-purple-300 font-sans font-bold uppercase mt-1">Horas</span>
                </div>

                <span className="text-2xl sm:text-4xl font-black text-yellow-400 mb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="bg-black/90 text-yellow-400 border border-yellow-400/50 rounded-xl px-3 sm:px-4 py-2 text-2xl sm:text-4xl font-black shadow-lg">
                    {formatTwoDigits(timeLeft.minutes)}
                  </div>
                  <span className="text-[10px] text-purple-300 font-sans font-bold uppercase mt-1">Minutos</span>
                </div>

                <span className="text-2xl sm:text-4xl font-black text-yellow-400 mb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="bg-black/90 text-yellow-400 border border-yellow-400/50 rounded-xl px-3 sm:px-4 py-2 text-2xl sm:text-4xl font-black shadow-lg">
                    {formatTwoDigits(timeLeft.seconds)}
                  </div>
                  <span className="text-[10px] text-purple-300 font-sans font-bold uppercase mt-1">Segundos</span>
                </div>

              </div>

              <p className="text-[11px] text-purple-300 italic">
                *Após o término do cronômetro, o valor retornará ao preço original de R$ 197,00.
              </p>
            </div>

            {/* Price Header */}
            <div className="text-center space-y-2">
              <span className="text-xs sm:text-sm text-purple-300 line-through font-bold">
                De R$ 197,00 por apenas
              </span>
              <div className="flex items-baseline justify-center gap-1 text-yellow-400">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight">10,00</span>
              </div>
              <p className="text-xs text-purple-200 font-semibold">
                Pagamento único • Acesso vitalício a todo o pack de +2.000 vídeos
              </p>
            </div>

            {/* Included Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-purple-100 font-medium bg-purple-950/40 p-6 rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span><strong>2.000+ Vídeos Virais</strong> em HD/4K</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Formato Vertical 9:16 (Reels/TikTok/Shorts)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Dublagem em Português já sincronizada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Legendas animadas e áudio limpo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Sem marcas d'água</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Organizados em episódios sequenciais</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Acesso vitalício imediato via Drive</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 font-extrabold" />
                <span>Novas atualizações do pack</span>
              </div>
            </div>

            {/* Big Checkout Button */}
            <div className="space-y-3">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 hover:from-emerald-400 hover:to-green-300 text-black font-black text-lg sm:text-xl py-5 px-6 rounded-2xl shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-3 border-2 border-emerald-300"
              >
                <Zap className="w-6 h-6 fill-black" />
                <span>SIM, QUERO BAIXAR OS 2.000 VÍDEOS POR R$ 10,00</span>
              </a>

              <p className="text-center text-xs text-purple-300 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-yellow-400" />
                <span>Pagamento 100% Seguro • Liberação Imediata no E-mail</span>
              </p>
            </div>

            {/* Money-Back Guarantee Seal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 p-5 rounded-2xl border border-yellow-400/30 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black font-black text-xs flex flex-col items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20">
                <ShieldCheck className="w-7 h-7" />
                <span>7 DIAS</span>
              </div>
              <div>
                <h4 className="font-extrabold text-yellow-300 text-sm">
                  GARANTIA INCONDICIONAL DE 7 DIAS
                </h4>
                <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                  Teste todo o acervo de vídeos. Se por qualquer motivo você achar que não valeu a pena, basta solicitar o reembolso que devolvemos 100% do seu dinheiro sem perguntas.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
