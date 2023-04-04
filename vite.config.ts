import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import open, {apps} from 'open';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

await open('http://localhost:5173/', {
  app: {
    name: apps.chrome
  }
})