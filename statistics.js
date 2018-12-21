/* eslint-disable max-len */
const axios = require('axios');

const eths = axios.get('https://api.etherscan.io/api?module=account&action=balance&address=0xf2c4497e74cd2aff31a8d4e5168f720c061eb218&tag=latest&apikey=HE818MTSIXWITWK5SZTT5XVDCAHZ767271')
  .then(({data: {result}}) => {
    result = Number(result);
    return result / 1e18 + 4425.303162735963792672;
  });

const stqs = axios.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x5c3a228510d246b78a3765c20221cbf3082b44a4&apikey=HE818MTSIXWITWK5SZTT5XVDCAHZ767271')
  .then(({data: {result}}) => {
    result = Number(result);
    return result / 1e18;
  });

Promise.all([eths, stqs])
  .then((result) => {
    const fs = require('fs');

    const sold = {
      eths: result[0],
      stqs: result[1]
    };

    fs.writeFileSync('./sold.json', JSON.stringify(sold), 'utf8');
  })
  .catch((result) => console.error('fiasko', result));
