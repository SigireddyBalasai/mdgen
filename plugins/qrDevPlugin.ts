import qrcode from 'qrcode-terminal';
import type { Plugin, ViteDevServer } from 'vite';

export default function qrPlugin(): Plugin {
  return {
    name: 'vite-plugin-qr',
    apply: 'serve', // Only apply in dev mode
    configureServer(server: ViteDevServer) {
      server.httpServer?.once('listening', () => {
        const resolvedUrls = (server.resolvedUrls?.network || []) as string[];
        const logger = server.config.logger;
        if (resolvedUrls.length > 0) {
          logger.info(
            '\nScan a QR code to open the dev server (network preferred):'
          );
          for (const url of resolvedUrls) {
            qrcode.generate(url, { small: true });
            logger.info(url + '\n');
          }
        } else {
          // fallback to localhost
          const address = server.httpServer!.address();
          let url = '';
          if (typeof address === 'object' && address) {
            const port = address.port;
            url = `http://localhost:${port}/`;
          } else {
            url = 'http://localhost:5173/';
          }
          logger.info(
            '\nScan this QR code to open the dev server (localhost fallback):'
          );
          qrcode.generate(url, { small: true });
          logger.info(url + '\n');
        }
      });
    },
  };
}
