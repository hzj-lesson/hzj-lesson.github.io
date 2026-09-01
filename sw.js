/* 教师备课助手 · Service Worker
 * 策略：
 *   导航请求（HTML）→ network-first（始终优先拿最新页面，离线回退缓存）
 *   静态资源（带 hash 的 assets）→ cache-first + 后台更新（hash 不可变，缓存命中率高）
 * 版本号：每次发布内容/代码升级时 +1，激活后通知页面"发现新版本"
 */
const CACHE = 'wb-lesson-v9'   // v6：首屏改为元数据驱动，清理旧缓存中的学段全文大块

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(['/', '/manifest.webmanifest', '/favicon.svg']))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => caches.open(CACHE))
      .then((cache) => cache.keys().then((ks) => {
        const MAX = 120
        if (ks.length > MAX) {
          const drop = ks.slice(0, ks.length - MAX)
          return Promise.all(drop.map((k) => cache.delete(k)))
        }
        return null
      }))
      .then(() => self.clients.claim())
      .then(() => {
        // 通知所有页面：新版本已就绪，可提示用户刷新
        return self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => client.postMessage({ type: 'WB_UPDATE' }))
        })
      }),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  // 仅处理同源 GET（外部 CDN 字体等走网络）
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return

  // 导航请求（页面 HTML）：network-first，避免缓存旧 HTML 引用已删除的旧 assets 导致白屏
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
        }
        return res
      }).catch(() => caches.match(req).then((c) => c || caches.match('/'))),
    )
    return
  }

  // 静态资源：缓存优先（命中即返回，不重复拉网络）；未命中 fetch 并缓存
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
        }
        return res
      })
    }),
  )
})
