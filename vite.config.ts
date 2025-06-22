import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { execSync } from 'child_process';
import { VitePWA } from 'vite-plugin-pwa';

import llmsPlugin from './plugins/llmsPlugin.ts';
import qrDevPlugin from './plugins/qrDevPlugin.ts';

let COMMIT_HASH = '';
try {
  COMMIT_HASH = execSync('git rev-parse --short HEAD').toString().trim();
} catch {
  COMMIT_HASH = '';
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(COMMIT_HASH),
  },
  plugins: [
    react(),
    tailwindcss(),
    llmsPlugin({
      llmsDir: 'llms',
    }),
    qrDevPlugin(),
    cloudflare(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'mdgen',
        short_name: 'mdgen',
        description: 'A fast, accessible, and mobile-friendly Vite + React app by Sigireddy Balasai.',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});
