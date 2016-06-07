self.addEventListener('fetch', e => {
    if (e.request.url.indexOf('intercept') != -1) {
      e.respondWith(new Response('intercepted by SW'));
    }
  });
