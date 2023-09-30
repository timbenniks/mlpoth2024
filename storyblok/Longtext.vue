<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.text));
</script>

<template>
  <section class="max-w-screen-xl mx-auto justify-center" v-editable="blok">
    <div class="text-base prose xl:text-xl text-left mb-12" v-html="text" />

    <div class="flex space-x-2 flex-col md:flex-row">
      <Polaroid
        v-for="image in blok.images"
        :image="image"
        class="self-start"
      />
    </div>
  </section>
</template>
