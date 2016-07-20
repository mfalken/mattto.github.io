/**
 * @fileoverview Description of this file.
 */
onconnect = function(e) {
  var port = e.ports[0];
  port.onmessage = function(e) {
      fetch('intercept-tester.html')
          .then(resp => resp.text())
          .then(text => port.postMessage(text))
          .catch(err => port.postMessage('error'));
    };
  port.postMessage('i got connected');
};
