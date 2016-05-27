self.addEventListener('message', evt => {
evt.waitUntil(clients.matchAll({
      includeUncontrolled: true,
      type: 'window'
    }).then(activeClients => {
      if (activeClients.length > 0) {
        activeClients[0].navigate('navigated.html').then(client => console.log("yea"));
      }
    }));
});
