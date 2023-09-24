<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.Text));
</script>

<template>
  <section class="max-w-screen-2xl mx-auto text-left" v-editable="blok">
    <h3 class="text-3xl mb-2">{{ blok.Title }}</h3>
    <div class="text-base prose xl:text-xl" v-html="text" />
    <p>{{ blok.Offset[0] }}</p>
    <p>{{ blok.imageposition[0] }}</p>
    <pre class="text-left">{{ blok.media }}</pre>
  </section>
</template>
