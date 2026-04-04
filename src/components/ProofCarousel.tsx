import { useState, useEffect } from "react";

const proofItems = [
  {
    product: "Tênis Nike",
    before: "R$457",
    after: "R$99",
    emoji: "👟",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    product: "Fone Bluetooth",
    before: "R$189",
    after: "R$39",
    emoji: "🎧",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    product: "Perfume Importado",
    before: "R$320",
    after: "R$129",
    emoji: "🧴",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
  },
  {
    product: "Smartwatch",
    before: "R$599",
    after: "R$149",
    emoji: "⌚",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    product: "Camiseta Dry-Fit",
    before: "R$120",
    after: "R$29",
    emoji: "👕",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
  },
];

const ProofCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % proofItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <p className="text-[9px] sm:text-xs lg:text-base font-bold text-foreground text-center mb-1.5">
        💸 Olha o que estão pegando no grupo:
      </p>
      <div className="flex gap-1.5 lg:gap-2 justify-center overflow-hidden">
        {proofItems.map((item, i) => (
  <div
    key={i}
    className={`relative flex-shrink-0 rounded-lg overflow-hidden border border-border text-center transition-all duration-500 min-w-[92px] sm:min-w-[110px] lg:min-w-[120px] min-h-[90px] sm:min-h-[100px] lg:min-h-[110px] ${
      i === active ? "border-primary/70 scale-105" : "opacity-70"
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

      <div className="text-[13px] sm:text-sm lg:text-base font-extrabold text-yellow-400">
        {item.after}
      </div>
    </div>
  </div>
))}

export default ProofCarousel;
