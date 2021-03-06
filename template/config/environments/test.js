// turn off max length eslint rule since this is a config file with long strs
/* eslint max-len: 0 */

module.exports = {
  mongoose: {
    debug: false
  },
  logger: {
    silent: true
  },
  // This needs to be this high otherwise some tests may fail
  webRequestTimeoutMs: 20000
};
