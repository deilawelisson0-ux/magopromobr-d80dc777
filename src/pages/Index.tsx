import { memo } from "react";

const LOGO = "/img/mago-logo.webp";
const WHATSAPP_LINK = "/grupo";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    __fbqLoaded?: boolean;
    __loadFbq?: () => void;
  }
}

const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  if (!window.fbq && typeof window.__loadFbq === "function") window.__loadFbq();
  if (window.fbq) {
    window.fbq("trackCustom", "Lead");
    window.fbq("trackCustom", "WhatsAppClick");
  }
  setTimeout(() => { window.location.href = WHATSAPP_LINK; }, 300);
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
        <div className="relative mt-2">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(255,193,7,0.55), transparent 70%)" }}
          />
          <img
            src={LOGO}
            alt="Mago das Promoções"
            width={200}
            height={200}
            fetchPriority="high"
            decoding="async"
            className="h-[160px] w-[160px] rounded-full object-cover ring-2 ring-yellow-400/60 shadow-[0_0_60px_rgba(255,193,7,0.35)] sm:h-[200px] sm:w-[200px]"
          />
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
