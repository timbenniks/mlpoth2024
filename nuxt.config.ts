
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@storyblok/nuxt', '@nuxt/image', 'nuxt-jsonld'],

  storyblok: {
    accessToken: 'xmebRD8G9TXOrQwW8hg7igtt',
    devtools: false,
    apiOptions: {
      region: 'eu'
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
})
