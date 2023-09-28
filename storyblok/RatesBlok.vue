<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
  <pre class="text-left" v-editable="blok">{{ blok }}</pre>
</template>
