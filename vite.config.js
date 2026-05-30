import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 100,
        effort: 4,
      },
      jpeg: {
        quality: 100,
        mozjpeg: false,
      },
      jpg: {
        quality: 100,
        mozjpeg: false,
      },
    }),
  ],
})
