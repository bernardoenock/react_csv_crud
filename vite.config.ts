import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// substitua 'react_csv_crud' pelo nome do seu repositório
export default defineConfig({
  base: '/react_csv_crud/',
  plugins: [react()],
})
