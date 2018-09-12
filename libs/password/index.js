const bcrypt = require('bcryptjs');

function hash(pwd, saltLen = 10) {
  const salt = bcrypt.genSaltSync(saltLen);
  return bcrypt.hashSync(pwd, salt);
}

function compare(pwd1, pwd2) {
  return bcrypt.compareSync(pwd1, pwd2);
}

module.exports = {
  hash,
  compare,
};
