(() => {
  const CLOUD_BASE = "https://<your-project-ref>.functions.supabase.co/functions/v1";

  const store = Storage.load();
  const elToken = document.getElementById("tokenInput");
  const elFetch = document.getElementById("btnFetch");
  const elPreview = document.getElementById("previewCard");
  const elPreviewContent = document.getElementById("previewContent");
  const elStatus = document.getElementById("status");
  const elToast = document.getElementById("toast");
  const elImport = document.getElementById("btnImport");
  const elCancel = document.getElementById("btnCancel");
  const elBack = document.getElementById("btnBack");
  let fetched = null;

  elBack.onclick = () => window.location.href = "./dashboard.html";
  elCancel.onclick = () => { fetched = null; elPreview.classList.add("hidden"); };

  elFetch.onclick = () => {
    const token = parseToken(elToken.value);
    if (!token) { setStatus("Inserisci un token valido."); return; }
    fetchShare(token);
  };

  elImport.onclick = () => {
    if (!fetched) return;
    importPayload(fetched).then(ok => {
      if (ok) window.location.href = "./dashboard.html";
    });
  };

  // auto fetch if hash present
  const autoToken = parseToken(window.location.hash?.slice(1) || "");
  if (autoToken) {
    elToken.value = autoToken;
    fetchShare(autoToken);
  }

  function parseToken(str) {
    if (!str) return null;
    try {
      const url = new URL(str);
      if (url.hash) return url.hash.replace("#", "").trim();
      if (url.searchParams.get("token")) return url.searchParams.get("token")?.trim();
    } catch {
      // not a URL
    }
    return str.trim();
  }

  async function fetchShare(token) {
    setStatus("Caricamento...");
    elPreview.classList.add("hidden");
    try {
      const res = await fetch(`${CLOUD_BASE}/get_share?token=${encodeURIComponent(token)}`);
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Errore di rete");
      fetched = data;
      renderPreview(data);
      setStatus("");
    } catch (e) {
      setStatus(e.message);
      showToast(e.message);
    }
  }

  function renderPreview(data) {
    const { type, payload } = data;
    const ownerName = payload.owner?.name || payload.profile?.name || "Sconosciuto";
    const ownerId = (payload.owner?.id || payload.profile?.id || "").slice(0, 8);
    let html = `<div><strong>Tipo:</strong> ${type === "profile" ? "Profilo" : "Album"}</div>`;
    html += `<div><strong>Proprietario:</strong> ${ownerName}${ownerId ? " · " + ownerId : ""}</div>`;
    if (type === "album") {
      const stats = Storage.computeStats(payload.album.total, payload.stickers || {});
      html += `<div><strong>Album:</strong> ${payload.album.name} (${payload.album.total})</div>`;
      html += `<div><strong>Ce l’ho:</strong> ${stats.owned} • Mancanti: ${stats.missing} • Doppie: ${stats.dup}</div>`;
    } else {
      const albumsCount = Array.isArray(payload.albums) ? payload.albums.length : 0;
      html += `<div><strong>Album inclusi:</strong> ${albumsCount}</div>`;
    }
    elPreviewContent.innerHTML = html;
    elPreview.classList.remove("hidden");
  }

  async function importPayload(data) {
    const { type, payload } = data;
    if (type === "profile") {
      const exists = store.profiles.some(p => p.id === payload.profile.id);
      if (exists) {
        const ok = confirm("Questo profilo esiste già. Sovrascrivere?");
        if (!ok) return false;
      }
      const res = Storage.applyProfileImport(store, payload, exists);
      if (!res.ok && res.reason === "exists") {
        showToast("Profilo già presente.");
        return false;
      }
      showToast("Profilo importato ✅");
      return true;
    }
    if (type === "album") {
      return importAlbumPayload(payload);
    }
    showToast("Tipo non supportato");
    return false;
  }

  function importAlbumPayload(parsed) {
    const activeProfileId = store.activeProfileId;
    if (!activeProfileId) {
      alert("Serve un profilo attivo per importare un album.");
      return false;
    }
    let name = parsed.album.name.trim();
    if (parsed.owner?.id === activeProfileId) {
      const existing = new Set(
        store.albums
          .filter(a => a.profileId === activeProfileId)
          .map(a => a.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Esiste già un album chiamato '${name}'. Inserisci un nuovo nome per importarlo:`, name);
        if (next === null) { return false; }
        name = next.trim();
        if (!name) continue;
      }
      const newAlbum = Storage.createAlbum(store, activeProfileId, name, parsed.album.total);
      const track = store.tracks[activeProfileId][newAlbum.id];
      track.stickers = {};
      if (parsed.stickers && typeof parsed.stickers === "object") {
        for (const k in parsed.stickers) {
          const v = parsed.stickers[k];
          if (Number.isInteger(v) && v >= 1) track.stickers[String(k)] = v;
        }
      }
      track.filter = "ALL";
      track.viewerSection = "ALL";
      track.collapsedSections = {};
      track.currentId = "1";
      Storage.save(store);
      showToast("Album importato ✅");
      return true;
    } else {
      const existing = new Set(
        store.friendAlbums
          .filter(f => f.profileId === activeProfileId && f.ownerId === parsed.owner.id)
          .map(f => f.album.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Hai già importato un album chiamato '${name}' di ${parsed.owner?.name || "Sconosciuto"}. Inserisci un nuovo nome:`, name);
        if (next === null) { return false; }
        name = next.trim();
        if (!name) continue;
      }
      Storage.addFriendAlbum(store, activeProfileId, {
        ownerName: parsed.owner?.name || "Sconosciuto",
        ownerId: parsed.owner?.id || "",
        album: { name, total: parsed.album.total },
        stickers: parsed.stickers
      });
      Storage.save(store);
      showToast("Album importato ✅");
      return true;
    }
  }

  function setStatus(msg) {
    if (elStatus) elStatus.textContent = msg || "";
  }

  let toastTimer = null;
  function showToast(msg) {
    if (!elToast) return;
    elToast.textContent = msg;
    elToast.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => elToast.classList.add("hidden"), 2000);
  }
})();
