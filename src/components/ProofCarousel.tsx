import { useState, useEffect } from "react";

import foneBluetoothImg from "@/assets/FONE.webp";
import perfumeImportadoImg from "@/assets/PERFUME.webp";
import smartwatchImg from "@/assets/RELOGIO.webp";
import camisetaDryFitImg from "@/assets/CAMISA DARK.webp";

const proofItems = [
  {
    product: "Tênis Nike",
    before: "R$457",
    after: "R$99",
    emoji: "👟",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    product: "Fone Bluetooth",
    before: "R$189",
    after: "R$39",
    emoji: "🎧",
    image: foneBluetoothImg
  },
  {
    product: "Perfume Importado",
    before: "R$344",
    after: "R$129",
    emoji: "🔥",
    image: perfumeImportadoImg
  },
  {
    product: "Relógio",
    before: "R$249",
    after: "R$74",
    emoji: "⌚",
    image: smartwatchImg
  },
  {
    product: "Camiseta Dry-Fit",
    before: "R$70",
    after: "R$29",
    emoji: "👕",
    image: camisetaDryFitImg
  }
];

// 🔥 FUNÇÃO DE DESCONTO DINÂMICO
const getDiscountPercent = (before: string, after: string) => {
  const beforeValue = Number(before.replace("R$", "").replace(",", ".").trim());
  const afterValue = Number(after.replace("R$", "").replace(",", ".").trim());

  if (!beforeValue || !afterValue || afterValue >= beforeValue) return 0;

  return Math.round(((beforeValue - afterValue) / beforeValue) * 100);
};

const ProofCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % proofItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto">

      {/* TEXTO */}
      <p className="text-[9px] sm:text-xs lg:text-base font-bold text-foreground text-center mb-1.5">
        🔥 Olha o que estão pegando no grupo:
      </p>

      {/* ALERTA DINÂMICO */}
      <p className="text-[11px] text-yellow-400 font-semibold animate-pulse text-center mb-2">
        ⚡ Essas ofertas mudam TODOS OS DIAS
      </p>

      <div className="flex gap-1.5 lg:gap-2 justify-center overflow-hidden">

        {proofItems.map((item, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden border border-border text-center transition-all duration-500 min-w-[110px] sm:min-w-[120px] lg:min-w-[130px] min-h-[90px] sm:min-h-[100px] lg:min-h-[110px]
            ${i === active ? "border-primary/70 scale-110 shadow-lg" : "opacity-70"}`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* OVERLAY ESCURO */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* 🔥 DESCONTO DINÂMICO */}
            <div className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">
              -{getDiscountPercent(item.before, item.after)}%
            </div>

            {/* CONTEÚDO */}
            <div className="relative z-10 flex flex-col justify-end h-full px-2 py-2 lg:px-3 lg:py-2">

              <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white leading-tight">
                {item.product}
              </div>

              <div className="text-[10px] sm:text-[11px] text-white/75 line-through mt-1">
                {item.before}
              </div>

              <div className="text-[13px] sm:text-sm lg:text-base font-extrabold text-green-400">
                {item.after}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProofCarousel;
