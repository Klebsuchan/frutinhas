import React from "react";
import { Star, TrendingUp, CheckCircle2, Flame, Users } from "lucide-react";
import viralProofImg from "../../Gemini_Generated_Image_3uw8w43uw8w43uw8.jfif";
import { CHECKOUT_URL } from "../data/packData";
import { ProfileShowcase } from "./ProfileShowcase";

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-[#0c0722] text-white py-16 md:py-24 border-y border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-black text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            PROVA SOCIAL & VIRALIZAÇÃO REAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            PERFIL COM <span className="text-yellow-400">+185 MIL SEGUIDORES</span>
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto">
            Veja como o acervo de frutinhas cria audiência massiva nas redes sociais em poucos meses.
          </p>
        </div>

        {/* PROFILE SHOWCASE CARD WITH BIG 185.4K FOLLOWERS STAT */}
        <ProfileShowcase />

        {/* Highlight Banner with User's Uploaded Image Gemini_Generated_Image_3uw8w43uw8w43uw8.jfif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#17093d] via-[#10062a] to-[#1e0a47] border-2 border-emerald-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden mt-8">
          
          {/* Image Showcase */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/60 shadow-2xl bg-black">
              <img
                src={viralProofImg}
                alt="Exemplo de Viralização no TikTok e Reels com o Pack Frutinhas"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black text-emerald-400 border border-emerald-400/40 flex items-center gap-1.5 shadow-lg">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>+2.4 MILLION VIEWS</span>
              </div>
            </div>
          </div>

          {/* Details & Live Case */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
              <span className="text-xs font-extrabold text-white ml-2">4.9 / 5.0 Avaliações dos Clientes</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
              "Recuperei o investimento de <span className="text-emerald-400">R$ 10,00</span> no primeiro vídeo postado!"
            </h3>

            <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
              O público das redes curte e compartilha compulsivamente a saga do Banana Boss e da Moranguete. As notificações de novos seguidores e visualizações não param.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-purple-100 font-medium">
              <div className="flex items-center gap-2 bg-purple-950/60 p-3 rounded-xl border border-purple-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Lucas M. (Criador Dark):</strong> "Criei o canal do zero, baixei o pack e no 2º dia um vídeo bateu 800k views!"</span>
              </div>

              <div className="flex items-center gap-2 bg-purple-950/60 p-3 rounded-xl border border-purple-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Camila R. (Afiliada):</strong> "Tudo já vem pronto e dublado em português. É só postar e colocar o link na bio."</span>
              </div>

              <div className="flex items-center gap-2 bg-purple-950/60 p-3 rounded-xl border border-purple-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Thiago S.:</strong> "Paguei só R$ 10,00 e levei mais de 2.000 vídeos HD sem marca d'água. Excelente!"</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 hover:from-emerald-400 text-black font-black py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/20 text-sm sm:text-base transition-transform active:scale-95"
              >
                <span>QUERO VIRALIZAR TAMBÉM POR R$ 10,00</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
