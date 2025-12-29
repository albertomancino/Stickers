(() => {
  const store = Storage.load();

  const elSelect = document.getElementById("profileSelect");
  const elLogin = document.getElementById("btnLogin");
  const elCreate = document.getElementById("btnCreateLogin");
  const elNewName = document.getElementById("newProfileName");

  function renderProfiles() {
    elSelect.innerHTML = "";
    store.profiles.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.name;
      elSelect.appendChild(opt);
    });
    elSelect.value = store.activeProfileId;
    elLogin.disabled = store.profiles.length === 0;
  }

  elLogin.onclick = () => {
    if (!elSelect.value) return;
    Storage.setActiveProfile(store, elSelect.value);
    window.location.href = "dashboard.html";
  };

  elCreate.onclick = () => {
    const profile = Storage.createProfile(store, elNewName.value);
    elNewName.value = "";
    renderProfiles();
    Storage.setActiveProfile(store, profile.id);
    window.location.href = "dashboard.html";
  };

  renderProfiles();
})();
