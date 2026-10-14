import React from "react";
import { Shield, Lock, ExternalLink } from "lucide-react";
import { CHECKOUT_URL } from "../data/packData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050310] text-purple-300 py-12 border-t border-purple-500/20 text-xs">
      <div className="max-w-[96%] xl:max-w-[1440px] mx-auto px-2 sm:px-4 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/20">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5">
              <div className="w-full h-full bg-[#120a2e] rounded-[14px] flex items-center justify-center text-xl">
                🍌
              </div>
            </div>
            <div>
              <span className="font-black text-lg text-yellow-300 block leading-none">
                PACK VIRAL FRUTINHAS
              </span>
              <span className="text-[10px] text-purple-400 uppercase tracking-widest block font-bold">
                Acesseseuproduto.shop
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
            <a href="#o-que-e" className="hover:text-yellow-400 transition-colors">O que é</a>
            <a href="#elenco" className="hover:text-yellow-400 transition-colors">Elenco</a>
            <a href="#plataformas" className="hover:text-yellow-400 transition-colors">Plataformas</a>
            <a href="#passos" className="hover:text-yellow-400 transition-colors">3 Passos</a>
            <a href="#oferta" className="hover:text-yellow-400 transition-colors">Garantir Acesso</a>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline flex items-center gap-1">
              <span>Checkout Oficial</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="text-center space-y-3 text-[11px] text-purple-400/80 max-w-3xl mx-auto leading-relaxed">
          <p>
            Este site não é afiliado ao Meta, Instagram, Facebook, TikTok ou Google Inc. Todos os nomes de produtos e marcas registradas citados são de propriedade de seus respectivos titulares.
          </p>
          <p>
            Os resultados de monetização dependem de fatores individuais, tais como a frequência de postagens, regras das plataformas de redes sociais e engajamento do público.
          </p>
          <p className="text-purple-300 font-semibold">
            Pagamento único de R$ 10,00 e liberação imediata via Hotmart: <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">Checkout Oficial Hotmart</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center text-purple-500 text-[10px] flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Pack Viral Novelinhas de Frutinhas. Todos os direitos reservados.</span>
        </div>

      </div>
    </footer>
  );
};
