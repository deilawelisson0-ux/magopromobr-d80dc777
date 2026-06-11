import { useEffect, useMemo, useState } from "react";

type Scraped = {
  title: string;
  price: string;
  images: string[];
  finalUrl: string;
};

type HistoryItem = {
  id: string;
  createdAt: number;
  text: string;
  image?: string;
};

const HISTORY_KEY = "gerador_history_v1";

const PROXIES = [
  (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u: string) => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  (u: string) => `https://r.jina.ai/${u}`,
];

async function fetchHtml(url: string): Promise<string> {
  let lastErr: unknown = null;
  for (const make of PROXIES) {
    try {
      const res = await fetch(make(url), { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (text && text.length > 200) return text;
    } catch (e) {
      lastErr = e;
    }
  }
  throw new Error(`Falha ao buscar página. ${String(lastErr ?? "")}`);
}

function abs(url: string, base: string) {
  try {
    return new URL(url, base).toString();
  } catch {
    return url;
  }
}

function parseScrape(html: string, sourceUrl: string): Scraped {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const meta = (sel: string) =>
    doc.querySelector(sel)?.getAttribute("content")?.trim() ?? "";

  const title =
    meta('meta[property="og:title"]') ||
    meta('meta[name="twitter:title"]') ||
    doc.querySelector("title")?.textContent?.trim() ||
    "";

  // Price detection
  let price =
    meta('meta[property="product:price:amount"]') ||
    meta('meta[property="og:price:amount"]') ||
    meta('meta[itemprop="price"]') ||
    doc.querySelector('[itemprop="price"]')?.getAttribute("content") ||
    "";

  if (!price) {
    const text = doc.body?.textContent ?? "";
    const m = text.match(/R\$\s?[\d.]+,\d{2}/);
    if (m) price = m[0];
  }

  // Images
  const imgs = new Set<string>();
  doc
    .querySelectorAll<HTMLMetaElement>(
      'meta[property="og:image"], meta[property="og:image:secure_url"], meta[name="twitter:image"]',
    )
    .forEach((m) => {
      const c = m.getAttribute("content");
      if (c) imgs.add(abs(c, sourceUrl));
    });

  doc.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
    const src =
      img.getAttribute("src") ||
      img.getAttribute("data-src") ||
      img.getAttribute("data-zoom-image") ||
      "";
    if (!src) return;
    if (/(sprite|icon|logo|placeholder|pixel|blank)/i.test(src)) return;
    const w = parseInt(img.getAttribute("width") || "0", 10);
    const h = parseInt(img.getAttribute("height") || "0", 10);
    if ((w && w < 150) || (h && h < 150)) return;
    imgs.add(abs(src, sourceUrl));
  });

  return {
    title,
    price,
    images: Array.from(imgs).slice(0, 24),
    finalUrl: sourceUrl,
  };
}

function loadHistory(): HistoryItem[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveHistory(list: HistoryItem[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 20)));
}

