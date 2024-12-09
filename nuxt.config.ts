export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt',
    '@storyblok/nuxt',
    '@nuxt/image',
    'nuxt-jsonld',
  ],

  ssr: process.env.PREVIEW_MODE === 'true' ? false : true,

  routeRules: {
    '/**': { isr: true }
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    devtools: true,
    bridge: process.env.PREVIEW_MODE === 'true' ? true : false,
    apiOptions: {
      region: 'eu'
    }
  },

  runtimeConfig: {
    public: {
      google: process.env.MAPS_API_KEY,
      published_or_draft: process.env.PUBLISHED_OR_DRAFT
    }
  },

  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },

  css: [
    '@/assets/css/styles.css',
  ],

  unocss: {
    preflight: true,
  },

  compatibilityDate: '2024-09-19',
})