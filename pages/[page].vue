<script setup>
const route = useRoute();

const story = await useStoryblok(route.params.page, {
  version: "published",
});

const { title, description, image } = story.value.content;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  image: `${image.filename}/m/1200x0`,
  ogSiteName: "My Little Place On The Hill",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterCreator: "My Little Place On The Hill",
  twitterDescription: description,
  twitterSite: "https://mylittleplaceonthehill.com/",
});

useJsonld({
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "My Little Place On The Hill",
  description,
  email: "info@mylittleplaceonthehill.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Kefalonia, Greece",
    addressLocality: "Koriana",
    postalCode: "28100",
  },
  telephone: "+30 6941529959",
  image: `${image.filename}/m/1200x0`,
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
  priceRange: "€170 - €400",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <main class="max-w-11/12 mx-auto">
    <StoryblokComponent v-if="story" :blok="story.content" />

    <div
      v-if="route.params.page === 'route'"
      class="max-w-screen-xl mx-auto justify-center mb-12"
    >
      <p class="mb-8">
        <a class="underline" href="javascript:window.print()"
          >Print this page</a
        >
      </p>

      <iframe
        width="800"
        height="500"
        frameborder="0"
        style="border: 0"
        loading="lazy"
        :src="`https://www.google.com/maps/embed/v1/directions?key=${runtimeConfig.public.google}&origin=Cephalonia+International+Airport&destination=My+Little+Place+on+the+Hill+Spartia+Greece&mode=driving&units=metric&waypoints=Kourkoumelata`"
      ></iframe>
    </div>
  </main>
  <background />
</template>

<style>
@import "@unocss/reset/tailwind.css";
</style>
