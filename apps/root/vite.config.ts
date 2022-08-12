import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const getPath = (path: string): string =>
  new URL(path, import.meta.url).pathname;

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/variables.scss" as *;'
      }
    }
  },
  resolve: {
    alias: {
      $styles: getPath('src/styles/app.scss'),
      $src: getPath('src/'),
      $types: getPath('src/types'),
      $assets: getPath('src/assets/'),
      $stores: getPath('src/lib/stores/'),
      $util: getPath('src/util/')
    }
  },

  clearScreen: false,

  server: {
    port: 29890,
    strictPort: true
  },
  build: {
    minify: !isDev,
    sourcemap: isDev
  }
});
