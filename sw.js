/* 教师备课助手 · Service Worker
 * 策略：安装时预缓存核心壳；运行时缓存优先 + 后台更新（stale-while-revalidate）
 * 版本号：每次发布内容/代码升级时 +1，激活后通知页面"发现新版本"
 */
const CACHE = 'wb-lesson-v2'

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
