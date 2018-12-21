const moment = require('moment');

const ICOStart = '2017-10-25T00:00:00+00:00';

module.exports.preICOStart = '2017-10-18T20:00:00+03:00';
module.exports.ICOStart = ICOStart;
module.exports.preICOFinish = '2017-10-12T23:59:00+00:00';
module.exports.ICOFinish = '2017-11-05T23:59:00+00:00';

module.exports.prelaunch = true;
module.exports.started = false;
module.exports.finished = false;

module.exports.DAYS_FROM_START = moment().diff(ICOStart, 'days');
