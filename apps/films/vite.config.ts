import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const getPath = (path: string): string =>
  new URL(path, import.meta.url).pathname;

export default defineConfig({
  plugins: [svelte()],

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
      $lib: getPath('src/lib/'),
      $src: getPath('src/'),
      $types: getPath('src/types'),
      $assets: getPath('src/assets/'),
      $stores: getPath('src/lib/stores/'),
      $util: getPath('src/util/')
    }
  },

  publicDir: false,

  clearScreen: false,
  server: {
    strictPort: true,
    port: 3000,
    host: '0.0.0.0'
  },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG
  }
});
