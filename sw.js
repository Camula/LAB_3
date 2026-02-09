const cacheName = 'dailyfocus-v1';
const filesToCache = [
'/',
'/index.html',
'/style.css',
'/js/main.js',
'/manifest.json'
];

self.addEventListener('install', e => {
e.waitUntil(
caches.open(cacheName).then(cache => cache.addAll(filesToCache))
);
});

self.addEventListener('fetch', e => {
e.respondWith(
caches.match(e.request).then(response => {
return response || fetch(e.request);
})
);
});
