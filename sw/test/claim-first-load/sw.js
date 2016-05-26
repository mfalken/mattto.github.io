self.addEventListener('install', evt => {
  console.log('install');
  evt.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', evt => {
  console.log('activate');
  evt.waitUntil(self.clients.claim());
});
