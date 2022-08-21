const config = require('@package/config/prettier.config.cjs');

module.exports = {
  ...config,
  plugins: [require('prettier-plugin-svelte')]
};
