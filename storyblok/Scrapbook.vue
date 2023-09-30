<script setup>
const props = defineProps({ blok: Object });

const navId = computed(() => {
  return props.blok.navigation_title
    .replace(" ", "-")
    .replace("-& ", "-")
    .toLowerCase();
});

const images = computed(() => {
  return props.blok.images.map((image) => {
    return image.filename;
  });
});
</script>

<template>
  <section
    class="mx-auto text-left mt-44 max-w-11/12"
    v-editable="blok"
    :id="navId"
  >
    <h3 class="text-3xl mb-2">{{ blok.title }}</h3>

    <!-- <pre class="text-left">{{ images }}</pre> -->
  </section>
</template>

<style>
.flipbook {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
