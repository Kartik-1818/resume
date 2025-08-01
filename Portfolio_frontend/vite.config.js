import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0',  // This makes the server accessible on local network
    port: 5173,       // Optional: can be 3000 or any other
  },
})
