const exclude = (email, lists) => {
  const Unisender = require('unisender');
  const API_KEY = '6bb8hz9p3dz5s1cyjbkr5k8iuzaf9r7aw9k31m1y';
  const unisender = new Unisender({'api_key': API_KEY});

  return unisender.exclude({
    'list_ids': lists,
    'contact_type': 'email',
    contact: email
  });
};

module.exports.exclude = (email) => {
  const EMAIL_LIST = '15486509';

  return exclude(email, EMAIL_LIST);
};
