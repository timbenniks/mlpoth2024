<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

defineProps({ polaroids: Array });
</script>
<template>
  <carousel :items-to-show="1" :wrap-around="true">
    <slide v-for="polaroid in polaroids" :key="polaroid">
      <Polaroid :image="polaroid" loading="eager" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<style>
:root {
  --vc-pgn-width: 8px;
  --vc-pgn-height: 8px;
}

.carousel__pagination {
  position: relative;
  top: -20px;
}

.carousel__pagination-button::after {
  border-radius: 100%;
}
</style>
