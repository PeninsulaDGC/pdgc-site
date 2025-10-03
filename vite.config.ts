import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pdgc-site",
  plugins: [react()],
  // This is important for GitHub Pages so asset paths resolve correctly
  base: './',
})
