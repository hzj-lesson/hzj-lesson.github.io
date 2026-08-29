/* 教师备课助手 · Service Worker v3
 * v3 修复：导航请求改为 network-first，避免新版发布后旧 HTML 引用已删资源导致白屏
 * 策略：核心壳预缓存；导航请求优先网络、失败回退缓存；静态资源缓存优先 + 后台更新
 */
const CACHE = 'wb-lesson-v3'
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
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => client.postMessage({ type: 'WB_UPDATE' }))
      })),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return

  // 导航请求（HTML）：网络优先，失败回退缓存 —— 防旧 HTML 白屏
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone()
            caches.open(CACHE).then((cache) => cache.put(req, copy))
          }
          return res
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('/'))),
    )
    return
  }

  // 静态资源：缓存优先 + 后台更新
  event.respondWith(
    caches.match(req).then((cached) => {
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
