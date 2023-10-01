<script setup>
const props = defineProps({ image: Object, loading: String });

const dimensions = ref({
  width: props.image.filename.split("/")[5].split("x")[0],
  height: props.image.filename.split("/")[5].split("x")[1],
});
</script>

<template>
  <figure class="bg-white pt-4 px-4 pb-14 shadow-lg text-right mb-8">
    <NuxtImg
      class="block w-full h-auto"
      :width="dimensions.width"
      :height="dimensions.height"
      :alt="image?.alt || ''"
      provider="storyblok"
      :loading="loading || 'lazy'"
      :src="image.filename"
      sizes="sm:100vw md:500px"
    />
    <figcaption
      v-if="image.alt || image.name"
      class="relative top-4 right-3 text-2xl font-caption align-right"
    >
      {{ image.alt ? image.alt : image.name }}
    </figcaption>
  </figure>
</template>
