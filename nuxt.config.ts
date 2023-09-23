
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', "@storyblok/nuxt"],

  storyblok: {
    accessToken: "xmebRD8G9TXOrQwW8hg7igtt",
    devtools: false,
    apiOptions: {
      region: "eu"
    }
  },

  css: [
    '@/assets/css/styles.css',
  ],

  unocss: {
    preflight: true,
  },
})
