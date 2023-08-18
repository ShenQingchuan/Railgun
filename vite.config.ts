import process from 'node:process'
import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import webfontDownload from 'vite-plugin-webfont-dl'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins: PluginOption[] = [
    react(),
    Inspect(),
  ]
  if (process.env.NODE_ENV !== 'test')
    plugins.push(webfontDownload())
  if (!process.env.CI)
    plugins.push(mkcert())

  return {
    plugins,
  }
})
