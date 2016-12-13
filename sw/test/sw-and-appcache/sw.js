self.addEventListener('fetch' , e => {
  if (e.request.url.indexOf('abe.png') != -1) {
    e.respondWith(fetch('compass.jpg'));
  }
});
