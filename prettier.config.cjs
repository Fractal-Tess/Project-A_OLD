const config = require('config/prettier.config.cjs');

module.exports = {
  ...config,
  plugins: [require('prettier-plugin-svelte')]
};
