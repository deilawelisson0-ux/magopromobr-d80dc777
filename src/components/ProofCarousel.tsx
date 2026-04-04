import { useState, useEffect } from "react";
import tenisNikeImg from "@/assets/tenis-nike.jpeg";
import foneBluetoothImg from "@/assets/fone-bluetooth.jpeg";
import perfumeImportadoImg from "@/assets/perfume-importado.jpeg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import camisetaDryfitImg from "@/assets/camiseta-dryfit.jpeg";

const proofItems = [
    {
    product: "Tênis Nike",
    before: "R$457",
    after: "R$99",
    emoji: "👟",
    image: tenisNikeImg,
  },
  {
    product: "Fone Bluetooth",
    before: "R$189",
    after: "R$39",
    emoji: "🎧",
    image: foneBluetoothImg,
  },
  {
    product: "Perfume Importado",
    before: "R$320",
    after: "R$129",
    emoji: "🧴",
    image: perfumeImportadoImg,
  },
  {
    product: "Smartwatch",
    before: "R$599",
    after: "R$149",
    emoji: "⌚",
    image: smartwatchImg,
  },
  {
    product: "Camiseta Dry-Fit",
    before: "R$120",
    after: "R$29",
    emoji: "👕",
    image: camisetaDryfitImg,
  },
];

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
      <p className="text-[9px] sm:text-xs lg:text-base font-bold text-foreground text-center mb-1.5">
        🛍 Olha o que estão pegando no grupo:
      </p>

      <div className="flex gap-1.5 lg:gap-2 justify-center overflow-hidden">
        {proofItems.map((item, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden border border-border text-center transition-all duration-500 min-w-[110px] sm:min-w-[110px] lg:min-w-[120px] min-h-[90px] sm:min-h-[100px] lg:min-h-[110px] ${
              i === active ? "border-primary/70 scale-110 shadow-lg" : "opacity-70"
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 flex flex-col justify-end h-full px-2 py-2 lg:px-3 lg:py-2">
              <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-white leading-tight">
                {item.product}
              </div>

              <div className="text-[10px] sm:text-[11px] text-white/75 line-through mt-1">
                {item.before}
              </div>

              <div className="text-[13px] sm:text-sm lg:text-base font-extrabold text-green-400 text-lg">
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
