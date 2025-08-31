// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyWidget',
      fileName: 'my-widget',
      formats: ['iife'], // IIFE is best for browser usage
    },
  },
});
