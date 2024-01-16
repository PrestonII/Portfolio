import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  define: {
    'process.env': {},
  },
  build: {
    outDir: path.resolve(__dirname, './ibm'),
    lib: {
      name: 'ibm_web_components',
      entry: path.resolve(__dirname, './utils/ibmWebComponents.js'),
      fileName: () => 'ibm_web_components_bundle.js',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash].js`,
      },
    },
  },
});
