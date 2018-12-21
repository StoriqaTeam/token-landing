const phone = (string) => /^\d{7,30}$/.test(string);
const email = (string) => /^.+@.+$/.test(string);

const validators = {
  phone,
  email
};

module.exports = (type, value) => {
  return typeof validators[type] === 'function' ? validators[type](value) : false;
};
