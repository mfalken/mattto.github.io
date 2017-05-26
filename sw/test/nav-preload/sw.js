function busySleep(millisec)
{
    var start = new Date();
    var date = null;
    do {
      date = new Date();
    } while(date - start < millisec);
}

// Simulate heavy Service Worker script.
busySleep(5000);

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  if (!event.preloadResponse) {
    console.log("event.preloadResponse is null");
    return;
  }

  if (event.request.url.indexOf('no_respondWith.html') != -1) {
    return;
  }

  if (event.request.url.indexOf('respondWith_preloadResponse.html') != -1) {
    const t0 = performance.now();
    event.respondWith(event.preloadResponse.then(resp => {
      if (resp == undefined) {
        return new Response('undef');
      }
      const resolution_time = performance.now() - t0;
      console.error('resolution_time: ' + resolution_time);
      return resp;
    }));
    return;
  }
});
