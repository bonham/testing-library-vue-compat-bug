import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: '@vue/compat',
    },
  },
  test: {
    environment: 'jsdom',
  },
});
