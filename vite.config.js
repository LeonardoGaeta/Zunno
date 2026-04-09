import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vitePluginSvgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSvgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      '@assets': path.resolve(__dirname, "src/assets"),
      '@contexts': path.resolve(__dirname, "src/contexts"),
      '@pages': path.resolve(__dirname, "src/pages"),
      '@routes': path.resolve(__dirname, "src/routes"),
    },
  }
});
