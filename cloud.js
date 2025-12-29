(() => {
  const CLOUD_BASE = "https://huekliigdzwjnbexfehq.functions.supabase.co/functions/v1";
  const CLOUD_KEY = ""; // lascia vuoto se verify_jwt è disattivato sulle funzioni
  const ACCESS_CODE_KEY = "cloudAccessCode";

  function getAccessCode() {
    try {
      return localStorage.getItem(ACCESS_CODE_KEY) || "";
    } catch {
      return "";
    }
  }

  function setAccessCode(code) {
    try {
      localStorage.setItem(ACCESS_CODE_KEY, code || "");
    } catch {
      // ignore
    }
  }

  async function createShare(type, payload) {
    const accessCode = getAccessCode();
    const res = await fetch(`${CLOUD_BASE}/create_share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(CLOUD_KEY ? { Authorization: `Bearer ${CLOUD_KEY}` } : {})
        , ...(accessCode ? { "X-Access-Code": accessCode } : {})
      },
      body: JSON.stringify({ type, payload })
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "Errore creazione link");
    return data;
  }

  async function fetchShare(token) {
    const res = await fetch(`${CLOUD_BASE}/get_share?token=${encodeURIComponent(token)}`, {
      headers: CLOUD_KEY ? { Authorization: `Bearer ${CLOUD_KEY}` } : {}
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "Errore");
    return data;
  }

  function parseToken(str) {
    const t = (str || "").trim();
    if (!t) return null;
    if (/^[A-Za-z0-9_-]{20,}$/.test(t)) return t;
    if (!str) return null;
    try {
      const url = new URL(str);
      if (url.hash) return url.hash.replace("#", "").trim();
      if (url.searchParams.get("token")) return url.searchParams.get("token")?.trim();
    } catch {
      // non è una URL
    }
    return str.trim();
  }

  function isValidToken(token) {
    return /^[A-Za-z0-9_-]{20,}$/.test(token || "");
  }

  window.Cloud = { createShare, fetchShare, parseToken, getAccessCode, setAccessCode, isValidToken };
})();
