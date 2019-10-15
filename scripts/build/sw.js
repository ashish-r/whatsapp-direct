var FILE_VERSION = '?v205';
var CACHE_NAME = 'whatsapp-direct' + FILE_VERSION;
self.addEventListener('install', function (e) {
    var filesToCache = [
        '../../index.html',
        '../../css/style.css',
        'sw-install.js',
        'index.js',
    ];
    e.waitUntil(caches.open(CACHE_NAME)
        .then(function (cache) { return cache.addAll(filesToCache.map(function (file) { return file + FILE_VERSION; })); })
        .then(function () { return self.skipWaiting(); }));
});
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request)
        .then(function (response) { return response || fetch(e.request); }));
});
self.addEventListener('activate', function (e) {
    var cacheKeeplist = [CACHE_NAME];
    e.waitUntil(caches.keys()
        .then(function (keyList) { return Promise.all(keyList.filter(function (key) { return cacheKeeplist.includes(key); })
        .map(function (key) { return caches.delete(key); })); })
        .then(function () { return self.clients.claim(); }));
});
//# sourceMappingURL=sw.js.map