import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/veterans-advocate-center/',
  server: {
    port: 3000,
    open: true,
  },
})