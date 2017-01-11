self.addEventListener('activate', e => {
  if (!self.registration.navigationPreload) {
    console.log('The browser does not support navigation preload.');
    return;
  }
  self.registration.navigationPreload.enable();
});


self.addEventListener('fetch', e => {
  if (!e.preloadResponse) {
    console.log('The browser does not support navigation preload.');
    return;
  }
  if (e.request.url.endsWith('?use-preload')) {
    console.log('Using preload response');
    e.respondWith(e.preloadResponse);
    return;
  }
  console.log('Not using preload response');
});
