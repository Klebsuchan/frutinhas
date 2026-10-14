import React from "react";
import { CreditCard, Share2, DollarSign, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Steps: React.FC = () => {
  return (
    <section id="passos" className="bg-[#0a061d] text-white py-16 md:py-24">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-black text-xs uppercase tracking-wider">
            É SÓ 3 PASSOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Compre, poste, monetize: <span className="text-yellow-400">é só 3 passos</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            O fluxo mais simples do mercado para quem quer criar um canal Dark lucrativo.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="relative bg-[#130b32] border-2 border-yellow-400/50 rounded-3xl p-8 space-y-6 shadow-xl hover:border-yellow-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-yellow-400 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                1
              </span>
              <span className="text-3xl">💳</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-yellow-400 uppercase">
                GARANTA O ACESSO
              </h3>
              <p className="text-xs text-purple-300 font-semibold mt-0.5">
                Checkout 100% Seguro na Hotmart
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Realize o pagamento único de R$ 10,00 no ambiente seguro da Hotmart e receba os dados de acesso imediatamente no seu e-mail.
            </p>

            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black text-yellow-300 hover:text-white bg-yellow-500/10 hover:bg-yellow-500/20 px-3.5 py-2.5 rounded-xl border border-yellow-500/30 transition-colors w-full justify-center"
              >
                <span>Checkout Oficial Hotmart</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#130b32] border-2 border-purple-500/30 rounded-3xl p-8 space-y-6 shadow-xl hover:border-purple-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-purple-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-purple-600/30">
                2
              </span>
              <span className="text-3xl">🚀</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-yellow-400 uppercase">
                POSTE
              </h3>
              <p className="text-xs text-purple-300 font-semibold mt-0.5">
                Copiou e Colou
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Poste os episódios no TikTok, Shorts e Reels seguindo nossa ordem de episódios para criar retenção extrema.
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-purple-300 font-medium bg-purple-900/30 p-2.5 rounded-xl border border-purple-500/20">
              <span>Sem editar, sem narrar, sem mistério.</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-[#130b32] border-2 border-purple-500/30 rounded-3xl p-8 space-y-6 shadow-xl hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-emerald-500 text-black font-black text-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                3
              </span>
              <span className="text-3xl">💰</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-yellow-400 uppercase">
                MONETIZE
              </h3>
              <p className="text-xs text-purple-300 font-semibold mt-0.5">
                Colha os frutos do tráfego viral
              </p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Monetize conforme sua audiência cresce e sua conta atende às regras e programas de monetização das plataformas.
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ganhos por visualizações & afiliados!</span>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="pt-6 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/30 hover:scale-105 transition-all"
          >
            <span>QUERO COMECAR O PASSO 1 AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
