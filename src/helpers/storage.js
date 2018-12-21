const getJSON = function (key) {
  const data = this.getItem(key);

  return JSON.parse(data) || {};
};

const setJSON = function (key, value) {
  this.setItem(key, JSON.stringify(value));

  return value;
};

const mergeJSON = function (key, value) {
  const state = this.getJSON(key);
  const nextState = Object.assign({}, state, value);

  return this.setJSON(key, nextState);
};

Storage.prototype.getJSON = getJSON;
Storage.prototype.setJSON = setJSON;
Storage.prototype.mergeJSON = mergeJSON;
