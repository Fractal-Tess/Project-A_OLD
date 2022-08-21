import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const getPath = path => new URL(path, import.meta.url).pathname;

const isDev = process.env.NODE_ENV === 'development' ? true : false;

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
      $styles: getPath('./src/styles/app.scss'),
      $src: getPath('./src/')
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
