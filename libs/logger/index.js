const Signale = require('signale').Signale;

const Logger = scope => new Signale({
  stream: process.stdout,
  scope,
  types: {
    success: {
      badge: '⬢',
      color: 'green',
      label: 'success',
    },
    warning: {
      badge: '⬢',
      color: 'yellow',
      label: 'warning',
    },
    error: {
      badge: '⬢',
      color: 'red',
      label: 'error',
    },
  },
});

module.exports = Logger;
