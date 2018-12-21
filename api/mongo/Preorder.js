const mongoose = require('mongoose');
const querystring = require('querystring');

const preorderSchema = new mongoose.Schema({
  type: String,
  contact: {type: String, unique: true},
  verified: {type: Boolean, default: false},
  utm: String,
  lang: String,
  country: String,
  'created_at': Date,
  'updated_at': Date
});

const Preorder = mongoose.model('Preorder', preorderSchema);

const createOrUpdate = (preorder) => {
  const {contact, type, utm, lang, country} = preorder;

  return new Promise((resolve, reject) => {
    Preorder.update({contact},
      {
        type,
        lang,
        country,
        utm: querystring.stringify(utm),
        'updated_at': new Date(),

        $setOnInsert: {
          contact,
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

exports.Preorder = Preorder;
exports.createOrUpdate = createOrUpdate;
