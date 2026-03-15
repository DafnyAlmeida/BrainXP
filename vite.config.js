import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ESTA LINHA ABAIXO É A QUE ESTÁ FALTANDO OU COM ERRO:
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Aqui ele usa a variável importada acima
  ],
})
