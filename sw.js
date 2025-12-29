const CACHE_NAME = "panini-cache-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./album.html",
  "./compare.html",
  "./offline.html",
  "./style.css",
  "./storage.js",
  "./login.js",
  "./dashboard.js",
  "./album.js",
  "./compare.js",
  "./catalog.js",
  "./pwa.js",
  "./manifest.webmanifest",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // navigation requests: network first, fallback to cache/offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("./offline.html"))
        )
    );
    return;
  }

  // static assets: cache first
  if (request.destination === "style" || request.destination === "script" || request.destination === "image" || CORE_ASSETS.includes(url.pathname.replace(/^\//, "./"))) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return res;
      }))
    );
  }
});
