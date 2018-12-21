server.post('/validate', (req, res) => {
  const data = req.body;

  const axios = require('axios');
  axios.get(`https://api.mailgun.net/v3/address/validate?address=${data.email}`, {
    auth: {
      username: 'api',
      password: 'pubkey-f8d45fd2b9adeb9067534c6af2ee730c'
    }
  })
  .then((validateEmailResult) => {
    res.json(validateEmailResult.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  });
});
