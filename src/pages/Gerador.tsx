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