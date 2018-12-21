const crypto = require('crypto');

const User = require('../mongo/User');

const jwt = require('../jwt');
const sendmail = require('../sendmail');
const template = require('../template');
const utms = require('../utms');

const validate = require('../../src/helpers/validate');
const normalize = require('../../src/helpers/normalize');

const getContractAddress = (utm) => {
  return utms[utm] || utms.DEFAULT_ADDRESS;
};

const generateVerifyCode = (email) => {
  const md5 = require('md5');

  const SALT = 'qC7c*np7VpBt;ZYK7MYnAs9#VBcyiTzZtr/CFn%h,W2DyxR,UZKddomB$CkH(HQ=';
  const date = Date.now();
  const payload = [SALT, email, date].join('\n');

  return md5(payload);
};

server.post('/auth', (req, res) => {
  const user = req.body;

  user.email = normalize('email', user.email);

  if (validate('email', user.email)) {
    user.address = getContractAddress(user.utm);
    user.code = generateVerifyCode(user.email);

    User.createOrUpdate(user)
      .then(() => {
        const body = template('verify_email.en')({code: user.code});
        const title = 'Verification code';

        sendmail.send(user.email, title, body)
          .then(() => {
            res.sendStatus(200);
          })
          .catch(({error}) => {
            switch (error.code) {
              case 204: // No valid recipients, email unsubscribed
                res.sendStatus(403);

                break;

              default:
                res.sendStatus(500);
            }
          });

        res.status(200);
      })
      .catch((err) => {
        console.error('Mongo#createOrUpdate error:', err);

        res.sendStatus(500);
      });

  } else {
    res.sendStatus(422);
  }
});

server.post('/auth/verify', (req, res) => {
  let {code, email} = req.body;

  email = normalize('email', email);

  User.get({email, code})
    .then((user) => {
      if (user !== null) {
        const token = jwt.sign({email});
        const subscribe = require('../subscribe');

        subscribe.email(email, user.lang, user.country, user.utm);

        res.status(200).send(token);
      } else {
        res.sendStatus(422);
      }
    })
    .catch((err) => {
      console.error('Mongo#createOrUpdate error:', err);

      res.sendStatus(500);
    });
});
