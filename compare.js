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

  const myAlbumSelect = document.getElementById("myAlbumSelect");
  const friendAlbumSelect = document.getElementById("friendAlbumSelect");
  const friendOwner = document.getElementById("friendOwner");
  const listAsk = document.getElementById("listAsk");
  const listOffer = document.getElementById("listOffer");
  const warningBanner = document.getElementById("warningBanner");
  const searchFilter = document.getElementById("searchFilter");
  const toggleUseful = document.getElementById("toggleUseful");
  const toastEl = document.getElementById("toast");
  let proposal = { give: {}, receive: {} };
  const USEFUL_KEY = "tradeFilterUsefulOnly";

  document.getElementById("btnBackDash").onclick = () => window.location.href = "./dashboard.html";
  document.getElementById("btnCopyProposal").onclick = () => copyProposal();
  document.getElementById("btnExportProposal").onclick = () => exportProposal();
  document.getElementById("btnResetProposal").onclick = () => { proposal = { give:{}, receive:{} }; persistProposal(); render(); };

  myAlbumSelect.onchange = render;
  friendAlbumSelect.onchange = render;
  searchFilter.oninput = render;
  if (toggleUseful) {
    const saved = localStorage.getItem(USEFUL_KEY);
    const def = saved === null ? true : saved === "true";
    toggleUseful.checked = def;
    toggleUseful.onchange = () => {
      localStorage.setItem(USEFUL_KEY, toggleUseful.checked ? "true" : "false");
      pruneHiddenSelections();
      render();
    };
  }

  function initSelects() {
    myAlbumSelect.innerHTML = "";
    const myAlbums = store.albums.filter(a => a.profileId === profile.id);
    for (const a of myAlbums) {
      const opt = document.createElement("option");
      opt.value = a.id;
      opt.textContent = a.name;
      myAlbumSelect.appendChild(opt);
    }

    friendAlbumSelect.innerHTML = "";
    const friends = store.friendAlbums.filter(f => f.profileId === profile.id);
    for (const f of friends) {
      const opt = document.createElement("option");
      opt.value = f.id;
      opt.textContent = `${f.album.name} (${f.ownerName || "Sconosciuto"})`;
      opt.dataset.owner = f.ownerName || "";
      opt.dataset.ownerId = f.ownerId || "";
      friendAlbumSelect.appendChild(opt);
    }
  }

  function getCurrentMyAlbum() {
    const id = myAlbumSelect.value;
    const album = store.albums.find(a => a.id === id && a.profileId === profile.id);
    if (!album) return null;
    const track = Storage.ensureTrack(store, profile.id, album.id, { defaultStickerId: "1", validIds: null });
    return { album, track };
  }

  function getCurrentFriendAlbum() {
    const id = friendAlbumSelect.value;
    const entry = store.friendAlbums.find(f => f.id === id && f.profileId === profile.id);
    if (!entry) return null;
    return entry;
  }

  function render() {
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) {
      listAsk.innerHTML = '<div class="muted">Seleziona album</div>';
      listOffer.innerHTML = '<div class="muted">Seleziona album</div>';
      renderProposal();
      warningBanner.classList.add("hidden");
      friendOwner.textContent = "";
      return;
    }
    friendOwner.textContent = `Amico: ${friend.ownerName || "Sconosciuto"} ${friend.ownerId ? "· " + friend.ownerId.slice(0,8) : ""}`;
    warningBanner.classList.toggle("hidden", myData.album.total === friend.album.total);

    const ask = [];
    const offer = [];
    const q = searchFilter.value.toLowerCase().trim();
    const usefulOnly = toggleUseful ? toggleUseful.checked : true;

    let totalOffer = 0;
    let totalAsk = 0;
    for (const item of STICKER_CATALOG) {
      const id = String(item.No);
      const myCopies = myData.track.stickers[id] || 0;
      const friendCopies = friend.stickers[id] || 0;
      const title = item.Title || "";
      const meta = [item.Section, item.Type].filter(Boolean).join(" · ");
      const hay = `${id} ${title}`.toLowerCase();
      if (q && !hay.includes(q)) continue;
      const canOffer = myCopies >= 2;
      const canAsk = friendCopies >= 2;
      if (canOffer) totalOffer++;
      if (canAsk) totalAsk++;
      if (usefulOnly) {
        if (canOffer && friendCopies === 0) offer.push({ id, title, meta, copies: myCopies - 1 });
        if (canAsk && myCopies === 0) ask.push({ id, title, meta, copies: friendCopies - 1 });
      } else {
        if (canOffer) offer.push({ id, title, meta, copies: myCopies - 1 });
        if (canAsk) ask.push({ id, title, meta, copies: friendCopies - 1 });
      }
    }

    renderList(listOffer, offer, "give", totalOffer);
    renderList(listAsk, ask, "receive", totalAsk);
    renderProposal();
  }

  function renderList(container, items, kind, total) {
    const counterId = kind === "give" ? "offerCounter" : "askCounter";
    const counterEl = document.getElementById(counterId);
    if (counterEl) counterEl.textContent = `Figurine mostrate: ${items.length} / ${total || 0}`;
    if (!items.length) {
      container.innerHTML = '<div class="muted">Nessun elemento</div>';
      return;
    }
    const rows = items.map(it => {
      const key = `${kind}-${it.id}`;
      const sel = (proposal[kind] && proposal[kind][it.id]) ? proposal[kind][it.id] : null;
      const checked = !!sel;
      const qty = sel ? sel.qty : 1;
      const options = Array.from({length: it.copies}, (_,i)=> i+1).map(n => `<option value="${n}" ${n===qty?"selected":""}>${n}</option>`).join("");
      return `
        <div class="list-row compare-row">
          <div class="row-main">
            <div class="row-title">#${it.id} — ${it.title}</div>
            <div class="row-meta">${it.meta}</div>
          </div>
          <div class="row-actions">
            <input type="checkbox" class="proposal-check" data-kind="${kind}" data-id="${it.id}" ${checked ? "checked" : ""}/>
            <select class="proposal-qty" data-kind="${kind}" data-id="${it.id}" ${checked ? "" : "disabled"}>
              ${options}
            </select>
            <div class="badge ${kind === "receive" ? "missing" : "dup"}">x${it.copies}</div>
          </div>
        </div>
      `;
    });
    container.innerHTML = rows.join("");
    container.querySelectorAll(".proposal-check").forEach(inp => {
      inp.onchange = () => {
        const id = inp.dataset.id;
        const kind = inp.dataset.kind;
        if (inp.checked) {
          const max = getMaxFor(kind, id);
          proposal[kind][id] = { qty: Math.min(1, max) || 1 };
          container.querySelector(`.proposal-qty[data-id="${id}"][data-kind="${kind}"]`).disabled = false;
        } else {
          delete proposal[kind][id];
          container.querySelector(`.proposal-qty[data-id="${id}"][data-kind="${kind}"]`).disabled = true;
        }
        persistProposal();
        renderProposal();
      };
    });
    container.querySelectorAll(".proposal-qty").forEach(sel => {
      sel.onchange = () => {
        const id = sel.dataset.id;
        const kind = sel.dataset.kind;
        if (!proposal[kind][id]) return;
        proposal[kind][id].qty = parseInt(sel.value, 10) || 1;
        persistProposal();
        renderProposal();
      };
    });
  }

  function getMaxFor(kind, id) {
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) return 1;
    if (kind === "give") {
      const copies = myData.track.stickers[id] || 0;
      return Math.max(1, copies - 1);
    }
    if (kind === "receive") {
      const copies = friend.stickers[id] || 0;
      return Math.max(1, copies - 1);
    }
    return 1;
  }

  function compressRanges(ids) {
    const nums = ids.map(x => parseInt(x, 10)).filter(n => !Number.isNaN(n)).sort((a,b)=>a-b);
    const parts = [];
    let start = null, prev = null;
    for (const n of nums) {
      if (start === null) { start = prev = n; continue; }
      if (n === prev + 1) { prev = n; continue; }
      parts.push(formatRange(start, prev));
      start = prev = n;
    }
    if (start !== null) parts.push(formatRange(start, prev));
    return parts.join(", ");
  }

  function formatRange(a,b) {
    if (a === b) return String(a);
    return `${a}-${b}`;
  }

  function renderProposal() {
    const giveList = document.getElementById("proposalGive");
    const recList = document.getElementById("proposalReceive");
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) {
      giveList.innerHTML = '<div class="muted">Seleziona album</div>';
      recList.innerHTML = '<div class="muted">Seleziona album</div>';
      return;
    }
    const giveItems = Object.keys(proposal.give).map(id => ({ id, qty: proposal.give[id].qty }));
    const recItems = Object.keys(proposal.receive).map(id => ({ id, qty: proposal.receive[id].qty }));
    giveList.innerHTML = giveItems.length
      ? giveItems.map(it => renderProposalRow(it, "dup")).join("")
      : '<div class="muted">Nessuna selezione</div>';
    recList.innerHTML = recItems.length
      ? recItems.map(it => renderProposalRow(it, "missing")).join("")
      : '<div class="muted">Nessuna selezione</div>';
  }

  function renderProposalRow(it, badgeClass) {
    const info = STICKER_INDEX[it.id];
    const title = info?.Title ? `#${it.id} — ${info.Title}` : `#${it.id}`;
    const meta = [info?.Section, info?.Type].filter(Boolean).join(" · ");
    return `
      <div class="list-row compare-row">
        <div class="row-main">
          <div class="row-title">${title}</div>
          <div class="row-meta">${meta}</div>
        </div>
        <div class="badge ${badgeClass}">x${it.qty}</div>
      </div>
    `;
  }

  function copyProposal() {
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) {
      showToast("Seleziona album prima di copiare");
      return;
    }
    const giveItems = Object.keys(proposal.give).map(id => ({ id, qty: proposal.give[id].qty }));
    const recItems = Object.keys(proposal.receive).map(id => ({ id, qty: proposal.receive[id].qty }));
    const giveLines = giveItems.map(it => {
      const info = STICKER_INDEX[it.id];
      return `- ${it.id} (${info?.Title || ""}) x${it.qty}`;
    }).join("\n");
    const recLines = recItems.map(it => {
      const info = STICKER_INDEX[it.id];
      return `- ${it.id} (${info?.Title || ""}) x${it.qty}`;
    }).join("\n");
    const payload = `Scambio proposto
Io (${profile.name}) do:
${giveLines || "-"}
Lui (${friend.ownerName || "amico"}) dà:
${recLines || "-"}
Album: ${myData.album.name} ↔ ${friend.album.name}
Owner amico: ${friend.ownerName || "?"}${friend.ownerId ? " ("+friend.ownerId.slice(0,8)+")" : ""}`;
    navigator.clipboard.writeText(payload).then(() => showToast("Proposta copiata ✅")).catch(() => showToast("Copia fallita"));
  }

  function exportProposal() {
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) {
      showToast("Seleziona album prima di esportare");
      return;
    }
    const proposalObj = {
      schema: "panini-trade-proposal/v1",
      createdAt: new Date().toISOString(),
      me: { ownerId: profile.id, name: profile.name, albumId: myData.album.id, albumName: myData.album.name },
      friend: { ownerId: friend.ownerId || "", name: friend.ownerName || "", friendAlbumId: friend.id, albumName: friend.album.name },
      give: Object.keys(proposal.give).map(id => ({ stickerId: id, qty: proposal.give[id].qty })),
      receive: Object.keys(proposal.receive).map(id => ({ stickerId: id, qty: proposal.receive[id].qty }))
    };
    const fname = Storage.sanitizeFileName(`trade_${myData.album.name}_vs_${friend.ownerName || "friend"}_${Date.now()}.json`);
    const json = JSON.stringify(proposalObj, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fname;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function persistProposal() {
    try {
      const key = proposalKey();
      if (!key) return;
      const data = { give: proposal.give, receive: proposal.receive };
      localStorage.setItem(key, JSON.stringify(data));
    } catch {}
  }

  function loadProposal() {
    try {
      const key = proposalKey();
      if (!key) return;
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      proposal = { give: parsed.give || {}, receive: parsed.receive || {} };
    } catch {}
  }

  function proposalKey() {
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) return null;
    return `proposal:${myData.album.id}:${friend.id}`;
  }

  function pruneHiddenSelections() {
    // remove selections no longer visible under filter
    const myData = getCurrentMyAlbum();
    const friend = getCurrentFriendAlbum();
    if (!myData || !friend) return;
    const usefulOnly = toggleUseful ? toggleUseful.checked : true;
    let removed = false;
    const myCopies = myData.track.stickers;
    const friendCopies = friend.stickers;

    for (const id of Object.keys(proposal.give)) {
      const mine = myCopies[id] || 0;
      const theirs = friendCopies[id] || 0;
      const visible = usefulOnly ? (mine >= 2 && theirs === 0) : (mine >= 2);
      if (!visible) {
        delete proposal.give[id];
        removed = true;
      }
    }
    for (const id of Object.keys(proposal.receive)) {
      const mine = myCopies[id] || 0;
      const theirs = friendCopies[id] || 0;
      const visible = usefulOnly ? (theirs >= 2 && mine === 0) : (theirs >= 2);
      if (!visible) {
        delete proposal.receive[id];
        removed = true;
      }
    }
    if (removed) {
      persistProposal();
      showToast("Alcune selezioni sono state rimosse perché non compatibili con il filtro");
    }
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove("hidden");
    setTimeout(() => toastEl.classList.add("hidden"), 2000);
  }

  initSelects();
  loadProposal();
  render();
})();
