import {
  defineConfig,
  presetAttributify,
  presetTypography,
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['typewriter', 'serif'],
      },
    }),
  ],
})