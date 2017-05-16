self.addEventListener('fetch', function(event) {
  console.log('fetch event: ' + event.request.url);
  if (event.request.url.indexOf('hardcode') != -1) {
    event.respondWith(new Response('hard coded response'));
  }
});
