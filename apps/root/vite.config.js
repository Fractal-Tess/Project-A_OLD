import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  server: {
    port: 29890,
    strictPort: true
  }
};

export default config;
