const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  address: String,
  utm: String,
  lang: String,
  country: String,
  code: String,
  'created_at': Date,
  'updated_at': Date
});

const User = mongoose.model('User', userSchema);

const createOrUpdate = (user) => {
  const {email, utm, lang, country, address, code} = user;

  return new Promise((resolve, reject) => {
    User.update({email},
      {
        code,
        lang,
        country,
        'updated_at': new Date(),

        $setOnInsert: {
          email,
          address,
          utm,
          'created_at': new Date()
        }
      },
      {upsert: true},
      (error, raw) => {
        if (error) {
          reject(error);
        } else {
          resolve(raw);
        }
      }
    );
  });
};

const get = (where) => {
  return new Promise((resolve, reject) => {
    User.findOne(where, 'address email lang country utm', (error, raw) => {
      if (error) {
        reject(error);
      } else {
        resolve(raw);
      }
    });
  });
};

exports.default = User;
exports.createOrUpdate = createOrUpdate;
exports.get = get;

