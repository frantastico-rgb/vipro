// Simplified Service Worker for VIPRO - Less Aggressive
const CACHE_NAME = 'vipro-v2'

// Only cache essential static assets
const PRECACHE_ASSETS = [
  '/_next/static/',
  '/globals.css'
]

// Install - minimal precaching
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

// Activate - cleanup only
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
  )
})

// Simplified fetch - only cache static assets
self.addEventListener('fetch', (event) => {
  const { request } = event
  
  // Only handle GET requests
  if (request.method !== 'GET') return
  
  // Only cache static Next.js assets
  if (request.url.includes('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) return response
        
        return fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return fetchResponse
        })
      })
    )
  }
})