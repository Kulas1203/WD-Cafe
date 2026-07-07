import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/WD-Cafe/' matches the GitHub Pages URL kulas1203.github.io/WD-Cafe/
// so built asset links resolve correctly under that sub-path.
export default defineConfig({
  base: '/WD-Cafe/',
  plugins: [react()],
})
