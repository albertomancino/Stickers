(() => {
  const store = Storage.load();

  const elSelect = document.getElementById("profileSelect");
  const elLogin = document.getElementById("btnLogin");
  const elCreate = document.getElementById("btnCreateLogin");
  const elNewName = document.getElementById("newProfileName");
  const elNoProfiles = document.getElementById("noProfilesMsg");
  const elImportBtn = document.getElementById("btnImportProfile");
  const elImportFile = document.getElementById("profileImportFile");
  const elImpModal = document.getElementById("profileImportModal");
  const elImpName = document.getElementById("impProfileName");
  const elImpId = document.getElementById("impProfileId");
  const elImpAlbumCount = document.getElementById("impAlbumCount");
  const elImpOwned = document.getElementById("impOwned");
  const elImpCancel = document.getElementById("btnCancelProfileImport");
  const elImpConfirm = document.getElementById("btnConfirmProfileImport");
  const elProfilesList = document.getElementById("profilesList");
  const elToast = document.getElementById("toast");
  let pendingProfileImport = null;

  function renderProfiles() {
    elSelect.innerHTML = "";
    store.profiles.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.name;
      elSelect.appendChild(opt);
    });
    elSelect.value = store.activeProfileId;
    const hasProfiles = store.profiles.length > 0;
    elSelect.disabled = !hasProfiles;
    elLogin.disabled = !hasProfiles || !elSelect.value;
    if (elNoProfiles) {
      elNoProfiles.classList.toggle("hidden", hasProfiles);
    }
    renderManageList();
  }

  elLogin.onclick = () => {
    if (!elSelect.value) return;
    Storage.setActiveProfile(store, elSelect.value);
    window.location.href = "./dashboard.html";
  };

  elCreate.onclick = () => {
    const profile = Storage.createProfile(store, elNewName.value);
    elNewName.value = "";
    renderProfiles();
    Storage.setActiveProfile(store, profile.id);
    window.location.href = "./dashboard.html";
  };

  elSelect.onchange = () => {
    elLogin.disabled = !elSelect.value;
  };

  if (elImportBtn) {
    elImportBtn.onclick = () => elImportFile.click();
  }

  elImpCancel.onclick = () => {
    pendingProfileImport = null;
    elImpModal.classList.add("hidden");
  };

  elImpConfirm.onclick = () => {
    if (!pendingProfileImport) return;
    const { parsed } = pendingProfileImport;
    const exists = store.profiles.some(p => p.id === parsed.profile.id);
    if (exists) {
      const ok = confirm("Questo profilo esiste già su questo dispositivo. Vuoi SOVRASCRIVERLO?");
      if (!ok) { pendingProfileImport = null; elImpModal.classList.add("hidden"); return; }
    }
    const res = Storage.applyProfileImport(store, parsed, exists);
    if (!res.ok && res.reason === "exists") {
      alert("Profilo già presente. Sovrascrivi per importare.");
      pendingProfileImport = null;
      elImpModal.classList.add("hidden");
      return;
    }
    pendingProfileImport = null;
    elImpModal.classList.add("hidden");
    renderProfiles();
    window.location.href = "./dashboard.html";
  };

  elImportFile.onchange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const check = Storage.validateProfileImport(parsed);
        if (!check.ok) {
          alert(check.error || "Import profilo non valida.");
          elImportFile.value = "";
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
        elImpName.textContent = parsed.profile.name;
        elImpId.textContent = parsed.profile.id.slice(0,8);
        elImpAlbumCount.textContent = albumsCount;
        elImpOwned.textContent = owned;
        pendingProfileImport = { parsed };
        elImpModal.classList.remove("hidden");
      } catch {
        alert("Errore nel leggere il file.");
      } finally {
        elImportFile.value = "";
      }
    };
    reader.readAsText(file);
  };

  renderProfiles();

  function renderManageList() {
    if (!elProfilesList) return;
    elProfilesList.innerHTML = "";
    if (!store.profiles.length) {
      const empty = document.createElement("div");
      empty.className = "muted small";
      empty.textContent = "Nessun profilo salvato.";
      elProfilesList.appendChild(empty);
      return;
    }
    for (const p of store.profiles) {
      const row = document.createElement("div");
      row.className = "list-row";
      const info = document.createElement("div");
      info.className = "album-info";
      info.innerHTML = `
        <div class="album-name">${p.name}</div>
        <div class="muted small">ID: ${p.id.slice(0,8)}</div>
      `;
      const actions = document.createElement("div");
      actions.className = "action-buttons";
      const btnLoginRow = document.createElement("button");
      btnLoginRow.textContent = "Login";
      btnLoginRow.className = "primary small-btn";
      btnLoginRow.onclick = () => {
        Storage.setActiveProfile(store, p.id);
        window.location.href = "./dashboard.html";
      };
      const btnDelete = document.createElement("button");
      btnDelete.textContent = "Elimina";
      btnDelete.className = "small-btn btn-danger outline";
      btnDelete.onclick = () => deleteProfile(p);
      actions.appendChild(btnLoginRow);
      actions.appendChild(btnDelete);
      row.appendChild(info);
      row.appendChild(actions);
      elProfilesList.appendChild(row);
    }
  }

  function deleteProfile(profile) {
    const ok = confirm(`Vuoi eliminare il profilo '${profile.name}'? Verranno rimossi anche tutti gli album e i dati associati. Azione irreversibile.`);
    if (!ok) return;
    Storage.deleteProfile(store, profile.id);
    renderProfiles();
    showToast("Profilo eliminato ✅");
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
