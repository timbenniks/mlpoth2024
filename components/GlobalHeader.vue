<script setup>
defineProps({ nav: Array });
</script>

<template>
  <div class="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95">
    <div class="mx-auto w-full max-w-screen-xl relative">
      <nuxt-link
        to="mailto:info@mylittleplaceonthehill.com"
        class="md:hidden absolute top-4 right-4 w-[109px] px-4 py-2 border underline bg-black text-white border-black hover:bg-white hover:text-black"
      >
        Book now
      </nuxt-link>
      <nav
        role="navigation"
        class="flex flex-col lg:flex-row justify-start lg:justify-center py-3 ml-8 lg:ml-0"
      >
        <navigation :nav="nav" />
      </nav>
    </div>
  </div>
</template>
