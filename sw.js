var FILE_VERSION = ''
var CACHE_NAME = 'whatsapp-direct' + FILE_VERSION

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    var filesToCache = [
        'index.html',
        'assets/css/style.css',
        'assets/scripts/sw-install.js',
        'assets/scripts/index.js'
    ]
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(
                    filesToCache.map(function (file) {
                        return file + FILE_VERSION
                    }).concat('https://cdn.rawgit.com/neocotic/qrious/master/dist/qrious.min.js')
                )
            })
            .then(function () {
                self.skipWaiting()
            })
    )
})

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request)
        })
    )
})

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches
            .keys()
            .then(function (keyList) {
                return Promise.all(
                    keyList
                        .filter(function (key) {
                            return CACHE_NAME === key
                        })
                        .map(function (key) {
                            return caches.delete(key)
                        })
                )
            })
            .then(function () {
                self.clients.claim()
            })
    )
})
