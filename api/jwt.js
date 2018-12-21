const jwt = require('jsonwebtoken');
const SECRET = 'blockchain@ICO#hype';

const sign = (payload) => {
  return jwt.sign(payload, SECRET, {expiresIn: '4h'});
};

const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
};

exports.sign = sign;
exports.verify = verify;
exports.SECRET = SECRET;
