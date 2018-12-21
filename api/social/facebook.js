const FB = require('fb');
const User = require('../mongo/User').default;

const facebook = (token) => {
  return new Promise((resolve, reject) => {
    FB.setAccessToken(token);

    FB.api('me', {fields: ['email']}, (res) => {
      if (!res || res.error) {
        reject();

        return;
      }

      resolve(res);
    });
  });
};

exports.facebook = facebook;
