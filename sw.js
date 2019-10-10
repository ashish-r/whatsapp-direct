const CACHE_NAME = 'whatsapp-direct-v5'
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    const filesToCache = [
        'index.html',
        'css/style.css',
        'js/sw-install.js',
        'js/index.js',
    ]
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(filesToCache)
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
