/* Start the service worker and cache all of the app's content */
window.addEventListener('install', function(e) {
    const cacheName = 'whatsapp-direct'
    const filesToCache = [
        'index.html',
        'css/style.css',
        'js/sw-install.js',
        'js/index.js',
    ]
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache)
        })
    )
})

/* Serve cached content when offline */
window.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    )
})

/* Trigger when app install successful */
window.addEventListener('appinstalled', (evt) => {
    document.getElementById("mobile_number").value = 9
})

let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
    // Stash the event so it can be triggered later.
    deferredPrompt = e
    document.getElementById("mobile_number").value = 999
})
