import { memo } from "react";

const LOGO_AVIF = "/img/mago-logo.avif";
const LOGO_WEBP = "/img/mago-logo.webp";
const WHATSAPP_LINK = "/grupo";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    __fbqLoaded?: boolean;
    __loadFbq?: () => void;
  }
}

const handleClick = (e: React.MouseEvent) => {
  // Fire pixel asynchronously — do NOT block navigation
  try {
    if (!window.fbq && typeof window.__loadFbq === "function") window.__loadFbq();
    if (window.fbq) {
      window.fbq("track", "Lead");
      window.fbq("trackCustom", "WhatsAppClick");
    }
  } catch {}
  // Let the browser handle the navigation natively (fastest path)
  // No preventDefault, no setTimeout — instant redirect
};

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Premium dark base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #0b1224 0%, #07090f 55%, #05060a 100%)",
        }}
      />
      {/* Side ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(40% 60% at 0% 50%, rgba(30,58,138,0.10), transparent 70%), radial-gradient(40% 60% at 100% 50%, rgba(30,58,138,0.10), transparent 70%)",
        }}
      />
      {/* Soft gold glow centered behind logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-[55%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.08) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Subtle gold particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <span className="absolute left-[12%] top-[18%] h-[3px] w-[3px] rounded-full bg-yellow-300/40 blur-[1px]" />
        <span className="absolute left-[82%] top-[24%] h-[2px] w-[2px] rounded-full bg-yellow-200/40 blur-[1px]" />
        <span className="absolute left-[20%] top-[72%] h-[2px] w-[2px] rounded-full bg-yellow-300/30 blur-[1px]" />
        <span className="absolute left-[78%] top-[68%] h-[3px] w-[3px] rounded-full bg-yellow-200/30 blur-[1px]" />
        <span className="absolute left-[50%] top-[8%] h-[2px] w-[2px] rounded-full bg-yellow-300/40 blur-[1px]" />
        <span className="absolute left-[35%] top-[88%] h-[2px] w-[2px] rounded-full bg-yellow-200/30 blur-[1px]" />
        <span className="absolute left-[65%] top-[14%] h-[2px] w-[2px] rounded-full bg-yellow-300/30 blur-[1px]" />
        <span className="absolute left-[8%] top-[48%] h-[2px] w-[2px] rounded-full bg-yellow-200/25 blur-[1px]" />
        <span className="absolute left-[92%] top-[44%] h-[2px] w-[2px] rounded-full bg-yellow-300/25 blur-[1px]" />
      </div>
      {/* Vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[440px] flex-col items-center justify-center px-5 py-3 sm:max-w-[520px]">
        {/* Brand name */}
        <h2 className="gold-text text-center text-[18px] font-black tracking-[0.22em] sm:text-[20px]">
          MAGO DAS PROMOÇÕES
        </h2>

        {/* Logo */}
        <div className="relative mt-2 block h-[160px] w-[160px] leading-none sm:h-[200px] sm:w-[200px]">
          {/* SUN — light rays */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-rays"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,214,92,0.55) 0deg, transparent 3deg, transparent 12deg, rgba(255,236,150,0.35) 15deg, transparent 18deg, transparent 30deg, rgba(255,205,60,0.5) 32deg, transparent 35deg, transparent 48deg, rgba(255,236,150,0.28) 50deg, transparent 53deg, transparent 68deg, rgba(255,214,92,0.45) 70deg, transparent 73deg, transparent 90deg, rgba(255,236,150,0.3) 92deg, transparent 95deg, transparent 112deg, rgba(255,205,60,0.5) 114deg, transparent 117deg, transparent 135deg, rgba(255,236,150,0.3) 137deg, transparent 140deg, transparent 158deg, rgba(255,214,92,0.45) 160deg, transparent 163deg, transparent 180deg, rgba(255,236,150,0.35) 182deg, transparent 185deg, transparent 200deg, rgba(255,205,60,0.5) 202deg, transparent 205deg, transparent 222deg, rgba(255,236,150,0.28) 224deg, transparent 227deg, transparent 245deg, rgba(255,214,92,0.45) 247deg, transparent 250deg, transparent 268deg, rgba(255,236,150,0.3) 270deg, transparent 273deg, transparent 290deg, rgba(255,205,60,0.5) 292deg, transparent 295deg, transparent 312deg, rgba(255,236,150,0.3) 314deg, transparent 317deg, transparent 334deg, rgba(255,214,92,0.45) 336deg, transparent 339deg, transparent 357deg, rgba(255,214,92,0.55) 360deg)",
              WebkitMaskImage:
                "radial-gradient(circle, #000 16%, rgba(0,0,0,0.55) 30%, transparent 52%)",
              maskImage:
                "radial-gradient(circle, #000 16%, rgba(0,0,0,0.55) 30%, transparent 52%)",
              filter: "blur(4px)",
            }}
          />
          {/* SUN — fine short rays (higher frequency, soft) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[210%] w-[210%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-rays-fine"
            style={{
              background:
                "repeating-conic-gradient(from 7deg, rgba(255,240,180,0.30) 0deg 1.2deg, transparent 1.2deg 9deg, rgba(255,206,90,0.22) 9deg 10deg, transparent 10deg 18deg)",
              WebkitMaskImage:
                "radial-gradient(circle, #000 22%, rgba(0,0,0,0.45) 36%, transparent 58%)",
              maskImage:
                "radial-gradient(circle, #000 22%, rgba(0,0,0,0.45) 36%, transparent 58%)",
              filter: "blur(5px)",
            }}
          />
          {/* SUN — secondary slower ray layer */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[230%] w-[230%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-rays-alt"
            style={{
              background:
                "conic-gradient(from 18deg, rgba(255,236,160,0.4) 0deg, transparent 4deg, transparent 22deg, rgba(255,214,92,0.3) 26deg, transparent 30deg, transparent 52deg, rgba(255,236,160,0.35) 56deg, transparent 60deg, transparent 84deg, rgba(255,205,60,0.3) 88deg, transparent 92deg, transparent 118deg, rgba(255,236,160,0.35) 122deg, transparent 126deg, transparent 152deg, rgba(255,214,92,0.3) 156deg, transparent 160deg, transparent 188deg, rgba(255,236,160,0.32) 192deg, transparent 196deg, transparent 224deg, rgba(255,205,60,0.3) 228deg, transparent 232deg, transparent 262deg, rgba(255,236,160,0.35) 266deg, transparent 270deg, transparent 300deg, rgba(255,214,92,0.3) 304deg, transparent 308deg, transparent 338deg, rgba(255,236,160,0.3) 342deg, transparent 346deg, transparent 360deg)",
              WebkitMaskImage:
                "radial-gradient(circle, #000 20%, rgba(0,0,0,0.5) 34%, transparent 55%)",
              maskImage:
                "radial-gradient(circle, #000 20%, rgba(0,0,0,0.5) 34%, transparent 55%)",
              filter: "blur(7px)",
            }}
          />
          {/* SUN — warm orange falloff at the edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-breath-slow"
            style={{
              background:
                "radial-gradient(circle, transparent 30%, rgba(255,149,45,0.14) 46%, rgba(255,120,20,0.07) 62%, transparent 80%)",
              filter: "blur(26px)",
              animationDelay: "3s",
            }}
          />
          {/* SUN — outer irradiation */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260%] w-[260%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-breath-slow"
            style={{
              background:
                "radial-gradient(circle, rgba(255,193,7,0.28) 0%, rgba(255,193,7,0.14) 30%, rgba(255,193,7,0.05) 50%, transparent 72%)",
              filter: "blur(18px)",
            }}
          />
          {/* SUN — core glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-sun-breath"
            style={{
              background:
                "radial-gradient(circle, rgba(255,224,130,0.75) 0%, rgba(255,193,7,0.45) 32%, rgba(255,193,7,0.16) 55%, transparent 75%)",
              filter: "blur(16px)",
            }}
          />
          {/* SUN — energy waves */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[190%] w-[190%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/40 animate-sun-wave"
            style={{ filter: "blur(2px)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[190%] w-[190%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/30 animate-sun-wave"
            style={{ filter: "blur(3px)", animationDelay: "4.5s" }}
          />
          {/* SUN — irradiated particles */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-0 w-0">
            {[
              { px: "62px", py: "-54px", d: "0s" },
              { px: "-70px", py: "-38px", d: "2.4s" },
              { px: "48px", py: "66px", d: "4.8s" },
              { px: "-54px", py: "58px", d: "6.6s" },
              { px: "80px", py: "10px", d: "8.2s" },
            ].map((p) => (
              <span
                key={p.d}
                className="absolute h-[3px] w-[3px] rounded-full bg-yellow-200/80 blur-[1px] animate-sun-particle"
                style={
                  {
                    ["--px" as any]: p.px,
                    ["--py" as any]: p.py,
                    animationDelay: p.d,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <picture className="relative z-10 block h-full w-full">
            <source srcSet={LOGO_AVIF} type="image/avif" />
            <source srcSet={LOGO_WEBP} type="image/webp" />
            <img
              src={LOGO_WEBP}
              alt="Mago das Promoções"
              width={200}
              height={200}
              fetchPriority="high"
              decoding="async"
              className="block h-full w-full rounded-full object-cover ring-2 ring-yellow-400/60 shadow-[0_0_60px_rgba(255,193,7,0.35)]"
            />
          </picture>
        </div>

        {/* Access pill */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/15 px-3 py-1 animate-button-pulse">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[11px] font-bold tracking-[0.18em] text-green-300">ACESSO LIBERADO</span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-center text-[32px] font-black leading-[1.0] tracking-tight sm:text-[42px]">
          AS MELHORES{" "}
          <span className="text-yellow-400">PROMOÇÕES</span>{" "}
          DA INTERNET{" "}
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute inset-x-[-6px] inset-y-[2px] -z-0 rounded-md bg-yellow-400"
            />
            <span className="relative z-10 text-black">ESTÃO AQUI!</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-[380px] text-center text-[14px] leading-snug text-white/75">
          A gente monitora <span className="font-semibold text-white">Amazon, Shopee e Mercado Livre</span> 24h por dia pra te mandar só as <span className="font-semibold text-white">melhores promoções</span>.
        </p>

        {/* CTA Button (kept as-is, with pulse) */}
        <div className="mt-6 w-full max-w-[420px]">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="animate-button-pulse flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 text-base font-bold text-white shadow-2xl shadow-[#25D366]/30 transition hover:scale-[1.03] active:scale-95 sm:py-5 sm:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white sm:h-6 sm:w-6">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            QUERO PARTICIPAR
          </a>

          <p className="mt-2 text-center text-[12px] text-white/70">Gratuito • Sem spam • Saia quando quiser</p>
          <p className="mt-0.5 text-center text-[11px] text-white/55">🪄✨ JÁ SOMOS +2.000 MEMBROS ✨🪄</p>
        </div>
      </div>
    </main>
  );
};

export default memo(Index);
