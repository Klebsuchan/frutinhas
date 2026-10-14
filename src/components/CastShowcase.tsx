import React, { useState } from "react";
import { Star, PlayCircle, MessageSquare, Volume2, Sparkles, Check } from "lucide-react";
import { CHARACTERS, Character } from "../data/packData";

import fruta1 from "./fruta1.png";
import fruta2 from "./fruta2.png";
import fruta3 from "./fruta3.png";
import fruta4 from "./fruta4.png";

const FRUIT_IMAGES: Record<string, string> = {
  "banana-boss": fruta1,
  "moranguete": fruta2,
  "uvinha-fatal": fruta3,
  "melancia-laranja": fruta4,
};

export const CastShowcase: React.FC = () => {
  const [activeChar, setActiveChar] = useState<Character>(CHARACTERS[0]);
  const [speaking, setSpeaking] = useState<boolean>(false);

  const handleSpeak = (char: Character) => {
    setActiveChar(char);
    setSpeaking(true);

    if (typeof window !== "undefined") {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(char.id === 'banana-boss' ? 220 : char.id === 'moranguete' ? 660 : 440, ctx.currentTime);
          gain.gain.setValueAtTime(0.1, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        }
      } catch (e) {
        // ignore
      }
    }

    setTimeout(() => setSpeaking(false), 2000);
  };

  return (
    <section id="elenco" className="bg-[#080419] py-16 md:py-24 text-white relative">
      
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-16">
        
        {/* TOP PART: Por que as frutinhas estão bombando (Page 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#130b32] border border-purple-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-yellow-400/20 text-yellow-300 font-black text-xs uppercase tracking-wider border border-yellow-400/30">
              CARISMA + EMOÇÃO
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-yellow-400 uppercase tracking-tight">
              Por que as frutinhas estão bombando
            </h2>

            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                <div className="p-2.5 rounded-xl bg-yellow-400/10 text-yellow-400 shrink-0">
                  <Star className="w-6 h-6 fill-yellow-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-yellow-300 uppercase text-base">
                    RECONHECEU, PAROU
                  </h3>
                  <p className="text-purple-200 text-xs sm:text-sm mt-0.5">
                    Personagens carismáticos e expressivos que as pessoas reconhecem na hora enquanto rolam o feed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                <div className="p-2.5 rounded-xl bg-purple-400/10 text-purple-400 shrink-0">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-yellow-300 uppercase text-base">
                    QUER VER O PRÓXIMO
                  </h3>
                  <p className="text-purple-200 text-xs sm:text-sm mt-0.5">
                    Histórias gravadas em episódios sequenciais que fazem o público entrar no seu perfil para ver a continuação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                <div className="p-2.5 rounded-xl bg-pink-400/10 text-pink-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-yellow-300 uppercase text-base">
                    RENDE CONVERSA
                  </h3>
                  <p className="text-purple-200 text-xs sm:text-sm mt-0.5">
                    Emoção, suspense e humor geram enxurradas de comentários e compartilhamentos orgânicos.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Highlight Stage featuring fruta1 (Banana Boss) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-gradient-to-b from-yellow-500/20 to-purple-900/60 p-4 rounded-3xl border-2 border-yellow-400/40 text-center space-y-4 shadow-2xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/60 shadow-lg group">
                <img
                  src={fruta1}
                  alt="Banana Boss"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/80 px-2.5 py-1 rounded-lg text-[10px] font-black text-yellow-400 border border-yellow-400/40">
                  🍌 GALÃ DO POMAR
                </div>
              </div>
              <h3 className="text-2xl font-black text-yellow-400">BANANA BOSS</h3>
              <p className="text-xs text-purple-200 italic font-serif">
                "O galã das correntes de ouro que domina os vídeos virais."
              </p>
              <div className="bg-black/50 p-3 rounded-xl border border-yellow-400/30 text-xs text-yellow-300 font-bold">
                🔥 Mais de 500 episódios dedicados à saga do Boss!
              </div>
            </div>
          </div>

        </div>


        {/* BOTTOM PART: Conheça as Frutinhas do Momento (Page 5) */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/40 text-yellow-300 font-extrabold text-xs uppercase tracking-wider">
              UM ELENCO CHEIO DE PERSONALIDADE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              CONHEÇA AS <span className="text-yellow-400">FRUTINHAS DO MOMENTO</span>
            </h2>
            <p className="text-purple-200 text-sm max-w-xl mx-auto">
              Clique em qualquer personagem para ouvir sua frase marcante e ver sua personalidade!
            </p>
          </div>

          {/* Cast Cards Grid with Custom Images fruta1, fruta2, fruta3, fruta4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHARACTERS.map((char) => {
              const isSelected = activeChar.id === char.id;
              const charImg = FRUIT_IMAGES[char.id];

              return (
                <div
                  key={char.id}
                  onClick={() => handleSpeak(char)}
                  className={`cursor-pointer group relative bg-[#130b32] border-2 rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 ${
                    isSelected
                      ? `${char.borderColor} shadow-2xl bg-gradient-to-b ${char.bgGradient}`
                      : "border-purple-500/20 hover:border-purple-500/50"
                  }`}
                >
                  <div className="space-y-4 text-center">
                    
                    {/* Badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 text-yellow-300 text-[10px] font-black uppercase tracking-wider border border-yellow-400/30">
                      {char.tag}
                    </span>

                    {/* Image Box */}
                    <div className="relative w-full h-48 mx-auto rounded-2xl overflow-hidden border-2 border-purple-500/40 bg-black/40 group-hover:scale-102 transition-transform shadow-lg">
                      <img
                        src={charImg}
                        alt={char.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {isSelected && (
                        <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-xs shadow-md animate-bounce">
                          <Volume2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-yellow-300 transition-colors">
                        {char.name}
                      </h3>
                      <p className="text-xs font-bold text-yellow-400 mt-0.5">
                        {char.role}
                      </p>
                    </div>

                    <p className="text-xs text-purple-200 leading-relaxed min-h-[48px]">
                      {char.description}
                    </p>

                    {/* Traits pills */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                      {char.traits.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded-md font-medium border border-purple-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Quote Box */}
                  <div className="mt-5 pt-3 border-t border-purple-500/20 bg-black/40 p-3 rounded-xl text-left">
                    <p className="text-[11px] font-medium italic text-yellow-200/90 leading-snug">
                      "{char.quote}"
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
