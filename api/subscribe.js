const checkEmail = (email) => {
  const Unisender = require('unisender');
  const API_KEY = '6bb8hz9p3dz5s1cyjbkr5k8iuzaf9r7aw9k31m1y';
  const unisender = new Unisender({'api_key': API_KEY});

  return unisender.importContacts({
    'field_names[0]': 'email',
    'data[N][0]': email,
  });
};

const subscribe = (fields, lists) => {
  const Unisender = require('unisender');
  const API_KEY = '6bb8hz9p3dz5s1cyjbkr5k8iuzaf9r7aw9k31m1y';
  const unisender = new Unisender({'api_key': API_KEY});

  return unisender.subscribe({
    'list_ids': lists,
    fields,
    'double_optin': 0,
    overwrite: 2
  });
};

module.exports.checkUser = (email) => {
  return checkEmail(email);
};

module.exports.email = (email, lang, country, utm) => {
  const EMAIL_LIST = '14960469,15097053,15486509';

  return subscribe({email, lang, country, utm}, EMAIL_LIST);
};

module.exports.phone = (phone, lang, country, utm) => {
  const EMAIL_LIST = '11133329';

  return subscribe({phone, lang, country, utm}, EMAIL_LIST);
};
