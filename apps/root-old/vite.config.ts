import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteSingleFile(),
    createHtmlPlugin({
      minify: true
    })
  ],
  server: {
    port: 5000,
    strictPort: true
  },
  root: './svelte',
  build: {
    outDir: '../build/svelte',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
