function busySleep(millisec)
{
    var start = new Date();
    var date = null;
    do {
      date = new Date();
    } while(date - start < millisec);
}
/*
// Simulate heavy Service Worker script.
busySleep(500);

self.addEventListener('install', function(event) {
    event.addNavigationPreload();
  });

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
    event.respondWith(event.preloadResponse);
    return;
  }
  if (event.request.url.indexOf('respondWith_new_Response.html') != -1) {
    event.respondWith(new Response('Hello world'));
    return;
  }
});
*/
