import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

import llmsPlugin from './plugins/llmsPlugin.ts';
import qrDevPlugin from './plugins/qrDevPlugin.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    llmsPlugin({
      llmsDir: 'llms',
    }),
    qrDevPlugin(),
    cloudflare(),
  ],
});
