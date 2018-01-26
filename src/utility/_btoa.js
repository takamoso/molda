const sass = require('node-sass');

module.exports = function(string) {
  const buffer = Buffer.from(string.getValue());

  return sass.types.String(buffer.toString('base64'));
};