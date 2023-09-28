<script setup>
const story = await useStoryblok("home", {
  version: "draft",
});

const menuItems = computed(() => {
  const items = [];

  story.value.content.body.forEach((blok) => {
    if (blok.navigation) {
      items.push({
        name: blok.navigation_title,
        id: blok.navigation_title.replace(" ", "-").toLowerCase(),
      });
    }
  });

  return items;
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
