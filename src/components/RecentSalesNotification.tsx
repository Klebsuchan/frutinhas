import React, { useState, useEffect } from "react";
import { ShoppingCart, Sparkles, CheckCircle2 } from "lucide-react";

const RECENT_SALES = [
  { name: "Rafael S.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Mariana L.", city: "Rio de Janeiro, RJ", time: "há 4 minutos" },
  { name: "Gabriel M.", city: "Belo Horizonte, MG", time: "há 1 minuto" },
  { name: "Beatriz A.", city: "Curitiba, PR", time: "há 6 minutos" },
  { name: "Lucas F.", city: "Salvador, BA", time: "há 3 minutos" },
];

export const RecentSalesNotification: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial popup delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Loop interval
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_SALES.length);
        setVisible(true);
      }, 4000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const sale = RECENT_SALES[currentIdx];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs animate-bounce-short">
      <div className="bg-[#120a2e]/95 border-2 border-emerald-400 rounded-2xl p-3 shadow-[0_5px_20px_rgba(52,211,153,0.3)] backdrop-blur-md flex items-center gap-3 text-white text-xs">
        <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center shrink-0">
          <ShoppingCart className="w-4 h-4 text-emerald-400" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>NOVA COMPRA CONFIRMADA</span>
          </div>
          <p className="font-extrabold text-white text-xs">
            {sale.name} ({sale.city})
          </p>
          <p className="text-[10px] text-purple-300">
            Adquiriu o Pack por <strong className="text-yellow-300">R$ 10,00</strong> • {sale.time}
          </p>
        </div>
      </div>
    </div>
  );
};
