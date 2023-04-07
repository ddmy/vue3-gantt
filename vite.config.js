import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'Gantt',
      fileName: (format) => `gantt.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'html2canvas', 'lodash', 'lay-excel', '@ctrl/tinycolor'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          html2canvas: 'html2canvas',
          lodash: 'lodash',
          'lay-excel': 'lay-excel',
          '@ctrl/tinycolor': '@ctrl/tinycolor'
        }
      }
    },
    minify: 'terser',
    sourcemap: true
  }
})
