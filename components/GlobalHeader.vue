<script setup>
defineProps({ nav: Array });
</script>

<template>
  <div class="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95">
    <div class="mx-auto w-full max-w-screen-xl">
      <nav
        role="navigation"
        class="flex flex-col lg:flex-row justify-start lg:justify-center py-3 ml-8 lg:ml-0"
      >
        <navigation :nav="nav" />
      </nav>
    </div>
  </div>
</template>
