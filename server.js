require('./api/express');
require('./api/mongo');

const {started} = require('./src/helpers/constants');

require('./api/routes/subscribe');
require('./api/routes/validate');
require('./api/routes/exclude');
require('./api/routes/misc');

if (started) {
  require('./api/routes/auth');
  require('./api/routes/address');
}
