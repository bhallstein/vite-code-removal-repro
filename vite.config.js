import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    manifest: 'manifest.json',
    assetsDir: '',
    outDir: 'dist',
    emptyOutDir: true,
    commonJsOptions: {transformMixedEsModules: true},
    rollupOptions: {
      input: 'repro.js',
    },
  },
})
