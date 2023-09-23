import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['typewriter', 'serif'],
        caption: ['conformity', 'sans-serif'],
      },
    }),
  ],
})