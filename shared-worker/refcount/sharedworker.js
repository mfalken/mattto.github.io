console.log("shared worker");

self.onconnect = function(e) {
  console.log("onconnect");
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    port.postMessage('doing fetch');
    // See that we can do a network request.
    fetch('text').then(r => r.text()).then(result => port.postMessage('fetched: ' + result));
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
