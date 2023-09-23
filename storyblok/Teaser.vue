<script setup lang="ts">
defineProps({ blok: Object });
</script>

<template>
  <section class="max-w-screen-2xl mx-auto text-center" v-editable="blok">
    <img
      :src="blok.Logo.filename"
      :alt="blok.Logo.alt"
      loading="eager"
      width="600"
      class="mx-auto mt-12 block max-w-3xl w-10/12"
    />
    <address class="md:hidden mb-14 not-italic underline">
      <a href="mailto:info@mylittleplaceonthehill.com">
        info@mylittleplaceonthehill.com
      </a>
    </address>
    <h1 class="text-base md:text-lg max-w-3xl w-11/12 mt-12 mx-auto">
      {{ blok.headline }}
    </h1>

    <polaroid />

    <pre>{{ blok }}</pre>
  </section>
</template>
