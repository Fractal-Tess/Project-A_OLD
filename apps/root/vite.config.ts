//@ts-ignore
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
      $types: getPath('src/types.ts'),
      $styles: getPath('src/styles/app.scss'),
      $stores: getPath('src/lib/stores/'),
      $src: getPath('src/'),
      $assets: getPath('src/assets/')
    }
  },

  clearScreen: false,

  server: {
    port: 29890,
    strictPort: true,
    host: '0.0.0.0'
  },
  build: {
    minify: !isDev,
    sourcemap: isDev
  }
});
