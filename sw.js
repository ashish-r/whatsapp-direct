const CACHE_NAME = 'whatsapp-direct-v8'
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    const filesToCache = [
        'index.html?v=8',
        'css/style.css?v=8',
        'js/sw-install.js?v=8',
        'js/index.js?v=8',
    ]
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(filesToCache)
        })
        .then(function() {
            return self.skipWaiting()
        })
    )
})

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    )
})

self.addEventListener('activate', (e) => {
    var cacheKeeplist = [CACHE_NAME];
    e.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });
