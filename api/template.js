const template = require('lodash/template');
const fs = require('fs');

module.exports = (name) => {
  const pattern = fs.readFileSync(`./api/email_templates/${name}.html`, 'utf8', 'r');

  return template(pattern);
};
