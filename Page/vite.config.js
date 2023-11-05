import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Page/',
  assetsInclude: [
    '**/*.glb',
    '**/*.hdr',
  ],
  plugins: [
    react(),
    glsl(),
  ],
})
