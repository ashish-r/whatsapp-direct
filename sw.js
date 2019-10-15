const FILE_VERSION = '?v207'
const CACHE_NAME = 'whatsapp-direct' + FILE_VERSION

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e){
    const filesToCache = [
        'index.html',
        'css/style.css',
        'scripts/build/sw-install.js',
        'scripts/build/index.js',
    ]
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(filesToCache.map(function(file){return file + FILE_VERSION}))
        })
        .then(function(){ self.skipWaiting() })
    )
})

/* Serve cached content when offline */
self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request)
        .then(function(response){ return response || fetch(e.request) })
    )
})

self.addEventListener('activate', function(e){
    e.waitUntil(
        caches.keys()
        .then(function(keyList){ 
            return Promise.all(
                keyList.filter(function(key){ return CACHE_NAME === key })
                .map(function(key) { return caches.delete(key) })
            )
        })
        .then(function(){ self.clients.claim() }) 
    )
})
