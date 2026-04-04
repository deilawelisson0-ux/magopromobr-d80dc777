import { useState, useEffect } from "react";

const proofItems = [
  { product: "Tênis Nike", before: "R$457", after: "R$99", emoji: "👟" },
  { product: "Fone Bluetooth", before: "R$189", after: "R$39", emoji: "🎧" },
  { product: "Perfume Importado", before: "R$320", after: "R$129", emoji: "🧴" },
  { product: "Smartwatch", before: "R$599", after: "R$149", emoji: "⌚" },
  { product: "Camiseta Dry-Fit", before: "R$120", after: "R$29", emoji: "👕" },
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
            className={`flex-shrink-0 bg-card/60 border border-border rounded-lg px-2 py-1.5 lg:px-3 lg:py-2 text-center transition-all duration-500 ${
              i === active ? "border-primary/60 scale-105" : "opacity-60"
            }`}
            style={{ minWidth: "70px" }}
          >
            <span className="text-sm lg:text-lg block">{item.emoji}</span>
            <p className="text-[7px] lg:text-xs font-bold text-foreground leading-tight">{item.product}</p>
            <p className="text-[7px] lg:text-[10px] text-muted-foreground line-through">{item.before}</p>
            <p className="text-[8px] lg:text-sm font-black text-primary">{item.after}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofCarousel;
