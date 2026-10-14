import React from "react";
import { Film, Flame, Download, UserX, VideoOff, Edit3, Sparkles } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <div className="bg-[#0a061d] text-white py-16 md:py-24 space-y-24">
      
      {/* SECTION 1: O que é o Pack Viral? (Page 2) */}
      <section id="o-que-e" className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 font-extrabold text-xs tracking-wider uppercase">
            CONTEÚDO PRONTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            O que é o <span className="text-yellow-400">Pack Viral?</span>
          </h2>
          <p className="text-purple-200/90 max-w-2xl mx-auto text-sm sm:text-base">
            O maior acervo de vídeos verticais prontos no nicho que mais cresce e engaja nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative group bg-[#130b32] border border-purple-500/30 hover:border-yellow-400/60 p-8 rounded-3xl transition-all hover:-translate-y-1 shadow-xl hover:shadow-yellow-500/10">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
              <Film className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-yellow-300 uppercase mb-3">
              NOVELINHAS E STORIES
            </h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Mais de <strong className="text-white">2.000 vídeos virais</strong> no formato exato que mais atrai engajamento e retenção nas plataformas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-[#130b32] border border-purple-500/30 hover:border-yellow-400/60 p-8 rounded-3xl transition-all hover:-translate-y-1 shadow-xl hover:shadow-yellow-500/10">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-yellow-300 uppercase mb-3">
              DRAMA QUE PRENDE
            </h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Frutinhas com ciúme, fofoca e humor ácido que seguram a atenção do espectador do primeiro ao último segundo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-[#130b32] border border-purple-500/30 hover:border-yellow-400/60 p-8 rounded-3xl transition-all hover:-translate-y-1 shadow-xl hover:shadow-yellow-500/10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-yellow-300 uppercase mb-3">
              PRONTO PARA PUBLICAR
            </h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Tudo pronto para baixar, postar e monetizar. Você não precisa passar horas criando ou configurando nada.
            </p>
          </div>

        </div>
      </section>


      {/* SECTION 2: Você Não Precisa Aparecer, Editar nem Criar do Zero (Page 3) */}
      <section id="sem-aparecer" className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-b from-[#150a3b] to-[#0d0726] border-2 border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 font-extrabold text-xs tracking-wider uppercase">
              SEU ROSTO FICA FORA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              VOCÊ NÃO PRECISA APARECER, EDITAR NEM CRIAR DO ZERO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left">
            
            {/* Box 1 */}
            <div className="bg-[#12092e]/80 border border-purple-500/30 rounded-2xl p-6 space-y-3 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-yellow-400">
                <UserX className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                SEM APARECER
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                As frutinhas entram em cena. Seu rosto fica totalmente de fora. Mantenha seu anonimato com total liberdade.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#12092e]/80 border border-purple-500/30 rounded-2xl p-6 space-y-3 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-yellow-400">
                <VideoOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                SEM EDITAR
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                O vídeo já vem 100% finalizado, com efeitos, áudio sincronizado e legendas dinâmicas pronto para postar.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#12092e]/80 border border-purple-500/30 rounded-2xl p-6 space-y-3 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center text-yellow-400">
                <Edit3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-yellow-300 uppercase">
                SEM CRIAR
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                Roteiro, narrativa, gancho e história já estão prontos. Você economiza centenas de horas de trabalho técnico.
              </p>
            </div>

          </div>

          <div className="pt-4 border-t border-purple-500/20 text-center relative z-10">
            <p className="text-base sm:text-lg font-extrabold text-purple-200 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>Menos produção. Mais foco em publicar e monetizar.</span>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
