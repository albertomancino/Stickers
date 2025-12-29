(() => {
  const store = Storage.load();
  if (!store.activeProfileId) {
    window.location.href = "index.html";
    return;
  }

  const profile = store.profiles.find(p => p.id === store.activeProfileId);
  if (!profile) {
    Storage.clearActiveProfile(store);
    window.location.href = "index.html";
    return;
  }

  const elWelcome = document.getElementById("welcome");
  const elAlbumsList = document.getElementById("albumsList");
  const elAlbumName = document.getElementById("albumName");
  const elLogout = document.getElementById("btnLogout");
  const elCreateAlbum = document.getElementById("btnCreateAlbum");
  const elToast = document.getElementById("toast");

  elWelcome.textContent = `Ciao ${profile.name}`;
  const params = new URLSearchParams(window.location.search);
  if (params.get("msg") === "album_deleted") {
    showToast("Album non trovato (forse eliminato).");
    history.replaceState({}, document.title, "dashboard.html");
  }

  function renderAlbums() {
    elAlbumsList.innerHTML = "";
    const albums = store.albums.filter(a => a.profileId === profile.id);
    if (!albums.length) {
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = "Nessun album. Creane uno nuovo.";
      elAlbumsList.appendChild(empty);
      return;
    }

    for (const album of albums) {
      const row = document.createElement("div");
      row.className = "list-row album-card";
      const info = document.createElement("div");
      info.className = "album-info";
      const stats = computeAlbumStats(album);
      const pct = Math.min(100, Math.max(0, (stats.owned / album.total) * 100));
      info.innerHTML = `
        <div class="album-name">${album.name}</div>
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

      const btnDel = document.createElement("button");
      btnDel.textContent = "🗑️ Elimina";
      btnDel.className = "small-btn btn-danger outline";
      btnDel.onclick = () => deleteAlbum(album.id, album.name, btnDel);

      actions.appendChild(btnOpen);
      actions.appendChild(btnDel);
      row.appendChild(info);
      row.appendChild(actions);
      elAlbumsList.appendChild(row);
    }
  }

  elCreateAlbum.onclick = () => {
    Storage.createAlbum(store, profile.id, elAlbumName.value);
    elAlbumName.value = "";
    renderAlbums();
  };

  elLogout.onclick = () => {
    Storage.clearActiveProfile(store);
    window.location.href = "index.html";
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

  renderAlbums();
})();
