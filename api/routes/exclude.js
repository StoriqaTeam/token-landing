server.post('/exclude', (req, res) => {
  const data = req.body;
  const exclude = require('../exclude');

  exclude.exclude(data.email)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});
