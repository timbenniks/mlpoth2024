<script setup>
const props = defineProps({ image: Object, loading: String });

const dimensions = ref({
  width: props.image.filename.split("/")[5].split("x")[0],
  height: props.image.filename.split("/")[5].split("x")[1],
});
</script>

<template>
  <figure class="bg-white text-right mb-8">
    <NuxtImg
      class="block w-full h-auto"
      :width="dimensions.width"
      :height="dimensions.width"
      :alt="image.alt ? image.alt : image.name"
      provider="storyblok"
      :loading="loading || 'lazy'"
      :src="image.filename"
      sizes="sm:100vw md:500px"
    />
    <!-- <figcaption
      v-if="image.alt || image.name"
      class="relative top-4 right-3 text-xl align-right"
    >
      {{ image.alt ? image.alt : image.name }}
    </figcaption> -->
  </figure>
</template>
