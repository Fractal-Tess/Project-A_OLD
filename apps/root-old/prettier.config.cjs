const config = require('../../prettier.config.cjs');

module.exports = {
  ...config,
  plugins: [require('prettier-plugin-svelte')]
};
