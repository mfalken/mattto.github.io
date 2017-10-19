// ice ice  baby baby
self.addEventListener('fetch', function(event) {
  console.log('fetch event: ' + event.request.url);
  if (event.request.url.indexOf('fetch-with-body') != -1) {
    console.log('getting body');
    event.respondWith(Promise.resolve()
      .then(() => { return event.request.text(); })
      .then(body => {
        console.log('body is: ' + body);
        return new Response(body);
      }));
    return;
  }
  if (event.request.url.indexOf('hello-world') != -1) {
    event.respondWith(new Response('hello world'));
  }

  if (event.request.url.indexOf('abe.png') != -1) {
    event.respondWith(fetch('compass.jpg'));
  }
});
