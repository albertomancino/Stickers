(() => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("albumId");
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

  if (!albumId) {
    window.location.href = "dashboard.html";
    return;
  }

  const album = store.albums.find(a => a.id === albumId && a.profileId === profile.id);
  if (!album) {
    window.location.href = "dashboard.html?msg=album_deleted";
    return;
  }

  const elAlbumName = document.getElementById("albumName");
  const elProfileName = document.getElementById("profileName");
  const elFilterSelect = document.getElementById("filterSelect");
  const elPopulateSection = document.getElementById("populateSection");
  const elViewerSection = document.getElementById("viewerSection");
  const elNumber = document.getElementById("number");
  const elTitle = document.getElementById("title");
  const elMeta = document.getElementById("meta");
  const elState = document.getElementById("state");
  const elQuickInput = document.getElementById("quickInput");
  const elQuickMsg = document.getElementById("quickMsg");
  const elModeViewer = document.getElementById("btnModeViewer");
  const elModePopulate = document.getElementById("btnModePopulate");
  const elStickerList = document.getElementById("stickerList");
  const elSearchInput = document.getElementById("searchInput");
  const elStatusFilter = document.getElementById("statusFilter");
  const elSectionSelect = document.getElementById("sectionSelect");
  const elCopyMissing = document.getElementById("btnCopyMissing");
  const elStatRated = document.getElementById("statRated");
  const elStatMissing = document.getElementById("statMissing");
  const elStatOwned = document.getElementById("statOwned");
  const elStatDup = document.getElementById("statDup");
  const elStatUnrated = document.getElementById("statUnrated");
  const elProgressFill = document.getElementById("progressFill");
  const elProgressText = document.getElementById("progressText");

  document.getElementById("btnBack").onclick = () => window.location.href = "dashboard.html";
  document.getElementById("btnLogout").onclick = () => {
    Storage.clearActiveProfile(store);
    window.location.href = "index.html";
  };

  // catalog is embedded locally, init immediately
  initWithCatalog();

  function initWithCatalog() {
    // build ordered IDs and set defaults
    if (!STICKER_IDS || !STICKER_IDS.length) {
      alert("Catalogo vuoto.");
      window.location.href = "dashboard.html";
      return;
    }
    const idSet = new Set(STICKER_IDS);
    const firstId = STICKER_IDS[0];
    const track = Storage.ensureTrack(store, profile.id, album.id, {
      defaultStickerId: firstId,
      validIds: idSet
    });
    let currentId = track.currentId || firstId;
    if (!idSet.has(currentId)) currentId = firstId;
    let lastAction = null; // { id, prev }
    let openDetailId = null;
    let viewMode = "viewer";
    let searchTerm = "";
    let statusFilter = "ALL";
    let sectionFilter = track.viewerSection || "ALL";
    let collapsedSections = track.collapsedSections || {};

    elAlbumName.textContent = album.name;
    elProfileName.textContent = `Profilo: ${profile.name}`;
    elFilterSelect.value = track.filter;

    elModeViewer.onclick = () => switchMode("viewer");
    elModePopulate.onclick = () => switchMode("populate");
    document.getElementById("btnExitPopulate").onclick = () => switchMode("viewer");

    elFilterSelect.onchange = () => {
      track.filter = elFilterSelect.value === "UNRATED" ? "UNRATED" : "ALL";
      if (track.filter === "UNRATED" && getVal(currentId) !== null) {
        goToNextUnrated(true);
      }
      persist();
      render();
    };

    document.getElementById("btnMissing").onclick = () => setOwned(0, true);
    document.getElementById("btnOwned").onclick = () => setOwned(1, true);
    document.getElementById("btnDup").onclick = () => increment(1, true);
    document.getElementById("btnUndo").onclick = undo;

    document.getElementById("qaAddOne").onclick = () => quickAdd("ADD_ONE");
    document.getElementById("qaSetMissing").onclick = () => quickAdd("SET_MISSING");

    elSearchInput.oninput = (e) => {
      searchTerm = e.target.value.toLowerCase();
      renderList();
    };
    elStatusFilter.onchange = (e) => {
      statusFilter = e.target.value;
      renderList();
    };
    elSectionSelect.onchange = (e) => {
      sectionFilter = e.target.value;
      persist();
      renderList();
      if (sectionFilter !== "ALL") scrollToSection(sectionFilter);
    };
    elCopyMissing.onclick = copyMissingList;

    // populate sections dropdown
    const sections = computeSectionsOrdered();
    sections.forEach(sec => {
      const opt = document.createElement("option");
      opt.value = sec;
      opt.textContent = sec;
      elSectionSelect.appendChild(opt);
    });
    if (Object.keys(collapsedSections).length === 0) {
      sections.forEach(sec => { collapsedSections[sec] = true; });
    }
    if (!sections.includes(sectionFilter)) sectionFilter = "ALL";
    elSectionSelect.value = sectionFilter;

    // swipe setup
    const cardEl = document.getElementById("card");
    let startX = null;
    let dragging = false;

    cardEl.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
      dragging = true;
      cardEl.setPointerCapture(e.pointerId);
    });

    cardEl.addEventListener("pointermove", (e) => {
      if (!dragging || startX === null) return;
      const dx = e.clientX - startX;
      cardEl.style.transform = `translateX(${dx}px) rotate(${dx * 0.03}deg)`;
      cardEl.style.opacity = `${Math.max(0.4, 1 - Math.abs(dx) / 400)}`;
    });

    cardEl.addEventListener("pointerup", (e) => {
      if (!dragging || startX === null) return;
      dragging = false;
      const dx = e.clientX - startX;
      startX = null;
      cardEl.style.transform = "";
      cardEl.style.opacity = "1";
      const TH = 90;
      if (dx > TH) setOwned(1, true);
      else if (dx < -TH) setOwned(0, true);
    });

    function getVal(stickerId) {
      const v = track.stickers[stickerId];
      return (v === undefined) ? null : v;
    }

    function setVal(stickerId, v) {
      if (v === null) delete track.stickers[stickerId];
      else track.stickers[stickerId] = v;
    }

    function setOwned(value, autoNext) {
      const prev = getVal(currentId);
      lastAction = { id: currentId, prev };
      setVal(currentId, value);
      persist();
      render();
      if (autoNext) next();
    }

    function increment(delta, autoNext) {
      const prev = getVal(currentId);
      lastAction = { id: currentId, prev };
      const cur0 = (prev === null) ? 0 : prev;
      setVal(currentId, Math.max(0, cur0 + delta));
      persist();
      render();
      if (autoNext) next();
    }

    function undo() {
      if (!lastAction) return;
      const { id, prev } = lastAction;
      setVal(id, prev);
      currentId = id;
      lastAction = null;
      persist();
      render();
    }

    function goToNextUnrated(fromCurrent) {
      const starts = fromCurrent ? [currentId, STICKER_IDS[0]] : [STICKER_IDS[0]];
      for (const start of starts) {
        const startIndex = STICKER_IDS.indexOf(start);
        if (startIndex === -1) continue;
        for (let i = startIndex; i < STICKER_IDS.length; i++) {
          const id = STICKER_IDS[i];
          if (getVal(id) === null) {
            currentId = id;
            persist();
            return true;
          }
        }
      }
      return false;
    }

    function next() {
      if (track.filter === "UNRATED") {
        const ok = goToNextUnrated(true);
        if (!ok) return;
        render();
        return;
      }
      const idx = STICKER_IDS.indexOf(currentId);
      if (idx >= 0 && idx < STICKER_IDS.length - 1) {
        currentId = STICKER_IDS[idx + 1];
        persist();
      }
      render();
    }

    function computeCounts() {
      let missing = 0, owned = 0, dup = 0;
      const rated = Object.keys(track.stickers).length;
      const unrated = STICKER_IDS.length - rated;

      for (const k in track.stickers) {
        const v = track.stickers[k];
        if (v === 0) missing++;
        else if (v === 1) owned++;
        else if (v >= 2) dup++;
      }
      return { unrated, missing, owned, dup, rated };
    }

    function parseNumbers(input) {
      const tokens = input
        .replaceAll(",", " ")
        .replaceAll("\n", " ")
        .split(" ")
        .map(t => t.trim())
        .filter(Boolean);

      const set = new Set();
      for (const t of tokens) {
        if (t.includes("-")) {
          const [aS, bS] = t.split("-").map(x => x.trim());
          let a = parseInt(aS, 10), b = parseInt(bS, 10);
          if (Number.isNaN(a) || Number.isNaN(b)) continue;
          if (a > b) [a, b] = [b, a];
          a = Math.max(1, a);
          b = Math.min(STICKER_IDS.length ? parseInt(STICKER_IDS[STICKER_IDS.length - 1], 10) : b, b);
          for (let x = a; x <= b; x++) set.add(String(x));
        } else {
          const x = parseInt(t, 10);
          if (!Number.isNaN(x) && x >= 1) set.add(String(x));
        }
      }
      // keep only ids that exist in catalog
      return Array.from(set).filter(id => idSet.has(id)).sort((a, b) => Number(a) - Number(b));
    }

    function quickAdd(mode) {
      const ids = parseNumbers(elQuickInput.value);
      if (ids.length === 0) {
        elQuickMsg.textContent = "Nessun numero valido trovato.";
        return;
      }

      for (const id of ids) {
        const prev = getVal(id);
        const cur0 = (prev === null) ? 0 : prev;
        if (mode === "ADD_ONE") setVal(id, cur0 + 1);
        else if (mode === "SET_MISSING") setVal(id, 0);
      }

      persist();
      render();
      elQuickMsg.textContent = `Aggiornate ${ids.length} figurine.`;
    }

    function persist() {
      track.currentId = currentId;
      track.filter = track.filter === "UNRATED" ? "UNRATED" : "ALL";
      track.viewerSection = sectionFilter;
      track.collapsedSections = collapsedSections;
      Storage.save(store);
    }

    function render() {
      renderStats();
      renderList();
      renderPopulateCard();
    }

    function renderStats() {
      const counts = computeCounts();
      const ratedPct = ((counts.rated / STICKER_IDS.length) * 100).toFixed(1);
      elStatRated.textContent = `${counts.rated}/${STICKER_IDS.length} (${ratedPct}%)`;
      elStatMissing.textContent = counts.missing;
      elStatOwned.textContent = counts.owned;
      elStatDup.textContent = counts.dup;
      elStatUnrated.textContent = counts.unrated;
      if (elProgressFill) {
        const pctNum = Math.min(100, Math.max(0, counts.rated / STICKER_IDS.length * 100));
        elProgressFill.style.width = `${pctNum}%`;
      }
      if (elProgressText) {
        elProgressText.textContent = `${ratedPct}%`;
      }
    }

    function renderList() {
      const q = searchTerm.trim();
      const grouped = new Map(); // section -> { rows, stats }

      for (const item of STICKER_CATALOG) {
        const id = String(item.No);
        const sectionName = item.Section || "Senza sezione";
        if (sectionFilter !== "ALL" && sectionName !== sectionFilter) continue;
        const val = getVal(id);
        const status = getStatus(val);
        if (statusFilter === "MISSING" && status.key !== "missing") continue;
        if (statusFilter === "OWNED" && status.key !== "owned") continue;
        if (statusFilter === "DUPLICATES" && status.key !== "dup") continue;
        if (statusFilter === "UNRATED" && status.key !== "unrated") continue;
        if (q) {
          const hay = `${id} ${item.Title || ""}`.toLowerCase();
          if (!hay.includes(q)) continue;
        }
        const metaParts = [];
        if (item.Section) metaParts.push(item.Section);
        if (item.Type) metaParts.push(item.Type);
        const qty = val === null ? 0 : val;
        const rowHtml = `
          <div class="sticker-block" data-id="${id}">
            <div class="row">
              <div class="row-main">
                <div class="row-title">#${id} — ${item.Title || ""}</div>
                <div class="row-meta">${metaParts.join(" · ")}</div>
              </div>
              <div class="row-actions">
                <button class="row-action" data-act="dec" data-id="${id}" ${qty <= 0 ? "disabled" : ""}>-</button>
                <button class="row-action" data-act="inc" data-id="${id}">+</button>
                <div class="badge ${status.className}">${status.label}</div>
              </div>
            </div>
            <div class="sticker-detail ${openDetailId === id ? "" : "hidden"}">
              <div class="detail-line"><strong>Sezione:</strong> ${item.Section || "-"}</div>
              <div class="detail-line"><strong>Tipo:</strong> ${item.Type || "-"}</div>
              <div class="detail-line"><strong>Stato:</strong> ${status.label}</div>
              <div class="detail-line"><strong>Quantità:</strong> ${val === null ? 0 : val}</div>
              <div class="detail-actions">
                <button class="btn-danger" data-act="reset" data-id="${id}">Reset</button>
              </div>
            </div>
          </div>
        `;
        if (!grouped.has(sectionName)) grouped.set(sectionName, { rows: [], stats: { missing:0, owned:0, dup:0, unrated:0 } });
        const bucket = grouped.get(sectionName);
        bucket.rows.push(rowHtml);
        if (status.key === "missing") bucket.stats.missing++;
        else if (status.key === "owned") bucket.stats.owned++;
        else if (status.key === "dup") bucket.stats.dup++;
        else if (status.key === "unrated") bucket.stats.unrated++;
      }

      const parts = [];
      const orderedSections = computeSectionsOrdered();
      let visibleSections = 0;
      let collapsedVisible = 0;
      for (const sec of orderedSections) {
        if (sectionFilter !== "ALL" && sec !== sectionFilter) continue;
        const bucket = grouped.get(sec);
        if (!bucket || !bucket.rows.length) continue;
        visibleSections++;
        if (sectionFilter === "ALL") {
          const slug = slugify(sec || "section");
          const isCollapsed = !!collapsedSections[sec];
          if (isCollapsed) collapsedVisible++;
          const caret = isCollapsed ? "▶" : "▼";
          const statsTxt = `Mancanti: ${bucket.stats.missing} · Ce l’ho: ${bucket.stats.owned} · Doppie: ${bucket.stats.dup} · Non val.: ${bucket.stats.unrated}`;
          parts.push(`
            <div class="sectionGroup ${isCollapsed ? "collapsed" : ""}" data-section="${sec}">
              <button class="sectionHeader" type="button" data-section="${sec}" id="section-${slug}">
                <div class="left">
                  <span class="caret">${caret}</span>
                  <span class="sectionName">${sec}</span>
                </div>
                <span class="sectionStats">${statsTxt}</span>
              </button>
              <div class="sectionBody">
                ${bucket.rows.join("")}
              </div>
            </div>
          `);
        } else {
          parts.push(...bucket.rows);
        }
      }

      elStickerList.innerHTML = parts.join("") || '<div class="muted">Nessuna figurina trovata.</div>';
      attachListHandlers();
      if (sectionFilter !== "ALL") scrollToSection(sectionFilter);
    }

    function attachListHandlers() {
      elStickerList.querySelectorAll(".sticker-block").forEach(block => {
        const id = block.getAttribute("data-id");
        const header = block.querySelector(".row");
        const detail = block.querySelector(".sticker-detail");
        header.onclick = () => {
          openDetailId = (openDetailId === id) ? null : id;
          renderList();
        };
        block.querySelectorAll(".row-action").forEach(btn => {
          btn.onclick = (e) => {
            e.stopPropagation();
            const act = btn.getAttribute("data-act");
            handleDetailAction(act, id, block);
          };
        });
        detail.addEventListener("click", (e) => {
          const btn = e.target.closest("button[data-act]");
          if (!btn) return;
          const act = btn.getAttribute("data-act");
          handleDetailAction(act, id, block);
        });
      });
      elStickerList.querySelectorAll(".sectionHeader").forEach(btn => {
        btn.onclick = () => {
          const sec = btn.getAttribute("data-section");
          collapsedSections[sec] = !collapsedSections[sec];
          persist();
          renderList();
          if (!collapsedSections[sec]) scrollToSection(sec);
        };
      });
    }

    function handleDetailAction(act, id, blockEl) {
      const val = getVal(id);
      if (act === "dec") {
        const cur = (val === null) ? 0 : val;
        setVal(id, Math.max(0, cur - 1));
      } else if (act === "inc") {
        const cur = (val === null) ? 0 : val;
        setVal(id, cur + 1);
      } else if (act === "missing") {
        setVal(id, 0);
      } else if (act === "reset") {
        setVal(id, null);
      }
      persist();
      render();
      if (blockEl) {
        blockEl.classList.add("row-flash");
        setTimeout(() => blockEl.classList.remove("row-flash"), 200);
      }
    }

    function getStatus(val) {
      if (val === null) return { key: "unrated", label: "Non valutata", className: "unrated" };
      if (val === 0) return { key: "missing", label: "Manca", className: "missing" };
      if (val === 1) return { key: "owned", label: "Ce l’ho", className: "owned" };
      return { key: "dup", label: `Doppie (${val - 1})`, className: "dup" };
    }

    function copyMissingList() {
      const missingIds = STICKER_IDS.filter(id => getVal(id) === 0);
      const compact = compressRanges(missingIds);
      const text = `${album.name} – Mancanti: ${compact}`;
      navigator.clipboard.writeText(text).then(() => {
        elCopyMissing.textContent = "Copiato!";
        setTimeout(() => { elCopyMissing.textContent = "Copia mancanti"; }, 1200);
      }).catch(() => alert("Copia negli appunti non riuscita"));
    }

    function compressRanges(ids) {
      const nums = ids.map(id => parseInt(id, 10)).filter(n => !Number.isNaN(n)).sort((a, b) => a - b);
      const parts = [];
      let start = null, prev = null;
      for (const n of nums) {
        if (start === null) {
          start = prev = n;
        } else if (n === prev + 1) {
          prev = n;
        } else {
          parts.push(formatRange(start, prev));
          start = prev = n;
        }
      }
      if (start !== null) parts.push(formatRange(start, prev));
      return parts.join(", ");
    }

    function formatRange(a, b) {
      if (a === b) return String(a);
      return `${a}-${b}`;
    }

    function computeSectionsOrdered() {
      const seen = new Set();
      const arr = [];
      for (const item of STICKER_CATALOG) {
        const sec = item.Section || "Senza sezione";
        if (!seen.has(sec)) {
          seen.add(sec);
          arr.push(sec);
        }
      }
      return arr;
    }

    function slugify(str) {
      return String(str || "section")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    }

    function scrollToSection(secName) {
      const slug = slugify(secName);
      const el = document.getElementById(`section-${slug}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function switchMode(mode) {
      viewMode = mode;
      if (mode === "viewer") {
        elViewerSection.classList.remove("hidden");
        elPopulateSection.classList.add("hidden");
        elModeViewer.classList.add("primary");
        elModePopulate.classList.remove("primary");
      } else {
        elViewerSection.classList.add("hidden");
        elPopulateSection.classList.remove("hidden");
        elModeViewer.classList.remove("primary");
        elModePopulate.classList.add("primary");
      }
    }

    function renderPopulateCard() {
      const v = getVal(currentId);
      elNumber.textContent = `#${currentId}`;
      const info = STICKER_INDEX[currentId];
      elTitle.textContent = info?.Title || "";
      const metaParts = [];
      if (info?.Section) metaParts.push(info.Section);
      if (info?.Type) metaParts.push(info.Type);
      elMeta.textContent = metaParts.join(" · ");
      if (v === null) elState.textContent = "Non valutata";
      else if (v === 0) elState.textContent = "Manca";
      else if (v === 1) elState.textContent = "Ce l’hai";
      else elState.textContent = `Doppie: ${v - 1} (totale copie: ${v})`;
    }

    // init
    switchMode("viewer");
    render();
  }
})();
