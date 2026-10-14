import React from "react";
import { Sparkles, Zap, HeartHandshake, Eye, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

import glamourGemini from "./Gemini_Generated_Image_is17wzis17wzis17.jfif";

export const Formula: React.FC = () => {
  return (
    <div id="formato" className="bg-[#0a061d] text-white py-16 md:py-24 space-y-20">
      
      {/* FORMULA SECTION (Page 6) */}
      <section className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-b from-[#150b38] to-[#0c0624] border-2 border-purple-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 font-black text-xs uppercase tracking-wider">
              FOFOCA • CIÚME • ROMANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Fofoca, ciúme e romance: <br className="hidden sm:inline" />
              <span className="text-yellow-400">o formato novelinha</span>
            </h2>
            <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
              Cada vídeo é um capítulo curto com gancho, reviravolta e final que pede o próximo episódio.
            </p>
          </div>

          {/* 3 Step Formula Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Step 1 */}
            <div className="bg-[#12082e] border border-purple-500/30 p-6 rounded-2xl space-y-4 hover:border-yellow-400/50 transition-colors relative">
              <span className="text-4xl font-black text-yellow-400 font-mono block">01</span>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                GANCHO
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                O drama começa nos primeiros 3 segundos. Frase impactante e expressão marcante travam a rolagem da tela.
              </p>
              <div className="bg-purple-950/60 p-2.5 rounded-xl border border-purple-500/20 text-xs font-semibold text-yellow-200">
                💬 "Você não vai acreditar com quem o Banana Boss tava!"
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#12082e] border border-purple-500/30 p-6 rounded-2xl space-y-4 hover:border-yellow-400/50 transition-colors relative">
              <span className="text-4xl font-black text-yellow-400 font-mono block">02</span>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                REVIRAVOLTA
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                A história vira completamente. Conflito, barraco ou segredo revelado que prende o espectador.
              </p>
              <div className="bg-purple-950/60 p-2.5 rounded-xl border border-purple-500/20 text-xs font-semibold text-yellow-200">
                ⚡ "Moranguete entra gritando com print de prova!"
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#12082e] border border-purple-500/30 p-6 rounded-2xl space-y-4 hover:border-yellow-400/50 transition-colors relative">
              <span className="text-4xl font-black text-yellow-400 font-mono block">03</span>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                PRÓXIMO EPISÓDIO
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                A curiosidade fica extrema. O vídeo acaba no clímax, forçando o público a entrar no seu perfil.
              </p>
              <div className="bg-purple-950/60 p-2.5 rounded-xl border border-purple-500/20 text-xs font-semibold text-yellow-200">
                👀 "Curte e segue para ver a parte 2 no perfil!"
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black text-sm uppercase tracking-wider shadow-lg shadow-yellow-500/20">
              <Zap className="w-4 h-4 fill-black" />
              VONTADE DE CONTINUAR ASSISTINDO
            </span>
          </div>

        </div>
      </section>

      {/* VISUAL STYLE HIGHLIGHT (Page 7) featuring Gemini_Generated_Image_is17wzis17wzis17.jfif */}
      <section className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-purple-950 via-[#18093d] to-pink-950 p-6 sm:p-10 rounded-3xl border-2 border-pink-500/40 shadow-2xl overflow-hidden">
          
          {/* Image display */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-pink-400/60 shadow-2xl">
              <img
                src={glamourGemini}
                alt="Modelos sensuais e divertidos das frutinhas"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-3 py-1 rounded-xl text-xs font-black text-pink-300 border border-pink-400/40">
                🔥 CHARME & COR
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-300 font-extrabold text-xs uppercase tracking-wider border border-pink-500/30">
              VISUAL OUSADO. SEMPRE DIVERTIDO.
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Modelos sensuais e divertidos que <span className="text-yellow-400">chamam atenção</span>
            </h2>

            <p className="text-purple-200 text-base leading-relaxed">
              Frutinhas glamourosas, cheias de charme e cor, que fazem o público parar o dedo na tela imediatamente. A combinação perfeita de estética 3D vibrante, humor e narrativa magnética.
            </p>

            <div>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-black py-4 px-8 rounded-2xl shadow-xl shadow-yellow-500/20 transition-transform hover:scale-105 active:scale-95 text-base"
              >
                <span>GARANTIR PACK COMPLETO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
