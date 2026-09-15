import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio-web/',
  plugins: [
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        javascriptTask: 'tugas-javascript.html',
      },
    },
  },
})