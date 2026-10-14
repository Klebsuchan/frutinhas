import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data/packData";

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#080419] text-white py-16 md:py-24 border-t border-purple-500/20">
      <div className="max-w-[96%] xl:max-w-[1200px] mx-auto px-2 sm:px-4 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/40 text-yellow-300 font-black text-xs uppercase tracking-wider">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Perguntas <span className="text-yellow-400">Frequentes</span>
          </h2>
          <p className="text-purple-200 text-sm max-w-lg mx-auto">
            Tudo o que você precisa saber antes de baixar o Pack Viral de Novelinhas de Frutinhas.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#130b32] border border-purple-500/30 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-yellow-300 hover:text-yellow-200"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-300 transition-transform ${
                      isOpen ? "rotate-180 text-yellow-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-purple-200 border-t border-purple-500/20 leading-relaxed bg-black/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
