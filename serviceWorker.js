
const namzareminder = "Namaz Reminder";
const assets = [
  "index.html",
  "index.css",
  "app.js",
  "manifest.json",
  "child-image.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(namzareminder).then((cache) => {
      return cache.addAll(assets);
    })
   
  );
  console.log(caches)
})  