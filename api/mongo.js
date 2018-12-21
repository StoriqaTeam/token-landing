const mongoose = require('mongoose');
const config = require('../config/mongo').mongoConfig;
const uri = 'mongodb://' + config.user + ':' + config.pass + '@' + config.host + ':' + config.port + '/' + config.db;

// Get ready for coming deprecation of Mongoose promise
mongoose.Promise = global.Promise;

global.mongo = mongoose.connect(uri, {useMongoClient: true})
  .catch((err) => {
    console.error('Mongo connection error:', err);
    new Exception();
  });
