// Incrémenter la version à chaque déploiement pour forcer la mise à jour
const CACHE = 'rebours-v23';
const FICHIERS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Cache d'abord, mise à jour en arrière-plan (polices Google comprises)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const enCache = await c.match(e.request, { ignoreSearch: e.request.mode === 'navigate' });
    const reseau = fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') c.put(e.request, r.clone());
      return r;
    }).catch(() => enCache);
    return enCache || reseau;
  }));
});
