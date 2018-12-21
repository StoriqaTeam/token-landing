server.get('/sold', (_, res) => {
  res.sendFile('sold.json', {root: __dirname + '/../../'});
});

server.get('/stats', (_, res) => {
  const axios = require('axios');

  axios.get('http://taurus.mixbytes.io/services/a9s/0xe8ce207631f9ac80688587cae05a159bd5356e78')
    .then(({data}) => {
      const utms = require('../utms');
      const formatNumber = require('../../src/helpers/formatNumber');

      const response = [];

      Object.keys(utms).forEach((utm) => {
        const address = utms[utm];
        const eths = formatNumber(data[address] / 1e18);

        response.push(`${utm} — ${eths}`);
      });

      res.send(response.join('<br />'));
    })
    .catch(() => {
      res.send('Something somewhere went terribly wrong. Try again, please');
    });
});
