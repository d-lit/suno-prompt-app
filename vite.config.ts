import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), externalizeDeps()],
  server: {
    port: 8888,
  },
});
