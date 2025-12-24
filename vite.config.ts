import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Serve assets under /sathya-portfolio/ on GitHub Pages
  base: '/sathya-portfolio/',
  plugins: [react()],
})