import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'node:path';

// https://vite.dev/config/
// https://github.com/RicardoValdovinos/vite-react-boilerplate

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve('./src/assets/')),
          dest: normalizePath(path.resolve('./dist')),
        },
      ],
    }),
  ],
});
