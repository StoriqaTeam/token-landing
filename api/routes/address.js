const jwt = require('../jwt');
const User = require('../mongo/User');

server.get('/address', (req, res) => {
  const token = req.headers.authorization;

  jwt.verify(token)
    .then(({email}) => {
      User.get({email})
        .then((user) => {
          res.status(200).send(user.address);
        })
        .catch(() => {
          res.sendStatus(403);
        });
    })
    .catch(() => {
      res.sendStatus(422);
    });
});
