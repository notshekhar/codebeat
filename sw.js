const version = 'codebeat';
const staticCache = `static-${version}`;
const dynamicCache = 'dynamic'
const files = [
  'index.htm',
  'codebeat.css',
  'codebeat.js',
  'htmlcss/index.htm',
  'JsLibraries/index.htm',
  'chromeExtension/index.htm',
  'htmlcss/0.PNG',
  'htmlcss/1.PNG',
  'htmlcss/3.PNG',
  'htmlcss/4.PNG',
  'htmlcss/5.PNG',
  'htmlcss/6.PNG',
  'htmlcss/7.PNG',
  'htmlcss/8.PNG',
  'htmlcss/9.PNG',
  'htmlcss/10.PNG',
  'htmlcss/11.PNG',
  'htmlcss/12.PNG',
  'htmlcss/13.PNG',
  'htmlcss/14.PNG',
  'htmlcss/15.PNG',
  'htmlcss/16.PNG',
  'htmlcss/17.PNG',
  'htmlcss/18.PNG',
  'htmlcss/19.PNG',
  '/codebeat/codebeat.png'
]

addEventListener('install', (event) => {
  skipWaiting();
  event.waitUntil(async function () {
    const cache = await caches.open(staticCache);
    await cache.addAll(files);
  }());
});

addEventListener('activate', (event) => {
  event.waitUntil(async function () {
    // Remove old caches
    for (const cacheName of await caches.keys()) {
      if (!cacheName.startsWith('podcast-') && cacheName !== staticCache && cacheName !== dynamicCache) {
        await caches.delete(cacheName);
      }
    }
    
    // A pretty harsh way to handle updates, but it's just a demo.
    for (const client of await clients.matchAll()) {
      client.navigate(client.url);
    }
  }());
});

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Skip the service worker for the feed. The page handles the caching.
  if (url.origin === location.origin && url.pathname === '/feed') return;
  event.respondWith(async function () {
    // Offline first:
    const cachedResponse = await caches.match(event.request);
    return cachedResponse || fetch(event.request);
  }());
});
