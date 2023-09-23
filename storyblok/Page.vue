<script setup lang="ts">
defineProps({ blok: Object });
</script>

<template>
  <section v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </section>
</template>
