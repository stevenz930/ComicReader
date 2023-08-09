import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  shortcuts:{
    'btn':'bg-blue my-2 rounded text-white'
  },
  theme:{
    breakpoints:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1792px',
      xxxxl: '1920px',
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ]
})