import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import yearPlugin from "@8hobbies/vite-plugin-year";
import { VitePluginRadar } from 'vite-plugin-radar';

import llmsPlugin from './plugins/llmsPlugin.ts';
import qrDevPlugin from './plugins/qrDevPlugin.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    yearPlugin(),
    llmsPlugin({
      llmsDir: 'llms'
    }),
    qrDevPlugin(),
    VitePluginRadar({
      microsoftClarity: {
        id: 's34inct1pg'
      }
    }),
  ],
});
