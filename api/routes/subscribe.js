const Preorder = require('../mongo/Preorder');

const validate = require('../../src/helpers/validate');
const normalize = require('../../src/helpers/normalize');

server.post('/subscribe', (req, res) => {
  const data = req.body;

  data.contact = normalize(data.type, data.contact);

  if (validate(data.type, data.contact)) {
    console.log('New preorder! Type: ' + data.type + ', value: ' + data.contact + '. Saving...');

    // check email
    const subscribe = require('../subscribe');
    subscribe.checkUser(data.contact)
    .then((checkEmailResult) => {
      if (checkEmailResult.result.inserted === 0) {
        res.json(checkEmailResult.result);
      } else if (checkEmailResult.result.inserted === 1) {
        Preorder.createOrUpdate(data)
        .then(() => {
          return subscribe[data.type](data.contact, data.lang, data.country, data.utm);
        })
        .then((result) => {
          res.json(Object.assign({}, checkEmailResult.result, result.result));
        })
        .catch((err) => {
          console.error('Writing to Mongo error:', err);
          res.sendStatus(500);
        });
      }
    })
    .catch(err => {
      res.sendStatus(500);
    });
  } else {
    console.error('Preorder validation failed:', data);

    res.sendStatus(422);
  }
});
