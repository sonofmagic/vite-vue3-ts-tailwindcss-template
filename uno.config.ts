// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
