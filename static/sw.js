
const CACHE_NAME = 'kyc-manager-v1';
const urlsToCache = [
  '/',
  '/documents',
  '/loan-calculator',
  '/static/manifest.json',
  '/static/mobile-app-vector-26088392.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