export default function Gerador() {
  const [tab, setTab] = useState<"scrape" | "mirror">("scrape");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Scraped | null>(null);
  const [selectedImg, setSelectedImg] = useState<string>("");

  const [chamada, setChamada] = useState("🔥 OFERTA RELÂMPAGO");
  const [titulo, setTitulo] = useState("");
  const [precoAntigo, setPrecoAntigo] = useState("");
  const [precoAtual, setPrecoAtual] = useState("");
  const [cupom, setCupom] = useState("");
  const [linkAfiliado, setLinkAfiliado] = useState("");

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    document.title = "Gerador de Ofertas";
    setHistory(loadHistory());
  }, []);

  const oferta = useMemo(() => {
    const linhas = [
      chamada,
      "",
      titulo,
      "",
      precoAntigo ? `De: ~${precoAntigo}~` : "",
      precoAtual ? `Por: ${precoAtual} 🧙🏻‍♂️` : "",
      "",
      cupom ? `🎟️ Cupom:\n${cupom}` : "",
      cupom ? "" : "",
      linkAfiliado ? `🛒 Link do Produto\n${linkAfiliado}` : "",
    ];
    return linhas.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n").trim();
  }, [chamada, titulo, precoAntigo, precoAtual, cupom, linkAfiliado]);

  async function handleScrape() {
    setError("");
    setData(null);
    setSelectedImg("");
    if (!/^https?:\/\//i.test(link)) {
      setError("Cole um link válido começando com http(s)://");
      return;
    }
    setLoading(true);
    try {
      const html = await fetchHtml(link);
      const parsed = parseScrape(html, link);
      setData(parsed);
      setTitulo(parsed.title);
      setPrecoAtual(parsed.price.startsWith("R$") ? parsed.price : parsed.price ? `R$ ${parsed.price}` : "");
      setLinkAfiliado(link);
      setSelectedImg(parsed.images[0] ?? "");
    } catch (e) {
      setError(String((e as Error).message || e));
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setError("Não foi possível copiar.");
    }
  }

  async function downloadImage() {
    if (!selectedImg) return;
    try {
      const res = await fetch(PROXIES[1](selectedImg));
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = (titulo || "imagem").replace(/[^\w\-]+/g, "_").slice(0, 60) + ".jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(selectedImg, "_blank");
    }
  }

  function saveCurrent() {
    const item: HistoryItem = {
      id: String(Date.now()),
      createdAt: Date.now(),
      text: oferta,
      image: selectedImg,
    };
    const next = [item, ...history];
    setHistory(next);
    saveHistory(next);
  }

  function clearHistory() {
    setHistory([]);
    saveHistory([]);
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Gerador de Ofertas</h1>
          <p style={styles.sub}>Cole um link de afiliado (Mercado Livre, Shopee, Amazon...) e gere a oferta pronta para o WhatsApp.</p>
        </header>

        <div style={styles.tabs}>
          <button
            style={{ ...styles.tabBtn, ...(tab === "scrape" ? styles.tabBtnActive : {}) }}
            onClick={() => setTab("scrape")}
          >
            🔗 Link do Produto
          </button>
          <button
            style={{ ...styles.tabBtn, ...(tab === "mirror" ? styles.tabBtnActive : {}) }}
            onClick={() => setTab("mirror")}
          >
            🔄 Espelhar Promoção
          </button>
        </div>

        {tab === "mirror" && <EspelharTab />}

        {tab === "scrape" && (<>
        <section style={styles.card}>
          <label style={styles.label}>Link do produto</label>
          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button style={styles.btnPrimary} onClick={handleScrape} disabled={loading}>
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </div>
          {error && <p style={styles.error}>{error}</p>}
        </section>

        {data && (
          <section style={styles.card}>
            <h2 style={styles.h2}>Imagens encontradas ({data.images.length})</h2>
            {data.images.length === 0 ? (
              <p style={styles.muted}>Nenhuma imagem detectada. Você pode colar uma URL manualmente abaixo.</p>
            ) : (
              <div style={styles.grid}>
                {data.images.map((src) => (
                  <button
                    key={src}
                    onClick={() => setSelectedImg(src)}
                    style={{
                      ...styles.thumb,
                      borderColor: selectedImg === src ? "#facc15" : "#2a2a2a",
                    }}
                  >
                    <img src={src} alt="" loading="lazy" style={styles.thumbImg} />
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {(data || selectedImg) && (
          <section style={styles.card}>
            <h2 style={styles.h2}>Editar oferta</h2>
            <div style={styles.formGrid}>
              <Field label="Chamada principal" value={chamada} onChange={setChamada} />
              <Field label="Título" value={titulo} onChange={setTitulo} textarea />
              <Field label="Preço antigo" value={precoAntigo} onChange={setPrecoAntigo} />
              <Field label="Preço atual" value={precoAtual} onChange={setPrecoAtual} />
              <Field label="Cupom" value={cupom} onChange={setCupom} />
              <Field label="Link de afiliado" value={linkAfiliado} onChange={setLinkAfiliado} />
              <Field label="URL da imagem" value={selectedImg} onChange={setSelectedImg} />
            </div>
          </section>
        )}

        {(oferta || selectedImg) && (
          <section style={styles.card}>
            <h2 style={styles.h2}>Pré-visualização</h2>
            <div style={styles.previewGrid}>
              {selectedImg && (
                <div>
                  <img src={selectedImg} alt="" style={styles.preview} />
                  <div style={styles.btnRow}>
                    <button style={styles.btn} onClick={downloadImage}>Baixar Imagem</button>
                  </div>
                </div>
              )}
              <div>
                <pre style={styles.pre}>{oferta}</pre>
                <div style={styles.btnRow}>
                  <button style={styles.btn} onClick={() => copyText(oferta, "texto")}>
                    {copied === "texto" ? "Copiado ✓" : "Copiar Texto"}
                  </button>
                  <button
                    style={styles.btn}
                    onClick={() =>
                      copyText(`${oferta}${selectedImg ? `\n\n${selectedImg}` : ""}`, "completa")
                    }
                  >
                    {copied === "completa" ? "Copiado ✓" : "Copiar Oferta Completa"}
                  </button>
                  <button style={styles.btnPrimary} onClick={saveCurrent}>Salvar no histórico</button>
                </div>
              </div>
            </div>
          </section>
        )}

        <section style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={styles.h2}>Histórico</h2>
            {history.length > 0 && (
              <button style={styles.btnGhost} onClick={clearHistory}>Limpar</button>
            )}
          </div>
          {history.length === 0 ? (
            <p style={styles.muted}>Nenhuma oferta salva ainda.</p>
          ) : (
            <ul style={styles.histList}>
              {history.map((h) => (
                <li key={h.id} style={styles.histItem}>
                  {h.image && <img src={h.image} alt="" style={styles.histImg} />}
                  <pre style={{ ...styles.pre, flex: 1, margin: 0 }}>{h.text}</pre>
                  <button style={styles.btn} onClick={() => copyText(h.text, h.id)}>
                    {copied === h.id ? "✓" : "Copiar"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        </>)}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div>
      <label style={styles.label}>{label}</label>
      {textarea ? (
        <textarea
          style={{ ...styles.input, minHeight: 64, resize: "vertical" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input style={styles.input} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#f5f5f5",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    padding: "24px 12px",
  },
  container: { maxWidth: 1080, margin: "0 auto", display: "grid", gap: 16 },
  header: { textAlign: "center", marginBottom: 8 },
  h1: { fontSize: 28, fontWeight: 800, margin: 0, color: "#facc15" },
  sub: { color: "#a1a1aa", marginTop: 6, fontSize: 14 },
  card: {
    background: "#141414",
    border: "1px solid #262626",
    borderRadius: 12,
    padding: 16,
  },
  h2: { fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: "#facc15" },
  label: { display: "block", fontSize: 12, color: "#a1a1aa", marginBottom: 6 },
  row: { display: "flex", gap: 8, flexWrap: "wrap" },
  input: {
    width: "100%",
    background: "#0a0a0a",
    border: "1px solid #2a2a2a",
    color: "#f5f5f5",
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  btnPrimary: {
    background: "#facc15",
    color: "#0a0a0a",
    border: 0,
    padding: "10px 16px",
    borderRadius: 8,
    fontWeight: 700,
    cursor: "pointer",
  },
  btn: {
    background: "#262626",
    color: "#f5f5f5",
    border: "1px solid #2a2a2a",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
  },
  btnGhost: {
    background: "transparent",
    color: "#a1a1aa",
    border: "1px solid #2a2a2a",
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 12,
  },
  error: { color: "#f87171", fontSize: 13, marginTop: 8 },
  muted: { color: "#a1a1aa", fontSize: 13 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: 8,
  },
  thumb: {
    background: "#0a0a0a",
    border: "2px solid #2a2a2a",
    borderRadius: 8,
    padding: 0,
    cursor: "pointer",
    overflow: "hidden",
    aspectRatio: "1 / 1",
  },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 },
  previewGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 },
  preview: { width: "100%", borderRadius: 8, border: "1px solid #2a2a2a" },
  pre: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    background: "#0a0a0a",
    border: "1px solid #2a2a2a",
    borderRadius: 8,
    padding: 12,
    fontSize: 13,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    color: "#f5f5f5",
  },
  btnRow: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 },
  histList: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 },
  histItem: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    background: "#0a0a0a",
    border: "1px solid #2a2a2a",
    borderRadius: 8,
    padding: 8,
  },
  histImg: { width: 64, height: 64, objectFit: "cover", borderRadius: 6 },
};

styles.tabs = {
  display: "flex",
  gap: 8,
  background: "#141414",
  border: "1px solid #262626",
  borderRadius: 12,
  padding: 6,
  flexWrap: "wrap",
};
styles.tabBtn = {
  flex: "1 1 160px",
  background: "transparent",
  color: "#a1a1aa",
  border: 0,
  padding: "10px 12px",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
};
styles.tabBtnActive = {
  background: "#facc15",
  color: "#0a0a0a",
};

// =====================================================
// Espelhar Promoção
// =====================================================

const MIRROR_HISTORY_KEY = "gerador_mirror_history_v1";

type MirrorTemplate = "padrao" | "relampago" | "menor";
type MirrorHistoryItem = {
  id: string;
  createdAt: number;
  original: string;
  converted: string;
  affiliate: string;
};

const NOISE_PATTERNS: RegExp[] = [
  /promo[cç][oõ]es?\s+do\s+[a-zà-ú]+/gi,
  /grupo\s+vip/gi,
  /canal\s+de\s+ofertas?/gi,
  /entre\s+no\s+(nosso|meu)\s+(grupo|canal)/gi,
  /siga(\s+nos)?\s+no\s+(instagram|telegram|whatsapp)/gi,
  /assine\s+(nosso|o)\s+canal/gi,
  /#\w+/g,
  /^[-=*_]{3,}$/gm,
];

function cleanText(raw: string): string {
  let t = raw.replace(/\r/g, "");
  for (const re of NOISE_PATTERNS) t = t.replace(re, "");
  // collapse repeated emojis (3+ same in a row -> 1)
  t = t.replace(/([\p{Emoji_Presentation}\p{Extended_Pictographic}])\1{2,}/gu, "$1");
  // remove lines that are only emojis/symbols and very short
  t = t
    .split("\n")
    .filter((l) => {
      const s = l.trim();
      if (!s) return true;
      const alnum = s.replace(/[^a-zA-Z0-9À-ÿ]/g, "");
      return alnum.length > 0 || /R\$/.test(s);
    })
    .join("\n");
  // collapse blank lines
  t = t.replace(/\n{3,}/g, "\n\n");
  return t.trim();
}

function extractFromText(raw: string) {
  const text = raw.replace(/\r/g, "");
  const lines = text.split("\n").map((l) => l.trim());

  // Link
  const urlMatch = text.match(/https?:\/\/[^\s)]+/i);
  const link = urlMatch ? urlMatch[0] : "";

  // Preços
  const priceRe = /R\$\s?[\d.]+,\d{2}|R\$\s?\d+(?:[.,]\d+)?/gi;
  const prices = text.match(priceRe) || [];
  let precoAntigo = "";
  let precoAtual = "";
  if (prices.length >= 2) {
    const nums = prices.map((p) => parseFloat(p.replace(/[^\d,]/g, "").replace(",", ".")));
    const maxIdx = nums.indexOf(Math.max(...nums));
    const minIdx = nums.indexOf(Math.min(...nums));
    precoAntigo = prices[maxIdx];
    precoAtual = prices[minIdx];
  } else if (prices.length === 1) {
    precoAtual = prices[0];
  }
  // "De R$ X Por R$ Y"
  const deM = text.match(/de\s*:?\s*(R\$\s?[\d.,]+)/i);
  const porM = text.match(/por\s*:?\s*(R\$\s?[\d.,]+)/i);
  if (deM) precoAntigo = deM[1];
  if (porM) precoAtual = porM[1];

  // Cupom
  let cupom = "";
  const cupomLineIdx = lines.findIndex((l) => /cupom|codigo|código/i.test(l));
  if (cupomLineIdx >= 0) {
    const same = lines[cupomLineIdx].split(/[:\-]/).slice(1).join(":").trim();
    if (same && !/cupom|codigo|código/i.test(same)) {
      cupom = same.replace(/[^A-Za-z0-9_-]/g, "").toUpperCase();
    } else {
      for (let i = cupomLineIdx + 1; i < Math.min(lines.length, cupomLineIdx + 4); i++) {
        const cand = lines[i].replace(/[^A-Za-z0-9_-]/g, "");
        if (cand.length >= 3 && cand.length <= 24 && /[A-Z0-9]/i.test(cand)) {
          cupom = cand.toUpperCase();
          break;
        }
      }
    }
  }

  // Título: primeira linha "boa" — não emoji, não preço, não link, não cupom
  let titulo = "";
  for (const l of lines) {
    if (!l) continue;
    if (/^https?:/i.test(l)) continue;
    if (priceRe.test(l)) { priceRe.lastIndex = 0; continue; }
    if (/^de\s*:?\s*R\$|^por\s*:?\s*R\$/i.test(l)) continue;
    if (/cupom|codigo|código/i.test(l)) continue;
    const alnum = l.replace(/[^a-zA-ZÀ-ÿ0-9]/g, "");
    if (alnum.length < 4) continue;
    // skip headers like "OFERTA", "PROMO"
    if (/^(oferta|promo[cç][aã]o|alerta|achado)s?\b/i.test(l) && l.length < 25) continue;
    titulo = l.replace(/^[^\p{L}\p{N}R$]+/u, "").trim();
    break;
  }

  return { titulo, precoAntigo, precoAtual, cupom, link };
}

function buildMirror(
  tpl: MirrorTemplate,
  data: { titulo: string; precoAntigo: string; precoAtual: string; cupom: string; affiliate: string },
) {
  const { titulo, precoAntigo, precoAtual, cupom, affiliate } = data;
  if (tpl === "relampago") {
    return [
      "🔥 OFERTA RELÂMPAGO",
      "",
      titulo,
      "",
      precoAntigo ? `De: ~${precoAntigo}~` : "",
      precoAtual ? `Por: ${precoAtual} 🧙🏻‍♂️` : "",
      "",
      "🛒 Link do Produto",
      affiliate,
    ].filter(Boolean).join("\n");
  }
  if (tpl === "menor") {
    return [
      "🚨 MENOR PREÇO DO DIA",
      "",
      titulo,
      "",
      precoAtual ? `💰 Apenas ${precoAtual}` : "",
      "",
      "🛒 Link:",
      affiliate,
    ].filter(Boolean).join("\n");
  }
  return [
    "TER UMA DESSAS É SONHO",
    "",
    titulo,
    "",
    precoAntigo ? `De: ~${precoAntigo}~` : "",
    precoAtual ? `Por: ${precoAtual} 🧙🏻‍♂️` : "",
    "",
    cupom ? "🎟️ Cupom:" : "",
    cupom || "",
    cupom ? "" : "",
    "🛒 Link do Produto",
    affiliate,
  ].filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n").trim();
}

function loadMirrorHistory(): MirrorHistoryItem[] {
  try { return JSON.parse(localStorage.getItem(MIRROR_HISTORY_KEY) || "[]"); } catch { return []; }
}
function saveMirrorHistory(list: MirrorHistoryItem[]) {
  localStorage.setItem(MIRROR_HISTORY_KEY, JSON.stringify(list.slice(0, 30)));
}

function EspelharTab() {
  const [original, setOriginal] = useState("");
  const [affiliate, setAffiliate] = useState("");
  const [tpl, setTpl] = useState<MirrorTemplate>("padrao");
  const [titulo, setTitulo] = useState("");
  const [precoAntigo, setPrecoAntigo] = useState("");
  const [precoAtual, setPrecoAtual] = useState("");
  const [cupom, setCupom] = useState("");
  const [linkOriginal, setLinkOriginal] = useState("");
  const [history, setHistory] = useState<MirrorHistoryItem[]>([]);
  const [copied, setCopied] = useState("");

  useEffect(() => { setHistory(loadMirrorHistory()); }, []);

  function convert() {
    const cleaned = cleanText(original);
    const ex = extractFromText(cleaned);
    setTitulo(ex.titulo);
    setPrecoAntigo(ex.precoAntigo);
    setPrecoAtual(ex.precoAtual);
    setCupom(ex.cupom);
    setLinkOriginal(ex.link);
  }

  const converted = useMemo(
    () => buildMirror(tpl, {
      titulo, precoAntigo, precoAtual, cupom,
      affiliate: affiliate.trim() || linkOriginal || "[seu link de afiliado]",
    }),
    [tpl, titulo, precoAntigo, precoAtual, cupom, affiliate, linkOriginal],
  );

  async function copyText(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1500);
    } catch {}
  }

  function save() {
    const item: MirrorHistoryItem = {
      id: String(Date.now()),
      createdAt: Date.now(),
      original,
      converted,
      affiliate: affiliate.trim() || linkOriginal,
    };
    const next = [item, ...history];
    setHistory(next);
    saveMirrorHistory(next);
  }

  function clearAll() {
    setOriginal(""); setTitulo(""); setPrecoAntigo(""); setPrecoAtual("");
    setCupom(""); setLinkOriginal("");
  }

  function clearHist() { setHistory([]); saveMirrorHistory([]); }

  return (
    <>
      <section style={styles.card}>
        <label style={styles.label}>Cole aqui a promoção de outro grupo</label>
        <textarea
          style={{ ...styles.input, minHeight: 160, resize: "vertical" }}
          placeholder="🚨 OFERTA&#10;Kit 3 Bermudas Masculinas&#10;De R$89,90&#10;Por R$49,90&#10;🎟️ Cupom: PROMO10&#10;https://..."
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
        />
        <div style={{ ...styles.btnRow, marginTop: 12 }}>
          <button style={styles.btnPrimary} onClick={convert}>🔄 Converter Promoção</button>
          <button style={styles.btnGhost} onClick={clearAll}>🗑️ Limpar</button>
        </div>
      </section>

      <section style={styles.card}>
        <label style={styles.label}>🔗 Meu Link de Afiliado</label>
        <input
          style={styles.input}
          placeholder="Cole aqui seu link de afiliado"
          value={affiliate}
          onChange={(e) => setAffiliate(e.target.value)}
        />
        <div style={{ marginTop: 12 }}>
          <label style={styles.label}>Modelo MagoPromo</label>
          <div style={styles.row}>
            {([
              ["padrao", "✨ Padrão (Ter uma dessas é sonho)"],
              ["relampago", "🔥 Oferta Relâmpago"],
              ["menor", "🚨 Menor Preço"],
            ] as [MirrorTemplate, string][]).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setTpl(k)}
                style={{ ...styles.btn, ...(tpl === k ? { background: "#facc15", color: "#0a0a0a", borderColor: "#facc15" } : {}) }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {(titulo || precoAtual || cupom) && (
        <section style={styles.card}>
          <h2 style={styles.h2}>Campos detectados (editáveis)</h2>
          <div style={styles.formGrid}>
            <Field label="Título" value={titulo} onChange={setTitulo} textarea />
            <Field label="Preço antigo" value={precoAntigo} onChange={setPrecoAntigo} />
            <Field label="Preço atual" value={precoAtual} onChange={setPrecoAtual} />
            <Field label="Cupom" value={cupom} onChange={setCupom} />
            <Field label="Link original detectado" value={linkOriginal} onChange={setLinkOriginal} />
          </div>
        </section>
      )}

      <section style={styles.card}>
        <h2 style={styles.h2}>Pré-visualização</h2>
        <div style={styles.previewGrid}>
          <div>
            <label style={styles.label}>Texto original</label>
            <pre style={styles.pre}>{original || "—"}</pre>
          </div>
          <div>
            <label style={styles.label}>Padrão MagoPromo</label>
            <pre style={styles.pre}>{converted || "—"}</pre>
          </div>
        </div>
        <div style={styles.btnRow}>
          <button style={styles.btnPrimary} onClick={() => copyText(converted, "conv")}>
            {copied === "conv" ? "Copiado ✓" : "📋 Copiar Oferta"}
          </button>
          <button style={styles.btn} onClick={() => copyText(converted, "txt")}>
            {copied === "txt" ? "Copiado ✓" : "📋 Copiar Texto"}
          </button>
          <button style={styles.btn} onClick={save}>💾 Salvar no Histórico</button>
        </div>
      </section>

      <section style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={styles.h2}>Histórico de espelhamentos</h2>
          {history.length > 0 && <button style={styles.btnGhost} onClick={clearHist}>Limpar</button>}
        </div>
        {history.length === 0 ? (
          <p style={styles.muted}>Nenhum espelhamento salvo ainda.</p>
        ) : (
          <ul style={styles.histList}>
            {history.map((h) => (
              <li key={h.id} style={{ ...styles.histItem, flexDirection: "column" }}>
                <div style={{ fontSize: 11, color: "#a1a1aa" }}>
                  {new Date(h.createdAt).toLocaleString("pt-BR")} · {h.affiliate || "sem link"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                  <pre style={{ ...styles.pre, margin: 0 }}>{h.original}</pre>
                  <pre style={{ ...styles.pre, margin: 0 }}>{h.converted}</pre>
                </div>
                <button style={styles.btn} onClick={() => copyText(h.converted, h.id)}>
                  {copied === h.id ? "Copiado ✓" : "Copiar convertida"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}