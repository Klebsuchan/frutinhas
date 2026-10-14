import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, Sparkles, X, ChevronRight, Check } from "lucide-react";
import { EPISODES, CHECKOUT_URL } from "../data/packData";

import generatedVideoThumb from "./Imagemgerada_1791571261369.png";

interface VideoSimulatorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const VideoSimulator: React.FC<VideoSimulatorProps> = ({ isOpen, onClose }) => {
  const [selectedEpId, setSelectedEpId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [currentLineIdx, setCurrentLineIdx] = useState<number>(0);

  const activeEp = EPISODES.find((ep) => ep.id === selectedEpId) || EPISODES[0];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentLineIdx((prev) => (prev + 1) % activeEp.dialogueLines.length);
      
      if (!isMuted && typeof window !== "undefined") {
        try {
          const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContext) {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(440 + Math.random() * 200, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
          }
        } catch (e) {
          // ignore
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying, activeEp, isMuted]);

  const handleSelectEpisode = (id: number) => {
    setSelectedEpId(id);
    setCurrentLineIdx(0);
    setIsPlaying(true);
  };

  const content = (
    <div className="bg-[#120a2e] text-white p-4 sm:p-8 rounded-3xl border border-purple-500/30 max-w-[96%] xl:max-w-[1440px] mx-auto shadow-2xl">
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-xs font-black uppercase tracking-wider mb-2 border border-yellow-400/30">
          🎬 DEMO DO PACK VIRAL
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">
          Simulador de Novelinha das Frutinhas
        </h3>
        <p className="text-xs sm:text-sm text-purple-200 mt-1">
          Veja como a história e o visual retêm o espectador do começo ao fim!
        </p>
      </div>

      {/* Episode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {EPISODES.map((ep) => (
          <button
            key={ep.id}
            onClick={() => handleSelectEpisode(ep.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${
              selectedEpId === ep.id
                ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/30 scale-105"
                : "bg-purple-900/40 text-purple-200 hover:bg-purple-800/50 border border-purple-500/20"
            }`}
          >
            <span>{ep.emoji}</span>
            <span>{ep.title.split("—")[0]}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Phone Mockup Screen with Imagemgerada_1791571261369.png */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative w-[290px] sm:w-[320px] h-[540px] bg-black rounded-[40px] border-[10px] border-purple-950 shadow-2xl shadow-purple-600/30 overflow-hidden flex flex-col justify-between p-4">
            
            {/* Phone Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-purple-950 rounded-full z-30" />

            {/* Video Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={generatedVideoThumb}
                alt="Novelinha de Frutinha Video Demo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
            </div>

            {/* Video Stage Foreground */}
            <div className="relative z-10 h-full flex flex-col justify-between p-2">
              
              {/* Top Header info */}
              <div className="flex items-center justify-between text-xs font-bold text-white/90 pt-4">
                <div className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-purple-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>ALTA RETENÇÃO</span>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 bg-black/70 rounded-full text-yellow-300 hover:bg-black/90"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Animated Fruit Speech Stage */}
              <div className="my-auto text-center space-y-3">
                <div className="bg-black/85 border-2 border-yellow-400 rounded-2xl p-3.5 backdrop-blur-md shadow-2xl max-w-[250px] mx-auto text-left">
                  <p className={`text-xs font-black ${activeEp.dialogueLines[currentLineIdx].color}`}>
                    {activeEp.dialogueLines[currentLineIdx].speaker}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1 leading-snug">
                    "{activeEp.dialogueLines[currentLineIdx].text}"
                  </p>
                </div>
              </div>

              {/* Bottom Reel Caption & Actions */}
              <div className="flex items-end justify-between">
                
                {/* Left caption */}
                <div className="max-w-[190px] text-left text-xs space-y-1">
                  <p className="font-extrabold text-yellow-300">@novelinhasdafrutinha</p>
                  <p className="text-[11px] text-white/90 line-clamp-2">
                    {activeEp.hook}
                  </p>
                  <p className="text-[10px] text-purple-300 font-mono">
                    🎵 Som original - Frutinhas Dramáticas
                  </p>
                </div>

                {/* Right Reel Buttons */}
                <div className="flex flex-col items-center gap-3 text-white">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex flex-col items-center text-[10px]"
                  >
                    <div className={`p-2 rounded-full ${liked ? 'bg-red-500 text-white' : 'bg-black/70 text-white'}`}>
                      <Heart className={`w-4 h-4 ${liked ? 'fill-white' : ''}`} />
                    </div>
                    <span className="font-bold">{activeEp.likes}</span>
                  </button>

                  <div className="flex flex-col items-center text-[10px]">
                    <div className="p-2 rounded-full bg-black/70 text-white">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="font-bold">{activeEp.comments}</span>
                  </div>

                  <div className="flex flex-col items-center text-[10px]">
                    <div className="p-2 rounded-full bg-black/70 text-white">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold">Share</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Controls Bar */}
            <div className="relative z-20 pt-2 border-t border-purple-800 flex items-center justify-between px-2 text-xs bg-black/90">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 text-yellow-400 font-bold"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
              </button>
              <span className="text-[10px] text-purple-300 font-mono">{activeEp.views} views</span>
            </div>

          </div>
        </div>

        {/* Right Info Details */}
        <div className="md:col-span-6 text-left space-y-4">
          <div className="bg-purple-900/30 p-4 rounded-2xl border border-purple-500/20 space-y-3">
            <h4 className="text-lg font-black text-yellow-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              {activeEp.title}
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 bg-black/40 rounded-xl border-l-4 border-yellow-400">
                <span className="font-bold text-yellow-300 block uppercase text-[10px]">01. O GANCHO (Primeiros 3 segundos):</span>
                <p className="text-purple-100">{activeEp.hook}</p>
              </div>

              <div className="p-2.5 bg-black/40 rounded-xl border-l-4 border-purple-400">
                <span className="font-bold text-purple-300 block uppercase text-[10px]">02. A REVIRAVOLTA (Meio do vídeo):</span>
                <p className="text-purple-100">{activeEp.twist}</p>
              </div>

              <div className="p-2.5 bg-black/40 rounded-xl border-l-4 border-pink-500">
                <span className="font-bold text-pink-400 block uppercase text-[10px]">03. O CLIFFHANGER (Ganchos de continuação):</span>
                <p className="text-purple-100">{activeEp.cliffhanger}</p>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-purple-200">
            <p className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Vídeos formatados em 9:16 prontos para publicar no TikTok, Reels e Shorts.</span>
            </p>
            <p className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Legendas coloridas animadas e dublagem em Português já incluídas.</span>
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-black py-3.5 px-6 rounded-2xl shadow-lg shadow-yellow-500/20 text-center flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm sm:text-base"
          >
            <span>QUERO TODOS OS 2.000 VÍDEOS</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-4xl my-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 font-bold transition-transform hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#0c0722] border-y border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        {content}
      </div>
    </section>
  );
};
