import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { execSync } from 'child_process';

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
  ],
});
