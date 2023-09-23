<script setup lang="ts">
const story = await useStoryblok("home", { version: "draft" });
</script>

<template>
  <global-header />
  <main class="max-w-screen-2xl mx-auto">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
  <background />
</template>

<style>
@import "@unocss/reset/tailwind.css";
</style>
