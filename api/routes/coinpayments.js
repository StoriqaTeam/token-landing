const Coinpayments = require('coinpayments');

const client = new Coinpayments({
  key: 'b32cb607b82c25438343da51fa56198d816917d20a08f7c0c387c3754a79751d',
  secret: 'B114b5cD71C3e76426bb707021775dF74BB218bF30A6A1b7c526EaB5Fb100C7d'
});

server.get('/coinpayments', (req, res) => {
  client.rates({}, (err, result) => {
    res.status(200).send(result);
  });
});
