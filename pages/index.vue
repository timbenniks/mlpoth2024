<script setup>
const story = await useStoryblok("home", {
  version: "published",
});

const menuItems = computed(() => {
  const items = [];

  story.value.content.body.forEach((blok) => {
    if (blok.navigation) {
      items.push({
        name: blok.navigation_title,
        id: blok.navigation_title
          .replace(" ", "-")
          .replace("-& ", "-")
          .toLowerCase(),
      });
    }
  });

  return items;
});

const { title, description, image } = story.value.content;

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: image.filename,
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
  image: image.filename,
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
  priceRange: "€170 - €400",
});
</script>

<template>
  <global-header :nav="menuItems" />
  <main class="max-w-screen-2xl mx-auto">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
  <background />
</template>

<style>
@import "@unocss/reset/tailwind.css";
</style>
