import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['4461b10fcb3c.ngrok-free.app'] // 👈 Add your ngrok domain here
  }
})
