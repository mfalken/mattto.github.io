self.addEventListener('fetch', e => {
    if (e.request.url.indexOf('intercept') != -1) {
      e.respondWith(new Response('intercepted by SW'));
    }
  });

self.addEventListener('message', e => {
    e.waitUntil(clients.claim()
      .then(() => e.data.port.postMessage('claim finished'))
      .catch(() => e.data.port.postMessage('claim failed')));
  });
