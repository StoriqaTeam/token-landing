const phone = (string) => string.replace(/[^\d]+/g, '');
const email = (string) => string.trim().toLowerCase();

const normalizers = {
  phone,
  email
};

module.exports = (type, value) => {
  return typeof normalizers[type] === 'function' ? normalizers[type](value) : value;
};
