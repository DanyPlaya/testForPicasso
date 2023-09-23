import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  base:'/testForPicasso',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  
})
