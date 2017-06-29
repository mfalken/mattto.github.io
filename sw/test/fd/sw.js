/**
 * @fileoverview Description of this file.
 */
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
