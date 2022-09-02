import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { getEnvPath } from '@package/config/env/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
      scss: {
        prependData: '@use "./src/variables.scss" as *;'
      }
    })
  ],

  kit: {
    adapter: adapter(),
    env: {
      dir: getEnvPath()
    }
  }
};

export default config;
