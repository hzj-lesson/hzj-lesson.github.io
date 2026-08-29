/* 教师备课助手 · Service Worker
 * 策略：安装时预缓存核心壳；运行时缓存优先 + 后台更新（stale-while-revalidate）
 */
const CACHE = 'wb-lesson-v1'
const CORE = ['/', '/manifest.webmanifest', '/favicon.svg']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  // 仅处理同源 GET（外部 CDN 字体等走网络）
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return

  event.respondWith(
    caches.match(req).then((cached) => {
      // 有缓存先返回，同时后台更新
      const fetchPromise = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
        }
        return res
      }).catch(() => cached)
      return cached || fetchPromise
    }),
  )
})
