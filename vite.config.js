import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
})
