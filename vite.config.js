import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the site works at
// kulas1203.github.io/WD-Cafe/ without path configuration
export default defineConfig({
  base: './',
  plugins: [react()],
})
