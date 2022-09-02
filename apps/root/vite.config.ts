import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from '@package/utils/path/index.js';
import { isDev } from '@package/config/env/index.js';

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss" as *;'
      }
    }
  },

  resolve: {
    alias: {
      $styles: resolve(import.meta.url, './src/styles/app.scss'),
      $src: resolve(import.meta.url, './src/')
    }
  },

  clearScreen: false,

  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0'
  },

  build: {
    minify: !isDev,
    sourcemap: isDev
  }
});
