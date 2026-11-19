import { defineConfig } from 'vite'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import path from 'node:path'
import { Plugin } from './plugin-script.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [Plugin()],
  css: {
    transformer: 'postcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  resolve: {
    alias: {
      '@aalam-wc': path.resolve(import.meta.dirname, './node_modules/aalam-wc/')
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'aalam.[ext]'
      }
    },
    assetsDir: '.',
    cssMinify: 'lightningcss'
  }
})
