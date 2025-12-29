const STORAGE_KEY = "panini_app_v3";
const DEFAULT_TOTAL = 700;

const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._normalize({});
      return this._normalize(JSON.parse(raw));
    } catch {
      return this._normalize({});
    }
  },

  save(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  },

  setActiveProfile(store, profileId) {
    store.activeProfileId = profileId;
    this.save(store);
  },

  clearActiveProfile(store) {
    store.activeProfileId = null;
    this.save(store);
  },

  createProfile(store, name) {
    const profile = {
      id: uuid(),
      name: name?.trim() || "Profilo",
      createdAt: Date.now()
    };
    store.profiles.push(profile);
    store.activeProfileId = profile.id;
    this.save(store);
    return profile;
  },

  createAlbum(store, profileId, name, total) {
    const album = {
      id: uuid(),
      profileId,
      name: name?.trim() || "Album",
      total: clampTotal(total),
      createdAt: Date.now()
    };
    store.albums.push(album);
    this.ensureTrack(store, profileId, album.id, {
      defaultStickerId: "1",
      validIds: null
    });
    this.save(store);
    return album;
  },

  exportAlbum(store, profileId, albumId, profileName) {
    const album = store.albums.find(a => a.id === albumId && a.profileId === profileId);
    if (!album) return null;
    const stickers = (store.tracks?.[profileId]?.[albumId]?.stickers) || {};
    const cleaned = {};
    for (const k in stickers) {
      const v = stickers[k];
      if (Number.isInteger(v) && v >= 1) cleaned[k] = v;
    }
    return {
      schema: "panini-trade/v1",
      exportedAt: new Date().toISOString(),
      owner: { name: profileName || "" },
      album: { name: album.name, total: album.total },
      catalogHint: { count: STICKER_CATALOG?.length || 0 },
      stickers: cleaned
    };
  },

  validateImport(data) {
    if (!data || typeof data !== "object") return { ok: false, error: "JSON non valido." };
    if (data.schema !== "panini-trade/v1") return { ok: false, error: "Schema non supportato." };
    if (!data.album || typeof data.album.name !== "string" || !data.album.name.trim()) return { ok: false, error: "Nome album mancante." };
    if (!Number.isInteger(data.album.total) || data.album.total <= 0) return { ok: false, error: "Totale album non valido." };
    if (!data.stickers || typeof data.stickers !== "object") return { ok: false, error: "Stickers non valido." };
    for (const k in data.stickers) {
      const v = data.stickers[k];
      if (!Number.isInteger(v) || v < 1) return { ok: false, error: "Valori sticker non validi." };
    }
    return { ok: true };
  },

  sanitizeFileName(name) {
    return name
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_.-]/g, "")
      .slice(0, 80) || "album";
  },

  ensureTrack(store, profileId, albumId, opts) {
    const defaultStickerId = opts?.defaultStickerId || "1";
    const validIds = opts?.validIds; // Set or null
    if (!store.tracks[profileId]) store.tracks[profileId] = {};
    if (!store.tracks[profileId][albumId]) {
      store.tracks[profileId][albumId] = {
        currentId: defaultStickerId,
        filter: "ALL",
        stickers: {},
        viewerSection: "ALL",
        collapsedSections: {}
      };
    }
    const track = store.tracks[profileId][albumId];
    // migrate legacy numeric current -> currentId
    if (track.current !== undefined && track.currentId === undefined) {
      track.currentId = String(track.current);
    }
    if (!track.currentId || (validIds && !validIds.has(track.currentId))) {
      track.currentId = defaultStickerId;
    }
    const allowedFilters = new Set(["ALL","MISSING","OWNED","DUPLICATES"]);
    if (!allowedFilters.has(track.filter)) track.filter = "ALL";
    if (!track.stickers || typeof track.stickers !== "object") track.stickers = {};
    if (!track.viewerSection) track.viewerSection = "ALL";
    // migrate old values: remove zeros/nulls
    for (const key of Object.keys(track.stickers)) {
      const v = track.stickers[key];
      if (v === null || v === 0) delete track.stickers[key];
    }
    return track;
  },

  _normalize(raw) {
    const base = {
      profiles: Array.isArray(raw.profiles) ? raw.profiles : [],
      activeProfileId: raw.activeProfileId ?? null,
      albums: Array.isArray(raw.albums) ? raw.albums : [],
      tracks: (raw.tracks && typeof raw.tracks === "object") ? raw.tracks : {}
    };

    if (!base.profiles.length) {
      const p = { id: uuid(), name: "Profilo", createdAt: Date.now() };
      base.profiles = [p];
      base.activeProfileId = p.id;
    }

    // clean albums
    base.albums = base.albums
      .filter(a => a && a.profileId)
      .map(a => ({
        id: a.id ?? uuid(),
        profileId: a.profileId,
        name: a.name ?? "Album",
        total: clampTotal(a.total),
        createdAt: a.createdAt ?? Date.now()
      }));

    // ensure activeProfileId is valid
    if (!base.profiles.some(p => p.id === base.activeProfileId)) {
      base.activeProfileId = base.profiles[0].id;
    }

    // clean tracks
    for (const pid of Object.keys(base.tracks)) {
      if (!base.profiles.some(p => p.id === pid)) {
        delete base.tracks[pid];
        continue;
      }
      const albumTracks = base.tracks[pid];
      if (typeof albumTracks !== "object") {
        delete base.tracks[pid];
        continue;
      }
      for (const aid of Object.keys(albumTracks)) {
        const track = albumTracks[aid];
        if (!track || typeof track !== "object") {
          delete albumTracks[aid];
          continue;
        }
        if (!Number.isInteger(track.current) || track.current < 1) track.current = 1;
        if (track.filter !== "UNRATED") track.filter = "ALL";
        if (!track.stickers || typeof track.stickers !== "object") track.stickers = {};
      }
    }

    return base;
  }
};

function clampTotal(n) {
  const num = parseInt(n, 10);
  if (!Number.isInteger(num) || num < 1) return DEFAULT_TOTAL;
  return Math.min(num, 2000);
}

function uuid() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return "id-" + Math.random().toString(16).slice(2);
}
