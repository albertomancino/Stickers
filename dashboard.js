(() => {
  const store = Storage.load();
  if (!store.activeProfileId) {
    window.location.href = "./index.html";
    return;
  }

  const profile = store.profiles.find(p => p.id === store.activeProfileId);
  if (!profile) {
    Storage.clearActiveProfile(store);
    window.location.href = "./index.html";
    return;
  }

  const elWelcome = document.getElementById("welcome");
  const elAlbumsList = document.getElementById("albumsList");
  const elFriendAlbumsList = document.getElementById("friendAlbumsList");
  const elLogout = document.getElementById("btnLogout");
  const elToast = document.getElementById("toast");
  const elImportBtn = document.getElementById("btnImportAlbum");
  const elImportFile = document.getElementById("importFile");
  const elModal = document.getElementById("importModal");
  const elModalAlbum = document.getElementById("modalAlbumName");
  const elModalOwner = document.getElementById("modalOwner");
  const elModalTotal = document.getElementById("modalTotal");
  const elModalOwned = document.getElementById("modalOwned");
  const elModalMissing = document.getElementById("modalMissing");
  const elModalDup = document.getElementById("modalDup");
  const elBtnCancelImport = document.getElementById("btnCancelImport");
  const elBtnConfirmImport = document.getElementById("btnConfirmImport");
  const elBtnExportProfile = document.getElementById("btnExportProfile");
  const elBtnImportProfile = document.getElementById("btnImportProfile");
  const elProfileImportFile = document.getElementById("profileImportFile");
  const elProfileImpModal = document.getElementById("profileImportModal");
  const elProfImpName = document.getElementById("profImpName");
  const elProfImpId = document.getElementById("profImpId");
  const elProfImpAlbumCount = document.getElementById("profImpAlbumCount");
  const elProfImpOwned = document.getElementById("profImpOwned");
  const elBtnCancelProfileImport = document.getElementById("btnCancelProfileImport");
  const elBtnConfirmProfileImport = document.getElementById("btnConfirmProfileImport");
  const elNewAlbum = document.getElementById("btnNewAlbum");
  const elCreateModal = document.getElementById("createModal");
  const elCreateName = document.getElementById("modalCreateName");
  const elBtnCancelCreate = document.getElementById("btnCancelCreate");
  const elBtnConfirmCreate = document.getElementById("btnConfirmCreate");
  const elBtnCompare = document.getElementById("btnCompare");
  let pendingImport = null; // holds parsed import until confirm
  let pendingProfileImport = null;
  const CLOUD_BASE = "https://<your-project-ref>.functions.supabase.co/functions/v1";
  const elBtnCloudProfile = document.getElementById("btnCloudProfile");
  const elBtnImportLink = document.getElementById("btnImportLink");
  const elCloudModal = document.getElementById("cloudModal");
  const elCloudLink = document.getElementById("cloudLink");
  const elBtnCloseCloud = document.getElementById("btnCloseCloud");
  const elBtnCopyCloud = document.getElementById("btnCopyCloud");
  const elLinkModal = document.getElementById("linkModal");
  const elLinkInput = document.getElementById("linkInput");
  const elLinkStatus = document.getElementById("linkStatus");
  const elBtnCancelLink = document.getElementById("btnCancelLink");
  const elBtnFetchLink = document.getElementById("btnFetchLink");
  const elSharePreviewModal = document.getElementById("sharePreviewModal");
  const elSharePreviewBody = document.getElementById("sharePreviewBody");
  const elBtnCancelShare = document.getElementById("btnCancelShare");
  const elBtnConfirmShare = document.getElementById("btnConfirmShare");
  let pendingShare = null;

  elWelcome.textContent = `Ciao ${profile.name}`;
  const params = new URLSearchParams(window.location.search);
  if (params.get("msg") === "album_deleted") {
    showToast("Album non trovato (forse eliminato).");
    history.replaceState({}, document.title, "./dashboard.html");
  }
  if (params.get("msg") === "profile_imported") {
    showToast("Profilo importato ✅");
    history.replaceState({}, document.title, "./dashboard.html");
  }

  function renderAlbums() {
    elAlbumsList.innerHTML = "";
    elFriendAlbumsList.innerHTML = "";

    const albums = store.albums.filter(a => a.profileId === profile.id);
    if (!albums.length) {
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = "Nessun album. Creane uno nuovo.";
      elAlbumsList.appendChild(empty);
    } else {
      for (const album of albums) {
        const row = document.createElement("div");
        row.className = "list-row album-card";
        const info = document.createElement("div");
        info.className = "album-info";
        const stats = computeAlbumStats(album);
        const pct = Math.min(100, Math.max(0, (stats.owned / album.total) * 100));
        const ownerShort = profile.id.slice(0,8);
        info.innerHTML = `
          <div class="album-name">${album.name}</div>
          <div class="album-owner muted small">Owner: Tu (${profile.name}) · ${ownerShort}</div>
          <div class="album-stats muted small">Mancanti: ${stats.missing} • Ce l’ho: ${stats.owned}${stats.dup ? ` • Doppie: ${stats.dup}` : ""}</div>
          <div class="progress-track small-track"><div class="progress-fill" style="width:${pct}%;"></div></div>
        `;
        const actions = document.createElement("div");
        actions.className = "action-buttons";

        const btnOpen = document.createElement("button");
        btnOpen.textContent = "Apri";
        btnOpen.className = "primary small-btn";
        btnOpen.onclick = () => {
          window.location.href = `album.html?albumId=${encodeURIComponent(album.id)}`;
        };

        const btnExport = document.createElement("button");
        btnExport.textContent = "⬇️ Esporta";
        btnExport.className = "ghost small-btn";
        btnExport.onclick = () => exportAlbum(album.id, album.name, profile.name);

        const btnCloud = document.createElement("button");
        btnCloud.textContent = "☁️ Carica su cloud";
        btnCloud.className = "ghost small-btn";
        btnCloud.onclick = () => uploadAlbum(album.id, false);

        const btnDel = document.createElement("button");
        btnDel.textContent = "🗑️ Elimina";
        btnDel.className = "small-btn btn-danger outline";
        btnDel.onclick = () => deleteAlbum(album.id, album.name, btnDel);

        actions.appendChild(btnOpen);
        actions.appendChild(btnExport);
        actions.appendChild(btnCloud);
        actions.appendChild(btnDel);
        row.appendChild(info);
        row.appendChild(actions);
        elAlbumsList.appendChild(row);
      }
    }

    const friends = store.friendAlbums.filter(f => f.profileId === profile.id);
    if (!friends.length) {
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = "Nessun album importato.";
      elFriendAlbumsList.appendChild(empty);
    } else {
      for (const entry of friends) {
        const row = document.createElement("div");
        row.className = "list-row album-card";
        const info = document.createElement("div");
        info.className = "album-info";
        const stats = Storage.computeStats(entry.album.total, entry.stickers);
        const pct = Math.min(100, Math.max(0, (stats.owned / entry.album.total) * 100));
        const ownerShort = (entry.ownerId || "").slice(0,8);
        info.innerHTML = `
          <div class="album-name">${entry.album.name}</div>
          <div class="album-owner muted small">Owner: ${entry.ownerName || "Sconosciuto"}${ownerShort ? " · " + ownerShort : ""}</div>
          <div class="album-stats muted small">Mancanti: ${stats.missing} • Ce l’ho: ${stats.owned}${stats.dup ? ` • Doppie: ${stats.dup}` : ""}</div>
          <div class="progress-track small-track"><div class="progress-fill" style="width:${pct}%;"></div></div>
        `;
        const actions = document.createElement("div");
        actions.className = "action-buttons";

        const btnOpen = document.createElement("button");
        btnOpen.textContent = "Apri";
        btnOpen.className = "primary small-btn";
        btnOpen.onclick = () => {
          window.location.href = `album.html?friendId=${encodeURIComponent(entry.id)}&source=friend`;
        };

        const btnExport = document.createElement("button");
        btnExport.textContent = "⬇️ Esporta";
        btnExport.className = "ghost small-btn";
        btnExport.onclick = () => exportFriend(entry.id, entry.album.name, entry.ownerName);

        const btnCloud = document.createElement("button");
        btnCloud.textContent = "☁️ Carica su cloud";
        btnCloud.className = "ghost small-btn";
        btnCloud.onclick = () => uploadAlbum(entry.id, true);

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "🗑️ Rimuovi";
        btnRemove.className = "small-btn btn-danger outline";
        btnRemove.onclick = () => removeFriend(entry.id, btnRemove);

        actions.appendChild(btnOpen);
        actions.appendChild(btnExport);
        actions.appendChild(btnCloud);
        actions.appendChild(btnRemove);
        row.appendChild(info);
        row.appendChild(actions);
        elFriendAlbumsList.appendChild(row);
      }
    }
  }

  if (elNewAlbum) {
    elNewAlbum.onclick = () => {
      elCreateName.value = "";
      elCreateModal.classList.remove("hidden");
      setTimeout(() => elCreateName.focus(), 50);
    };
  }
  if (elBtnCompare) {
    elBtnCompare.onclick = () => {
      window.location.href = "compare.html";
    };
  }
  if (elBtnExportProfile) {
    elBtnExportProfile.onclick = () => {
      const payload = Storage.buildProfileExport(store, profile.id);
      if (!payload) {
        showToast("Nessun profilo da esportare.");
        return;
      }
      const shortId = profile.id.slice(0, 8);
      triggerDownload(payload, Storage.sanitizeFileName(`profilo_${profile.name}_${shortId}_panini.json`));
    };
  }
  if (elBtnImportProfile) {
    elBtnImportProfile.onclick = () => elProfileImportFile?.click();
  }
  if (elProfileImportFile) {
    elProfileImportFile.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          const check = Storage.validateProfileImport(parsed);
          if (!check.ok) {
            showToast(check.error || "File profilo non valido.");
            return;
          }
          const albumsCount = Array.isArray(parsed.albums) ? parsed.albums.length : 0;
          let owned = 0;
          if (parsed.tracks) {
            for (const aid in parsed.tracks) {
              const stickers = parsed.tracks[aid]?.stickers || {};
              owned += Object.keys(stickers).length;
            }
          }
          elProfImpName.textContent = parsed.profile.name;
          elProfImpId.textContent = parsed.profile.id.slice(0, 8);
          elProfImpAlbumCount.textContent = albumsCount;
          elProfImpOwned.textContent = owned;
          pendingProfileImport = { parsed };
          elProfileImpModal.classList.remove("hidden");
        } catch {
          showToast("Errore nel leggere il file.");
        } finally {
          elProfileImportFile.value = "";
        }
      };
      reader.readAsText(file);
    };
  }
  if (elBtnCancelProfileImport) {
    elBtnCancelProfileImport.onclick = () => {
      pendingProfileImport = null;
      elProfileImpModal.classList.add("hidden");
    };
  }
  if (elBtnConfirmProfileImport) {
    elBtnConfirmProfileImport.onclick = () => {
      if (!pendingProfileImport) return;
      const { parsed } = pendingProfileImport;
      const exists = store.profiles.some(p => p.id === parsed.profile.id);
      if (exists) {
        const ok = confirm("Questo profilo esiste già su questo dispositivo. Vuoi SOVRASCRIVERLO?");
        if (!ok) { pendingProfileImport = null; elProfileImpModal.classList.add("hidden"); return; }
      }
      const res = Storage.applyProfileImport(store, parsed, exists);
      if (!res.ok && res.reason === "exists") {
        showToast("Profilo già presente. Sovrascrivi per importare.");
        pendingProfileImport = null;
        elProfileImpModal.classList.add("hidden");
        return;
      }
      pendingProfileImport = null;
      elProfileImpModal.classList.add("hidden");
      window.location.href = "./dashboard.html?msg=profile_imported";
    };
  }
  if (elBtnCloudProfile) {
    elBtnCloudProfile.onclick = async () => {
      const payload = Storage.buildProfileExport(store, profile.id);
      if (!payload) { showToast("Nessun profilo."); return; }
      await createShare("profile", payload);
    };
  }
  if (elBtnImportLink) {
    elBtnImportLink.onclick = () => {
      elLinkInput.value = "";
      elLinkStatus.textContent = "";
      elLinkModal.classList.remove("hidden");
      setTimeout(() => elLinkInput.focus(), 50);
    };
  }
  if (elBtnCancelLink) {
    elBtnCancelLink.onclick = () => {
      elLinkModal.classList.add("hidden");
      elLinkStatus.textContent = "";
    };
  }
  if (elBtnFetchLink) {
    elBtnFetchLink.onclick = async () => {
      const token = parseToken(elLinkInput.value);
      if (!token) { elLinkStatus.textContent = "Inserisci un token valido."; return; }
      elLinkStatus.textContent = "Caricamento...";
      const data = await fetchShare(token);
      if (!data) { elLinkStatus.textContent = "Token non valido o scaduto."; return; }
      pendingShare = data;
      renderSharePreview(data);
      elLinkModal.classList.add("hidden");
      elSharePreviewModal.classList.remove("hidden");
    };
  }
  if (elBtnCancelShare) {
    elBtnCancelShare.onclick = () => {
      pendingShare = null;
      elSharePreviewModal.classList.add("hidden");
    };
  }
  if (elBtnConfirmShare) {
    elBtnConfirmShare.onclick = async () => {
      if (!pendingShare) return;
      const ok = await importPayload(pendingShare);
      if (ok) {
        elSharePreviewModal.classList.add("hidden");
        renderAlbums();
      }
      pendingShare = null;
    };
  }
  if (elBtnCancelCreate) {
    elBtnCancelCreate.onclick = () => {
      elCreateModal.classList.add("hidden");
    };
  }
  if (elBtnConfirmCreate) {
    elBtnConfirmCreate.onclick = () => {
      const name = elCreateName.value.trim();
      if (!name) {
        alert("Inserisci un nome per l'album.");
        return;
      }
      Storage.createAlbum(store, profile.id, name);
      renderAlbums();
      elCreateModal.classList.add("hidden");
    };
  }

  elImportBtn.onclick = () => {
    if (elImportFile) elImportFile.click();
  };

  elImportFile.onchange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const check = Storage.validateImport(parsed);
        if (!check.ok) {
          showToast(check.error || "Import fallita.");
          elImportFile.value = "";
          return;
        }
        // Prepare confirmation modal
        const ownerName = parsed.owner?.name || "Sconosciuto";
        const stats = Storage.computeStats(parsed.album.total, parsed.stickers || {});
        elModalAlbum.textContent = parsed.album.name;
        elModalOwner.textContent = ownerName;
        elModalTotal.textContent = parsed.album.total;
        elModalOwned.textContent = stats.owned;
        elModalMissing.textContent = stats.missing;
        elModalDup.textContent = stats.dup;
        pendingImport = { parsed, ownerName };
        elModal.classList.remove("hidden");
      } catch (err) {
        showToast("Errore durante l'import.");
      } finally {
        elImportFile.value = "";
      }
    };
    reader.readAsText(file);
  };

  elBtnCancelImport.onclick = () => {
    pendingImport = null;
    elModal.classList.add("hidden");
  };

  elBtnConfirmImport.onclick = () => {
    if (!pendingImport) {
      elModal.classList.add("hidden");
      return;
    }
    const { parsed, ownerName } = pendingImport;
    let name = parsed.album.name.trim();
    if (parsed.owner.id === profile.id) {
      // import as my album
      const existing = new Set(
        store.albums
          .filter(a => a.profileId === profile.id)
          .map(a => a.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Esiste già un album chiamato '${name}'. Inserisci un nuovo nome per importarlo:`, name);
        if (next === null) { pendingImport = null; elModal.classList.add("hidden"); return; }
        name = next.trim();
        if (!name) continue;
      }
      const newAlbum = Storage.createAlbum(store, profile.id, name, parsed.album.total);
      const track = store.tracks[profile.id][newAlbum.id];
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
    } else {
      // import as friend album
      const existing = new Set(
        store.friendAlbums
          .filter(f => f.profileId === profile.id && f.ownerId === parsed.owner.id)
          .map(f => f.album.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Hai già importato un album chiamato '${name}' di ${ownerName}. Inserisci un nuovo nome per salvarlo:`, name);
        if (next === null) { pendingImport = null; elModal.classList.add("hidden"); return; }
        name = next.trim();
        if (!name) continue;
      }
      Storage.addFriendAlbum(store, profile.id, {
        ownerName,
        ownerId: parsed.owner.id,
        album: { name, total: parsed.album.total },
        stickers: parsed.stickers
      });
    }
    Storage.save(store);
    showToast("Album importato correttamente ✅");
    renderAlbums();
    pendingImport = null;
    elModal.classList.add("hidden");
  };

  elLogout.onclick = () => {
    Storage.clearActiveProfile(store);
    window.location.href = "./index.html";
  };

  function deleteAlbum(albumId, albumName, btn) {
    if (btn.disabled) return;
    const ok = confirm(`Vuoi eliminare l'album '${albumName}'? Questa azione rimuoverà anche tutti i dati associati (figurine).`);
    if (!ok) return;
    btn.disabled = true;

    const idx = store.albums.findIndex(a => a.id === albumId && a.profileId === profile.id);
    if (idx === -1) { btn.disabled = false; return; }
    const album = store.albums[idx];
    store.albums.splice(idx, 1);
    if (store.tracks[profile.id]) {
      delete store.tracks[profile.id][album.id];
      if (Object.keys(store.tracks[profile.id]).length === 0) delete store.tracks[profile.id];
    }
    Storage.save(store);
    renderAlbums();
    showToast("Album eliminato ✅");
  }

  let toastTimer = null;
  function showToast(msg) {
    elToast.textContent = msg;
    elToast.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elToast.classList.add("hidden");
    }, 2000);
  }

  function computeAlbumStats(album) {
    const track = store.tracks[profile.id]?.[album.id];
    if (!track || !track.stickers) {
      return { missing: album.total, owned: 0, dup: 0 };
    }
    let owned = 0, dup = 0;
    for (const k in track.stickers) {
      const v = track.stickers[k];
      if (v >= 1) owned++;
      if (v >= 2) dup++;
    }
    const missing = album.total - owned;
    return { missing, owned, dup };
  }

  function removeFriend(friendId, btn) {
    if (btn.disabled) return;
    const ok = confirm("Rimuovere questo album importato?");
    if (!ok) return;
    btn.disabled = true;
    Storage.deleteFriendAlbum(store, profile.id, friendId);
    renderAlbums();
    showToast("Album rimosso ✅");
  }

  function exportAlbum(albumId, albumName, profileName) {
    const payload = Storage.exportAlbum(store, profile.id, albumId, profileName);
    if (!payload) return;
    triggerDownload(payload, Storage.sanitizeFileName(`${albumName}_${profileName}_panini.json`));
  }

  function exportFriend(friendId, albumName, owner) {
    const payload = Storage.exportFriendAlbum(store, profile.id, friendId);
    if (!payload) return;
    triggerDownload(payload, Storage.sanitizeFileName(`${albumName}_${owner}_panini.json`));
  }

  function uploadAlbum(id, isFriend) {
    const payload = isFriend
      ? Storage.exportFriendAlbum(store, profile.id, id)
      : Storage.exportAlbum(store, profile.id, id, profile.name);
    if (!payload) { showToast("Album non trovato"); return; }
    createShare("album", payload);
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

  async function createShare(type, payload) {
    try {
      const res = await fetch(`${CLOUD_BASE}/create_share`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, payload })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Errore creazione link");
      elCloudLink.value = data.url;
      elCloudModal.classList.remove("hidden");
    } catch (e) {
      showToast(e.message || "Errore cloud");
    }
  }

  async function fetchShare(token) {
    try {
      const res = await fetch(`${CLOUD_BASE}/get_share?token=${encodeURIComponent(token)}`);
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Errore");
      return data;
    } catch (e) {
      showToast(e.message || "Errore link");
      return null;
    }
  }

  function renderSharePreview(data) {
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
    elSharePreviewBody.innerHTML = html;
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
    return false;
  }

  function importAlbumPayload(parsed) {
    let name = parsed.album.name.trim();
    if (parsed.owner?.id === profile.id) {
      const existing = new Set(
        store.albums
          .filter(a => a.profileId === profile.id)
          .map(a => a.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Esiste già un album chiamato '${name}'. Inserisci un nuovo nome per importarlo:`, name);
        if (next === null) { return false; }
        name = next.trim();
        if (!name) continue;
      }
      const newAlbum = Storage.createAlbum(store, profile.id, name, parsed.album.total);
      const track = store.tracks[profile.id][newAlbum.id];
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
      showToast("Album importato correttamente ✅");
      return true;
    } else {
      const ownerName = parsed.owner?.name || "Sconosciuto";
      const existing = new Set(
        store.friendAlbums
          .filter(f => f.profileId === profile.id && f.ownerId === parsed.owner.id)
          .map(f => f.album.name.toLowerCase())
      );
      while (existing.has(name.toLowerCase())) {
        const next = prompt(`Hai già importato un album chiamato '${name}' di ${ownerName}. Inserisci un nuovo nome per salvarlo:`, name);
        if (next === null) { return false; }
        name = next.trim();
        if (!name) continue;
      }
      Storage.addFriendAlbum(store, profile.id, {
        ownerName,
        ownerId: parsed.owner?.id || "",
        album: { name, total: parsed.album.total },
        stickers: parsed.stickers
      });
      Storage.save(store);
      showToast("Album importato correttamente ✅");
      return true;
    }
  }

  function triggerDownload(payload, filename) {
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (elBtnCloseCloud) {
    elBtnCloseCloud.onclick = () => elCloudModal.classList.add("hidden");
  }
  if (elBtnCopyCloud) {
    elBtnCopyCloud.onclick = async () => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(elCloudLink.value);
        } else {
          elCloudLink.select();
          document.execCommand("copy");
        }
        showToast("Link copiato");
      } catch {
        showToast("Copia non riuscita");
      }
    };
  }

  renderAlbums();
})();
