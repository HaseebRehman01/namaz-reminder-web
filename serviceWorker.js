const namazreminder = "namazreminder"
const asset = [
  "/",
  "/index.html",
  "/css/index.css",
  "/js/app.js",

 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(namazreminder).then(cache => {
      cache.addAll(asset)
    })
  )
})