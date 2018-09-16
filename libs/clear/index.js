function clear(other = '') {
  process.stdout.write(`\x1bc${other}`);
}

module.exports = clear;
